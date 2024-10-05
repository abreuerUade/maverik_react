import Preloader from '@/components/Preloader';
import { lazy, Suspense } from 'react';
const Footer8 = lazy(() => import('@/components/footer/Footer8'));
const TopNavigationBar = lazy(() => import('@/components/topbar/TopNavigationBar'));
const loading = () => <div></div>;
const ShopLayout = ({
  children
}) => {
  return <>
      <Suspense fallback={loading()}>
        <TopNavigationBar showSearchInput showShoppingCart menuProps={{
        showContactUs: true,
        ulClassName: 'ms-xl-5'
      }} />
      </Suspense>

      <main>
        <Suspense fallback={<Preloader />}>
          {children}
        </Suspense>
      </main>

      <Suspense fallback={loading()}>
        <Footer8 />
      </Suspense>
    </>;
};
export default ShopLayout;