import { communityLinks, quickLinks, socialMediaLinks } from '@/assets/data/footer-items';
import LogoBox from '@/components/LogoBox';
import { Link } from 'react-router-dom';
import DecorationPattern from './components/DecorationPattern';
import CreditWithLanguage from './components/CreditWithLanguage';
import appStore from '@/assets/images/elements/app-store.svg';
import decorationPattern2 from '@/assets/images/elements/decoration-pattern-2.svg';
import googlePlay from '@/assets/images/elements/google-play.svg';
import { Col, Container, Row } from 'react-bootstrap';
const Footer1 = () => {
  return <footer className="bg-dark position-relative overflow-hidden pb-0 pt-6 pt-lg-8" data-bs-theme="dark">

      <DecorationPattern />

      <div className="position-absolute top-0 end-0 mt-n3 me-n4">
        <img src={decorationPattern2} style={{
        opacity: '0.05'
      }} />
      </div>

      <Container className="position-relative mt-5">
        <Row className="g-4 justify-content-between">
          <Col lg={3}>

            <LogoBox imageClassName='h-40px' className="me-0" />

            <p className="mt-4 mb-2">A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.</p>
          </Col>
          <Col lg={8} xxl={7}>
            <Row className="g-4">
              <Col xs={6} md={4}>
                <h6 className="mb-2 mb-md-4">Quick links</h6>
                <ul className="nav flex-column">

                  {quickLinks.map((item, idx) => <li key={(item.link ?? '') + idx} className="nav-item">
                      <Link className="nav-link" to={item.link ?? ''}>
                        {item.name}
                        {item.badge && <span className="badge text-bg-danger ms-2">{item.badge}</span>}
                      </Link>
                    </li>)}

                </ul>
              </Col>
              <Col xs={6} md={4}>
                <h6 className="mb-2 mb-md-4">Community</h6>
                <ul className="nav flex-column">

                  {communityLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return <li key={(item.link ?? '') + idx} className="nav-item">
                        <Link className="nav-link" to={item.link ?? ''}>
                          {item.name}
                          {Icon && <Icon size={13} className="ms-2" />}
                        </Link>
                      </li>;
                })}

                </ul>
              </Col>
              <Col md={4}>
                <h6 className="mb-2 mb-md-4">App available on</h6>
                <Row className="g-2 mt-2 mb-4 mb-sm-5">
                  <Col xs={5} sm={4} md={6}>
                    <Link to=""> <img src={googlePlay} alt='google-play' /> </Link>
                  </Col>
                  <Col xs={5} sm={4} md={6}>
                    <Link to=""> <img src={appStore} alt="app-store" /> </Link>
                  </Col>
                </Row>
                <h6 className="mb-2 mb-md-4">Follow on</h6>
                <ul className="list-inline mb-0 mt-3">

                  {socialMediaLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                        <Link className="btn btn-xs btn-icon btn-light" to="">
                          {Icon && <Icon />}
                        </Link>
                      </li>;
                })}

                </ul>
              </Col>
            </Row>
          </Col>

        </Row>
        <hr className="mt-4 mb-0" />

        <CreditWithLanguage />

      </Container>
    </footer>;
};
export default Footer1;