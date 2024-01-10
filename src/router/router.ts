import HomePage from 'pages/home-page/HomePage';
import LoginPage from 'pages/login-page/LoginPage';
import RegisterPage from 'pages/register-page/RegisterPage';

type Route = {
  path: string;
  element: React.ComponentType<any>;
};

export const publicRoutes: Route[] = [
  {
    path: '/login',
    element: LoginPage,
  },
  {
    path: '/register',
    element: RegisterPage,
  },
];

export const privateRoutes: Route[] = [
  {
    path: '/',
    element: HomePage,
  },
];
