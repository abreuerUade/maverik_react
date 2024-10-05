import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const NotFound = lazy(() => import('@/pages/other-pages/NotFound'));
const HomePage = lazy(() => import('@/pages/home'));
const SignupPage = lazy(() => import('@/pages/signup'));
const ChatComponent = lazy(() => import('@/pages/chat'));
const WizardPage = lazy(() => import('@/pages/wizard'))

// Demo Pages
// const ClassicDefault = lazy(() => import('@/pages/demos/ClassicDefault'));
// const ProductLanding = lazy(() => import('@/pages/demos/ProductLanding'));
// const MobileApp = lazy(() => import('@/pages/demos/MobileApp'));
// const FinanceConsulting = lazy(() => import('@/pages/demos/FinanceConsulting'));

// About Pages
// const AboutV1 = lazy(() => import('@/pages/about/V1'));
// const AboutV2 = lazy(() => import('@/pages/about/V2'));
// const AboutV3 = lazy(() => import('@/pages/about/V3'));

// const demoRoutes = [{
//   path: '/demos/classic',
//   name: 'demo-classic-default',
//   element: <ClassicDefault />
// }, {
//   path: '/demos/product-landing',
//   name: 'demo-product-landing',
//   element: <ProductLanding />
// }, {
//   path: '/demos/mobile-app',
//   name: 'demo-mobile-app',
//   element: <MobileApp />
// }, {
//   path: '/demos/finance-consulting',
//   name: 'demo-finance-consulting',
//   element: <FinanceConsulting />
// }];

// const aboutRoutes = [{
//   name: 'about-v1',
//   path: '/about/v1',
//   element: <AboutV1 />
// }, {
//   name: 'about-v2',
//   path: '/about/v2',
//   element: <AboutV2 />
// }, {
//   name: 'about-v3',
//   path: '/about/v3',
//   element: <AboutV3 />
// }];

const pagesRoutes = [{
  path: '/home',
  name: 'home',
  element: <HomePage />
},{
  path: '/signup',
  name: 'signup',
  element: <SignupPage />
},{
  path: '/chat',
  name: 'chat',
  element: <ChatComponent />
},{
  path: '/wizard',
  name: 'wizard',
  element: <WizardPage step="session_purpose_selector"/>
},{
  path: '/wizard/goals',
  name: 'wizard_goals',
  element: <WizardPage step="goal_selector"/>
},{
  path: '/wizard/goals/:goal_id',
  name: 'wizard_goals_details',
  element: <WizardPage step="goal_details_form"/>
}]

const initialRoutes = [{
  path: '/',
  name: 'root',
  element: <Navigate to='/home' />
}, {
  path: '*',
  name: 'all-routes',
  element: <NotFound />
}
];
export const appRoutes = [...initialRoutes, ...pagesRoutes];