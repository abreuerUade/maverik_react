import { Link } from 'react-router-dom';
import LinksAround from './components/LinksAround';
import CreditWithTerms from './components/CreditWithTerms';
import { BsCursor } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
const Footer6 = () => {
  return <footer className="bg-dark pt-6" data-bs-theme="dark">
      <Container className="position-relative mt-sm-5">

        <LinksAround />

        <hr className="mt-4 mb-0" />

        <CreditWithTerms />

      </Container>
    </footer>;
};
export default Footer6;