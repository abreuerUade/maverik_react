import { Card, CardBody, Col, Dropdown, DropdownToggle, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { getActiveClass } from '@/helpers/menu';
import { FaAngleDown } from 'react-icons/fa6';
import portfolioList1Img from '@/assets/images/portfolio/list/01.jpg';
import portfolioList2Img from '@/assets/images/portfolio/list/02.jpg';
const PortfolioMenuDropdown = ({
  menuItems,
  activeMenuItems
}) => {
  return <Dropdown className="nav-item dropdown">
      <DropdownToggle as={Link} to="" variant='link' className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, 'portfolio')}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Portfolio
        <FaAngleDown size={12} className='ms-1' />
      </DropdownToggle>
      <div className="dropdown-menu dropdown-menu-center dropdown-menu-size-xl p-3">
        <Row className="g-xl-3">
          <Col xl={8} className="d-none d-xl-block">
            <div className="d-flex gap-4">
              <Card className="bg-transparent">
                <img src={portfolioList1Img} className="card-img" alt="" />
                <CardBody className="px-0 text-start pb-0">
                  <h6>
                    <Link to="">Ceremony Worthy of Time</Link>
                  </h6>
                  <p className="mb-2 small">
                    We help our customers better manage their web
                    presence.
                  </p>
                  <Link to="/portfolio/case-study/v1" className="icon-link icon-link-hover stretched-link mb-0">
                    Learn more
                    <BsArrowRight />
                  </Link>
                </CardBody>
              </Card>
              <Card className="bg-transparent">
                <img src={portfolioList2Img} className="card-img" alt="" />
                <CardBody className="px-0 text-start pb-0">
                  <h6>
                    <Link to="">Brushstrokes and Beyond</Link>
                  </h6>
                  <p className="mb-2 small">
                    We help our customers better manage their web
                    presence.
                  </p>
                  <Link to="/portfolio/case-study/v2" className="icon-link icon-link-hover stretched-link mb-0">
                    Learn more
                    <BsArrowRight />
                  </Link>
                </CardBody>
              </Card>
              <div className="vr ms-2" />
            </div>
          </Col>
          <Col xl={4}>
            <ul className="list-unstyled">
              <li className="dropdown-header h6">Portfolio Pages</li>

              {menuItems.map(item => <li key={item.key}>
                  <Link to={item.url ?? ''} target={item.target} className={`dropdown-item${getActiveClass(activeMenuItems, item.key)}`}>
                    {item.label}
                    {item.badge && <span className="badge text-bg-success ms-2">
                        {item.badge}
                      </span>}
                  </Link>
                </li>)}

            </ul>
          </Col>
        </Row>
      </div>
    </Dropdown>;
};
export default PortfolioMenuDropdown;