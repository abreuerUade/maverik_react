import Preloader from '@/components/Preloader';
import useToggle from '@/hooks/useToggle';
import { lazy, Suspense } from 'react';
import { Col, Container, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
const VerticalNavigationBar = lazy(() => import('./components/VerticalNavigationBar'));
const TopNavigationBar = lazy(() => import('@/components/topbar/TopNavigationBar'));
const Footer1 = lazy(() => import('@/components/footer/Footer1'));
const loading = () => <div></div>;
const AccountLayout = () => {
  const {
    isTrue: isOffcanvasOpen,
    toggle: toggleOffcanvas
  } = useToggle();
  return <>
      <Suspense fallback={loading()}>
        <TopNavigationBar menuProps={{
        showContactUs: true,
        showDocs: true,
        ulClassName: 'mx-auto'
      }} showSignUp showBuyNow />
      </Suspense>

      <main>
        <section className="pt-sm-7">
          <Container className="pt-3 pt-xl-5">
            <Row>
              <Col lg={4} xl={3}>
                <div className='d-none d-lg-block'>

                  <Suspense fallback={loading()}>
                    <VerticalNavigationBar />
                  </Suspense>

                </div>

                <Offcanvas show={isOffcanvasOpen} onHide={toggleOffcanvas} placement='start' className="offcanvas-lg h-100" tabIndex={-1} id="offcanvasSidebar">
                  <OffcanvasHeader className="bg-light" closeButton>
                    <OffcanvasTitle as="h5" className="offcanvas-title" id="offcanvasNavbarLabel">My profile</OffcanvasTitle>
                  </OffcanvasHeader>
                  <OffcanvasBody className="p-0">
                    <Suspense fallback={loading()}>
                      <VerticalNavigationBar />
                    </Suspense>
                  </OffcanvasBody>
                </Offcanvas>

              </Col>
              <Col lg={8} xl={9} className="ps-lg-4 ps-xl-6">

                <Suspense fallback={<Preloader />}>
                  <Outlet context={{
                  toggleOffcanvas
                }} />
                </Suspense>

              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Suspense fallback={loading()}>
        <Footer1 />
      </Suspense>
    </>;
};
export default AccountLayout;