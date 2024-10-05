import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/layouts/DefaultLayout';
import { appRoutes } from '@/routes/index';
import { useAuthContext } from '@/states/useAuthContext';
const AppRouter = props => {
  const {
    isAuthenticated
  } = useAuthContext();
  return <Routes>

      {(appRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={<DefaultLayout {...props}>{route.element}</DefaultLayout>} />)}

      {/* <Route path="/account" element={<AccountLayout />}>
        {(accountRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={isAuthenticated ? route.element : <Navigate to={{
        pathname: '/auth/sign-in',
        search: 'redirectTo=' + route.path
      }} />} />)}
      </Route> */}

    </Routes>;
};
export default AppRouter;