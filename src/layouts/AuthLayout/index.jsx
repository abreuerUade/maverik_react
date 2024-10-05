import { Col, Row } from 'react-bootstrap';
import { lazy, Suspense } from 'react';
import Preloader from '@/components/Preloader';
const QuoteSwiper = lazy(() => import('./components/QuoteSwiper'));
const AuthLayout = ({
  children
}) => {
  return <Row className="g-0">

      <Col lg={7} className="vh-100 d-none d-lg-block">

        <Suspense fallback={<div></div>}>
          <QuoteSwiper />
        </Suspense>

      </Col>

      <Suspense fallback={<Preloader />}>
        {children}
      </Suspense>

    </Row>;
};
export default AuthLayout;