import { communityLinks, quickLinks, socialMediaLinks } from '@/assets/data/footer-items';
import LogoBox from '@/components/LogoBox';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const LinksAround = () => {
  return <Row className="g-4 justify-content-between">
    <Col lg={5}>

      <LogoBox />

      <ul className="list-inline mb-0 mt-4">

        {socialMediaLinks.map((item, idx) => {
          const Icon = item.icon;
          return <li key={item.iconClassName + idx} className="list-inline-item pe-1">
              <Link className="btn btn-xs btn-icon btn-light" to="">
                <Icon />
              </Link>
            </li>;
        })}

      </ul>
    </Col>
    <Col lg={6} xxl={4}>
      <Row className="g-4">
        <Col xs={6}>
          <ul className="nav flex-column">

          </ul>
        </Col>
        <Col xs={6}>
          <ul className="nav flex-column">


          </ul>
        </Col>
      </Row>
    </Col>
  </Row>;
};
export default LinksAround;