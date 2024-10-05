import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from "react-toastify";
import { AuthProvider } from './states/useAuthContext';
import { LayoutProvider } from './states/useLayoutContext';
import { ShopProvider } from './states/useShoppingContext';
import { NotificationProvider } from './states/useNotificationContext';
import BackToTop from './components/BackToTop';
import configureFakeBackend from './helpers/fake-backend';
import AppRouter from './routes/router';
import 'swiper/swiper-bundle.css';
import "react-toastify/dist/ReactToastify.css";
import '@/assets/scss/style.scss';
configureFakeBackend();
const App = () => {
  return <HelmetProvider>
      <NotificationProvider>
        <LayoutProvider>
          <AuthProvider>
            <ShopProvider>

              <AppRouter />

              <BackToTop />

              <ToastContainer />

            </ShopProvider>
          </AuthProvider>
        </LayoutProvider>
      </NotificationProvider>
    </HelmetProvider>;
};
export default App;