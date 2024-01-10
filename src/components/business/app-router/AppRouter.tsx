import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/ui/layout/Layout';

import { privateRoutes, publicRoutes } from 'router/router';

interface AppRouterProps {
  isAuth: boolean;
}

const AppRouter = ({ isAuth }: AppRouterProps) => {
  return (
    <Layout>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(privateRoute => {
            return (
              <Route
                key={privateRoute.path}
                path={privateRoute.path}
                element={<privateRoute.element />}
              />
            );
          })}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(publicRoute => {
            return (
              <Route
                key={publicRoute.path}
                path={publicRoute.path}
                element={<publicRoute.element />}
              />
            );
          })}

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Layout>
  );
};

export default AppRouter;
