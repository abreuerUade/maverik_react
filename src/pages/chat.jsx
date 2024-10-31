import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from 'react';
import { BiPlus, BiUser, BiSend, BiSolidUserCircle } from 'react-icons/bi';
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';
import { Col, Row, Container } from "react-bootstrap";
import logo from '@/assets/images/logo-solo-m.png';
import Footer6 from '@/components/footer/Footer6';
import PageTitle from '@/components/PageTitle';
import TopNavigationBarCustom from '@/components/topbar/TopNavigationBarCustom';
import { newCopilotSession, sendInput } from "@/services";
import storage from "@/services/shared/storage";
import useOnMountUnsafe from "@/pages/hooks/useOnMountUnsafe";
import { set } from 'lodash';
import { useNotificationContext } from '@/states/useNotificationContext';

function ChatComponent() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [localChats, setLocalChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const scrollToLastItem = useRef(null);

  const {
    showNotification
  } = useNotificationContext();

  const createSession = async () => {
    const session_purpose_id = Number(storage.get("session_purpose_id"));
    let data;
    if (session_purpose_id === 2) {
        data = {
            proposito_sesion_id: storage.get("session_purpose_id"),
            objetivo_id: storage.get("goal_id"),
            capital_inicial: storage.get("money_available_for_goal"),
            horizonte_temporal: storage.get("desired_time"),
            tolerancia_al_riesgo_id: storage.get("risk_tolerance_id"),
        };
    } else {
        data = {
            proposito_sesion_id: storage.get("session_purpose_id"),
        };
    }

    try {
      setIsResponseLoading(true);
      showNotification({
        message: 'Su consulta está siendo analizada',
        type: 'success',
        delay: 7000,
      });

      const sessionInstance = await newCopilotSession(data);
      if (sessionInstance) {
        const { id:session_id, titulo_chat, primer_input } = sessionInstance;
        storage.set("session_id", session_id);
        
        const response = await sendInput({
          sesion_asesoria_id: session_id, 
          input: primer_input, 
        });
        
        setCurrentTitle(titulo_chat);
        setText(response.input);
        setMessage({"role": "system", "content": response.output});
        setTimeout(() => {
          setText('');
        }, 2);
      }
    } catch (e) {
      setErrorText(e.message);
      console.error(e);
    } finally {
      setIsResponseLoading(false);
    }
  };

  const createNewChat = () => {
    setMessage(null);
    setText('');
    setCurrentTitle(null);
  };

  const backToHistoryPrompt = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setText('');
  };

  const toggleSidebar = useCallback(() => {
    setIsShowSidebar((prev) => !prev);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsResponseLoading(true);
    setErrorText('');

    const session_id = storage.get("session_id");

    try {  
      const response = await sendInput({
        sesion_asesoria_id: session_id, 
        input: text, 
      });

      setMessage({"role": "system", "content": response.output});
      setTimeout(() => {
        scrollToLastItem.current?.lastElementChild?.scrollIntoView({
          behavior: 'smooth',
        });
      });

      setTimeout(() => {
        setText('');
      }, 2);

      // const data = await response.json();
      // if (data.error) {
      //   setErrorText(data.error.message);
      //   setText('');
      // } else {
      //   setErrorText(false);
      // }
      // if (!data.error) {
      //   setErrorText('');
      //   setMessage(data.choices[0].message);
      //   setTimeout(() => {
      //     scrollToLastItem.current?.lastElementChild?.scrollIntoView({
      //       behavior: 'smooth',
      //     });
      //   }, 1);
      //   setTimeout(() => {
      //     setText('');
      //   }, 2);
      // }
    } catch (e) {
      setErrorText(e.message);
      console.error(e);
    } finally {
      setIsResponseLoading(false);
    }
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsShowSidebar(window.innerWidth <= 640);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useOnMountUnsafe(() => {
    console.log("executing use effect (1) ...");
    const storedChats = storage.get('previousChats');

    if (storedChats) {
      setLocalChats(JSON.parse(storedChats));
    }
    
    async function doCreateSession() {
      await createSession();
    }

    const session_id = storage.get("session_id");
    if (!session_id) {
      setIsResponseLoading(true);
      doCreateSession();
      setIsResponseLoading(false);
    } 
  });

  useEffect(() => {
    console.log("executing use effect (2) ...");
    // if (!currentTitle && text && message) {
    //   setCurrentTitle(text);
    // }

    if (currentTitle && text && message) {
      console.log("actualizando el chat ...");
      const newChat = {
        title: currentTitle,
        role: 'user',
        content: text,
      };

      const responseMessage = {
        title: currentTitle,
        role: 'system',
        content: message.content,
      };

      setPreviousChats((prevChats) => [...prevChats, newChat, responseMessage]);
      setLocalChats((prevChats) => [...prevChats, newChat, responseMessage]);

      const updatedChats = [...localChats, newChat, responseMessage];
      storage.set('previousChats', JSON.stringify(updatedChats));
    }
  }, [message, currentTitle]);

  const currentChat = (localChats || previousChats).filter(
    (prevChat) => prevChat.title === currentTitle
  );

  const uniqueTitles = Array.from(
    new Set(previousChats.map((prevChat) => prevChat.title).reverse())
  );

  const localUniqueTitles = Array.from(
    new Set(localChats.map((prevChat) => prevChat.title).reverse())
  ).filter((title) => !uniqueTitles.includes(title));

  return <>
      <PageTitle title='Copiloto Financiero' />
      
      <TopNavigationBarCustom menuProps={{
      showContactUs: true,
      ulClassName: 'mx-auto'
    }} showSignUp />  

      <main>
      <section className="position-relative overflow-hidden">
      <Container className="position-relative">
      <div className='chat-container'>
        <section className="sidebar open">
          <div className='sidebar-header' onClick={createNewChat} role='button'>
            <BiPlus size={20} color="white"/>
            <button>Nueva Sesión</button>
          </div>
          <div className='sidebar-history'>
            {uniqueTitles.length > 0 && previousChats.length !== 0 && (
              <>
                <p>En curso</p>
                <ul>
                  {uniqueTitles?.map((uniqueTitle, idx) => {
                    const listItems = document.querySelectorAll('li');

                    listItems.forEach((item) => {
                      if (item.scrollWidth > item.clientWidth) {
                        item.classList.add('li-overflow-shadow');
                      }
                    });

                    return (
                      <li
                        key={idx}
                        onClick={() => backToHistoryPrompt(uniqueTitle)}
                      >
                        {uniqueTitle}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
            {localUniqueTitles.length > 0 && localChats.length !== 0 && (
              <>
                <p>Sesiones Previas</p>
                <ul>
                  {localUniqueTitles?.map((uniqueTitle, idx) => {
                    const listItems = document.querySelectorAll('li');

                    listItems.forEach((item) => {
                      if (item.scrollWidth > item.clientWidth) {
                        item.classList.add('li-overflow-shadow');
                      }
                    });

                    return (
                      <li
                        key={idx}
                        onClick={() => backToHistoryPrompt(uniqueTitle)}
                      >
                        {uniqueTitle}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </section>

        <section className='main'>
          <div className='empty-chat-container'>
            <h3>Copiloto Financiero</h3>
          </div>
          {!currentTitle && (
            <p>He recibido tu consulta, en breve recibirás asistencia.</p>
          )}

          {isShowSidebar ? (
            <MdOutlineArrowRight
              className='burger'
              size={28.8}
              onClick={toggleSidebar}
            />
          ) : (
            <MdOutlineArrowLeft
              className='burger'
              size={28.8}
              onClick={toggleSidebar}
            />
          )}
          <div className='main-header'>
            <ul>
              {currentChat?.map((chatMsg, idx) => {
                const isUser = chatMsg.role === 'user';

                return (
                  <li key={idx} ref={scrollToLastItem}>
                    {isUser ? (
                      <div>
                        <BiSolidUserCircle size={28.8} />
                      </div>
                    ) : (
                      <img src={logo} alt='Maverik' />
                    )}
                      <div>
                          <p>{chatMsg.content}</p>
                      </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <Container className='main-bottom'>
          <Row>
            {errorText && <p className='errorText'>{errorText}</p>}
            <form className='form-container' onSubmit={submitHandler}>
              <Col className="col-10">
              <input
                type='text'
                placeholder='Escriba su consulta.'
                spellCheck='false'
                className='form-check-input form-control' 
                value={isResponseLoading ? 'Procesando...' : text}
                onChange={(e) => setText(e.target.value)}
                readOnly={isResponseLoading}
              />
              </Col>
              <Col className="col-2 p-2">
              <button type='submit' className='btn btn-primary' disabled={isResponseLoading}>
              Consultar
              </button>
              </Col>
            </form>
            </Row>
          </Container>
        </section>
      </div>
      </Container>
      </section>
      </main>
      <Footer6 />
      </>
}

export default ChatComponent;
