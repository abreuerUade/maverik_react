import React, { useState } from "react";
import TopNavigationBarCustom from '@/components/topbar/TopNavigationBarCustom';
import Footer6 from '@/components/footer/Footer6';
import PageTitle from '@/components/PageTitle';

import SelectFormInput from "@/components/form/SelectFormInput";
import TextFormInput from "@/components/form/TextFormInput";
import { Button, Card, CardBody, CardHeader, Col, Form, FormCheck, Row, Container, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsPlusLg } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { testInvestorQuestions } from "@/pages/data";
import { signUp } from "@/services"
import { getConfig } from "@/services/shared/config"
import _ from 'lodash';

const SignUpPage = () => {
  console.log(getConfig());
  const questions = Object.fromEntries(
    testInvestorQuestions.map(({id, question, options}) => ([id, 0]))
  ); 

  const [choices, setChoices] = useState(questions); // 7 questions
  const [flash, setFlash] = useState({msg: "", type: "primary"});
  const navigate = useNavigate();

  const handleChange = e => {
    e.persist();
    const question = e.target.getAttribute("data-question")
    const answer = e.target.getAttribute("data-answer");

    setChoices(prevState => ({
      ...prevState,
      ...{[question]: Number(answer)},
    }));
  };
  
  const testInvestorSchema = yup.object({
    email: yup.string().email('Coloca un correo electrónico válido').required('Coloca un correo electrónico'),
    nivel_educativo: yup.number().required('Indica tu nivel educativo'),
    q1: yup.number().required('Selecciona una respuesta para la pregunta #1'),
    q2: yup.number().required('Selecciona una respuesta para la pregunta #2'),
    q3: yup.number().required('Selecciona una respuesta para la pregunta #3'),
    q4: yup.number().required('Selecciona una respuesta para la pregunta #4'),
    q5: yup.number().required('Selecciona una respuesta para la pregunta #5'),
    q6: yup.number().required('Selecciona una respuesta para la pregunta #6'),
    q7: yup.number().required('Selecciona una respuesta para la pregunta #7'),
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

  const signUpSubmit = handleSubmit(async values => {
    console.log("data: ", values);
    const fecha_nacimiento_dia = values.fecha_nacimiento_dia.toString().padStart(2, "0");
    const fecha_nacimiento_mes = values.fecha_nacimiento_mes.toString().padStart(2, "0");
    const fecha_nacimiento_anio = values.fecha_nacimiento_anio.toString(); 

    const fecha_nacimiento = "".concat(fecha_nacimiento_anio, "-", fecha_nacimiento_mes, "-", fecha_nacimiento_dia);

    try {
      const new_user = signUp({...values, fecha_nacimiento});
      setFlash({
        msg: "Registro completado. Te enviamos la clave a tu buzón de correo electrónico; usála para iniciar sesión.",
        type: "success",
      })
      setTimeout(() => navigate("/sign_in"), 5000);
    } catch (err) {
      setFlash(err.message)
    }
  });

  return <>
      <PageTitle title='Registrarse' />

      <TopNavigationBarCustom menuProps={{
        showContactUs: true,
        ulClassName: 'mx-auto'
      }} showSignUp />

      <main>
        <section className="position-relative overflow-hidden">
        <Container className="position-relative">
            <Row>
              <Col>
                <Card className="bg-transparent mb-6">
                  <CardHeader className="bg-transparent border-bottom d-flex justify-content-between align-items-center px-0">
                    <h5>Listo para tomar mejores decisiones financieras<br/><span className="text-primary">Registrate para empezar!</span></h5>
                  </CardHeader>
                  <CardBody className="px-0 pb-0">
                    <CardBody className="p-0">
                      <Form onSubmit={signUpSubmit}>
                      <Row className="g-3 mt-3">
                      <span style={{ fontWeight: 'bold' }}>Correo electrónico:</span>
                      <TextFormInput 
                        name="email" 
                        control={control} 
                        placeholder="nombre@gmail.com"/>
                      </Row>
                      <Row className="g-3 mt-3">
                      <span style={{ fontWeight: 'bold' }}>Fecha de Nacimiento:</span>
                      <SelectFormInput name="fecha_nacimiento_dia" containerClass="col-md-4" control={control}>
                        <option value={0}>Elije el día</option>
                        {_.range(1, 32).map((e, i) => (
                          <option key={"fecha_nacimiento_dia_" + e} value={e}>{e}</option>
                        ))}
                      </SelectFormInput>
                      <SelectFormInput name="fecha_nacimiento_mes" containerClass="col-md-4" control={control}>
                        <option value={0}>Elije el mes</option>
                        {_.range(1, 13).map((e, i) => (
                          <option key={"fecha_nacimiento_mes_" + e} value={e}>{e}</option>
                        ))}
                      </SelectFormInput>
                      <SelectFormInput name="fecha_nacimiento_anio" containerClass="col-md-4" control={control}>
                        <option value={0}>Elije el año</option>
                        {_.range(1950, 2051).map((e, i) => (
                          <option key={"fecha_nacimiento_anio_" + e} value={e}>{e}</option>
                        ))}
                      </SelectFormInput>
                      </Row>    
                      <Row className="g-3 mt-3">
                      <span style={{ fontWeight: 'bold' }}>¿Cuál es tu nivel educativo?:</span>
                      <SelectFormInput name="nivel_educativo" containerClass="col-md-4" control={control}>
                        <option value={0}>Elije una opción</option>
                        <option value={1}>Educación Primaria</option>
                        <option value={2}>Educación Secundaria</option>
                        <option value={3}>Educación Superior</option>
                      </SelectFormInput>
                      </Row>
                      {testInvestorQuestions.map(({id, question, possible_answers}, qIndex) => (
                        <Row className="g-3 mb-1 mt-3">
                        <span style={{ fontWeight: 'bold' }}>{question}</span>
                        {possible_answers.map(({answer, description, value}, aIndex) => (
                          <div className="form-check">
                          <input 
                            type="radio" 
                            id={id + "-" + value.toString()} 
                            name={id + "-" + value.toString()}
                            data-question={id}
                            data-answer={value}
                            {...register(id)}
                            className="form-check-input" 
                            value={value} 
                            onChange={handleChange} 
                            checked={choices[id] === value}
                          />
                          <label htmlFor={id + "-" + value.toString()} className="form-check-label">
                            <div>{answer}</div>
                            <div>{description}</div>
                          </label>
                          </div>
                        ))}
                        </Row>
                      ))}

                      <Row className="g-3 mt-3">
                      <div>
                        <div className="align-items-center mt-0">
                          <div className="d-grid">
                            <button className="btn btn-primary mb-0" type="submit">Crear cuenta</button>
                          </div>
                        </div>
                      </div>
                      </Row>
                      </Form>
                    </CardBody>
                    {flash.msg && (
                    <CardBody className="px-0 pb-0">
                      <Row className="g-3 mt-3">
                        <Col>
                        <Alert key={flash.type} variant={flash.type}>
                        {flash.msg}
                        </Alert>
                        </Col>
                      </Row>
                    </CardBody>
                    )}
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </Container>
        </section>
      </main>

      <Footer6 />
    </>;
};
export default SignUpPage;