import Preloader from '@/components/Preloader';
import { Suspense } from 'react';
const DefaultLayout = ({
  children
}) => {
  return <Suspense fallback={<Preloader />}>{children}</Suspense>;
};
export default DefaultLayout;