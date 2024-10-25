import TopNavigationBarCustom from '@/components/topbar/TopNavigationBarCustom';
import Footer6 from '@/components/footer/Footer6';
import PageTitle from '@/components/PageTitle';
import { Card, Col, Container, Row } from "react-bootstrap";
const HomePage = () => {
  return <>
      <PageTitle title='Inicio' />

      <TopNavigationBarCustom menuProps={{
        showContactUs: true,
        ulClassName: 'mx-auto'
      }} showSignUp />

      <main>
        <section className="position-relative overflow-hidden pt-xl-9">
        <Container className="position-relative mt-3">
            <Row>
            <Col><h1 className="primary-text">Copiloto Financiero</h1></Col>
            </Row>
        </Container>
        </section>
      </main>

      <Footer6 />
    </>;
};
export default HomePage;