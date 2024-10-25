import React, { useEffect, useState } from "react";
import TopNavigationBarCustom from '@/components/topbar/TopNavigationBarCustom';
import Footer6 from '@/components/footer/Footer6';
import PageTitle from '@/components/PageTitle';
import { Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { goals, riskTolerances, sessionPorpuses } from "@/pages/data";
import TextFormInput from "@/components/form/TextFormInput";
import SelectFormInput from "@/components/form/SelectFormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useAuthContext } from '@/states/useAuthContext';
import storage from "@/services/shared/storage";


export const SessionPurposeSelector = () => {
    const { user } = useAuthContext();
    console.log("user:", user); // TODO: redirect if not logged
    const navigate = useNavigate();

    useEffect(() => {
        storage.set("wizard_completed", false);
    }, []);

    const goTo = (e, path, session_purpose_id) => {
        e.preventDefault();
        console.log(path, session_purpose_id);
        storage.set("session_purpose_id", session_purpose_id);
        navigate(path);
    }
    return <>
        <Container>
            <Row className="g-4 g-lg-5 mb-3">
            <div className="inner-container-small text-center mb-4">
            <h3 className="mb-4">¿Que te gustaría hacer hoy?</h3>
            </div>
            </Row>
            {sessionPorpuses.map(({description, value, path}, idx) => (
            <Row className="g-4 g-lg-5 mb-3">
                <Col>
                <Card className="card-hover-shadow border-primary-hover border h-100 p-4">
                    <Card.Body className="p-0">
                    <h6>{description}</h6>
                    </Card.Body>
                    <Card.Footer className="bg-transparent p-0 mt-1">
                    <Link onClick={(e) => goTo(e, path, value)} className="icon-link icon-link-hover heading-color text-primary-hover stretched-link mb-0">
                    Continuar<BsArrowRight className="bi" /> 
                    </Link>
                    </Card.Footer>
                </Card>
                </Col>
            </Row>
            ))}
        </Container>
    </>
}

export const GoalSelector = () => {
    const navigate = useNavigate();
    const goTo = (e, path, goal_id) => {
        e.preventDefault();
        console.log(path, goal_id);
        storage.set("goal_id", goal_id);
        navigate(path);
    }
    return <> 
    <Container>
        <Row className="g-4 g-lg-5 mb-3">
            <div className="inner-container-small text-center mb-4">
                <h3 className="mb-4">Dime, ¿que objetivo quieres lograr?</h3>
            </div>
        </Row>
        <Row className="g-4 g-lg-5 mb-3">
            {goals.map(({description, value}, idx) =>
            <Col sm={6} lg={6} xl={6} className='g-3' key={idx}>
            <Card className="card-hover-shadow border-primary-hover border h-100 p-4">
                <Card.Body className="p-0">
                <Link onClick={(e) => goTo(e, `/wizard/goals/${value}`, value)} className="icon-link icon-link-hover heading-color text-primary-hover stretched-link mb-0">
                <h6>{description}</h6><BsArrowRight className="bi" /> 
                </Link>
                </Card.Body>
            </Card>
            </Col>
            )}
        </Row>
    </Container>
    </>
} 

export const GoalDetailsForm = () => {
    const navigate = useNavigate();
    const [ riskTolerance, setRiskTolerance ] = useState(null);
    const { goal_id } = useParams();
    console.log(goal_id);

    const goal = goals.find((e) => e.value === Number(goal_id))

    const onSubmit = (values) => {
        console.log(values);
        const { money_available_for_goal, desired_time, risk_tolerance } = values;

        storage.set("money_available_for_goal", money_available_for_goal);
        storage.set("desired_time", desired_time);
        storage.set("risk_tolerance_id", risk_tolerance);
        storage.set("wizard_completed", true);
        navigate("/chat");
    }

    const handleChange = e => {
        e.persist();
        
        const riskTolerance_choice = e.target.getAttribute("data-risktolerance")
        setRiskTolerance(Number(riskTolerance_choice))
    };

    const testInvestorSchema = yup.object({
        money_available_for_goal: yup.number().required("No olvides la cantidad de dinero inicial para empezar a lograr este objetivo").positive("Debe ser mayor a cero").min(10000, "Puedes empezar a partir de 10000 ARS").typeError("Debe ser un número"),
        desired_time: yup.number().required("Seleccioa en cuánto tiempo quieres lograrlo").typeError("Debe ser un número"),
        risk_tolerance: yup.number().required('Selecciona una opción de tolerancia al riesgo'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm(
    {
        resolver: yupResolver(testInvestorSchema),
        defaultValues: {}
    }
    );

    return <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Container>
        <Row className="g-4 g-lg-5 mb-3 border-bottom">
            <Col>
            <div className="text-start mb-2">
                <h3 className="mb-3">Ok, si tú objetivo es:<br/><span className="text-primary">{goal.description}</span></h3>
                <p>Es importante que sepas los objetivos deben ser medibles y alcanzables en un plazo de tiempo bien definido.</p>
            </div>
            </Col>
        </Row>
        <Row className="g-3 mt-3">
            <Col>
                <div>
                    <span style={{ fontWeight: 'bold' }}>¿Cuánto dinero tienes ahorrado para alcanzar este objetivo?:</span>
                    <TextFormInput 
                    name="money_available_for_goal" 
                    containerClass='mb-4' 
                    control={control} 
                    placeholder="0.00"/>
                </div>
                <div className="mb-3">
                    <span style={{ fontWeight: 'bold' }}>¿En cuánto tiempo te gustaría alcanzar este objetivo?:</span>
                    <SelectFormInput name="desired_time" containerClass="col-md-4" control={control}>
                    <option value={0}>Elije una opción</option>
                    <option value={36}>3 años</option>
                    <option value={48}>4 años</option>
                    <option value={60}>5 años</option>
                    <option value={96}>8 años</option>
                    <option value={120}>10 años</option>
                    <option value={180}>15 años</option>
                    <option value={240}>20 años</option>
                    </SelectFormInput>
                </div>
            </Col>
        </Row>
    </Container>
    <Container>
        <span style={{ fontWeight: 'bold' }} className="mb-2">¿Cuál es tu tolerancia al riesgo para lograr este objetivo?:</span>
        {riskTolerances.map(({name, value, description}, idx) => (
        <Row className="g-3 mt-3">
            <Col>
            <div className="form-check">
            <input 
                type="radio" 
                id={"risk_tolerance-" + value.toString()} 
                name="risk_tolerance"
                data-risktolerance={value}
                {...register("risk_tolerance")}
                className="form-check-input" 
                value={value} 
                onChange={handleChange} 
                checked={riskTolerance === value}
            />
            <label htmlFor={"risk_tolerance-" + value.toString()} className="form-check-label">
            <div>{name}</div>
            <div>{description}</div>
            </label>
            </div>
            </Col>
        </Row>
        ))}
        <Row className="g-3 mt-3">
            <div className="align-items-center mt-0">
                <div className="d-grid">
                <button className="btn btn-primary mb-0" type="submit">Continuar</button>
                </div>
            </div>
        </Row>
    </Container>
    </form>
    </>
}

const WizardPage = ({step}) => {
    return <>
    
    <PageTitle title='Copiloto Financiero - Asistente' />

    <TopNavigationBarCustom menuProps={{
        showContactUs: true,
        ulClassName: 'mx-auto'
      }} showSignUp />

    <main>
        <section className="position-relative overflow-hidden">
            <Container className="position-relative">
                {
                    step === "session_purpose_selector" && <SessionPurposeSelector/>
                }

                {
                    step === "goal_selector" && <GoalSelector/>
                }

                {   
                    step === "goal_details_form" && <GoalDetailsForm goal={goals[0]}/>
                }
            </Container>
        </section>
    </main>

    <Footer6 />
    </>
};

export default WizardPage;
