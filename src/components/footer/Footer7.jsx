import { quickLinks, socialMediaLinks } from '@/assets/data/footer-items';
import LogoBox from '../LogoBox';
import { Link } from 'react-router-dom';
import { currentYear, developedBy, developedByLink } from '@/states/constants';
import { Col, Container, Row } from 'react-bootstrap';
const Footer7 = () => {
  return <footer>
      <Container>
        <div className="bg-dark rounded position-relative p-4 p-sm-6 mb-3 mb-sm-5" data-bs-theme="dark">
          <Row className="mx-auto">
            <Col lg={8} className="mx-auto text-center px-0">

              <LogoBox imageClassName='h-60px' />

              <p className="mt-4">A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.</p>

              <ul className="nav justify-content-center mt-4 mt-md-0">
                {quickLinks.map((item, idx) => <li key={(item.link ?? '') + idx} className="nav-item">
                    <Link className="nav-link px-3 pb-0" to={item.link ?? ''}>
                      {item.name}
                    </Link>
                  </li>)}
              </ul>

              <ul className="list-inline mb-0 mt-4">
                {socialMediaLinks.map((item, idx) => {
                const Icon = item.icon;
                return <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                      <Link className={`btn btn-xs btn-icon ${item.iconClassName}`} to="">
                        <Icon />
                      </Link>
                    </li>;
              })}
              </ul>

              <div className="text-body mt-4"> Copyrights ©{currentYear} Mizzle. Build by <a href={developedByLink} target='_blank' className="text-body text-primary-hover">{developedBy}</a>. </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>;
};
export default Footer7;