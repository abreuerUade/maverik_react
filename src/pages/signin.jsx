import React, { useState } from "react";
import TopNavigationBarCustom from '@/components/topbar/TopNavigationBarCustom';
import Footer6 from '@/components/footer/Footer6';
import PageTitle from '@/components/PageTitle';

import TextFormInput from "@/components/form/TextFormInput";
import { Card, CardBody, CardHeader, Col, Form, Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import PasswordFormInput from '@/components/form/PasswordFormInput';

import useSignIn from '@/pages/hooks/useSignIn';

const SignInPage = () => {  
  const {
    control,
    loading,
    login
  } = useSignIn();

  return <>
      <PageTitle title='Iniciar Sesion' />

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
                    <h5>Bienvenido nuevamente.<br/><span className="text-primary">Inicia sesión para continuar.</span></h5>
                  </CardHeader>
                  <CardBody className="px-0 pb-0">
                    <CardBody className="p-0">
                      <Form onSubmit={login}>
                      <Row className="g-3 mt-3">
                      <span style={{ fontWeight: 'bold' }}>Correo electrónico:</span>
                      <TextFormInput control={control} name='email' placeholder='nombre@gmail.com' type='email' containerClass='mb-4'/>
                      <span style={{ fontWeight: 'bold' }}>Contraseña:</span>
                      <PasswordFormInput control={control} name='clave' containerClass='mb-4 position-relative' className='pe-6' placeholder='Coloca tu contraseña'/>
                      </Row>
                      <Row className="g-3 mt-3">
                      <div>
                        <div className="align-items-center mt-0">
                          <div className="d-grid">
                            <button className="btn btn-primary mb-0" type="submit" disabled={loading}>Continuar</button>
                          </div>
                        </div>
                      </div>
                      </Row>
                      </Form>
                    </CardBody>
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
export default SignInPage;