import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Footer6 from '@/components/footer/Footer6';
import PageTitle from '@/components/PageTitle';
import { Card, Col, Container, Row } from "react-bootstrap";
const HomePage = () => {
  return <>
      <PageTitle title='Inicio' />

      <TopNavigationBar menuProps={{
      showContactUs: true,
      showDocs: true,
      ulClassName: 'mx-auto'
    }} showSignUp showBuyNow data-bs-theme='dark' />
      <main>
        <section className="bg-dark position-relative overflow-hidden pt-xl-9" data-bs-theme="dark">
        <Container className="position-relative mt-3">
            <Row>
            <Col>Home!</Col>
            </Row>
        </Container>
        </section>
      </main>

      <Footer6 />
    </>;
};
export default HomePage;