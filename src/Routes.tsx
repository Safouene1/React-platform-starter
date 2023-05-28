import { createBrowserRouter, Navigate } from 'react-router-dom';

import { DashboardLayout } from './layouts/DashboardLayout/DashboardLayout';
import { Home } from './pages/Dashboard/Home/home';
import { Login } from './pages/Login/Login';
import { AuthenticationLayout } from './layouts/AuthenticationLayout/AuthenticationLayout';
import NotFound from './pages/Error/NotFound/NotFound';
import { RequireAuth } from './components/util/RequireAuth';
import { Users } from './pages/Dashboard/Users/Users';
import { Stocks } from './pages/Dashboard/Statistics/Stocks/Stocks';

const authenticated = true;
export const router = createBrowserRouter([
  {
    path: '/',
    element: authenticated ? (
      <Navigate to="/platform/dashboard" replace />
    ) : (
      <Navigate to="/auth/login" />
    ),
  },
  {
    path: '/auth',
    element: <AuthenticationLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/platform',
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    children: [
      {
        children: [
          {
            path: 'dashboard',
            element: <Home />,
          },
          {
            path: 'users',
            element: <Users />,
          },
          {
            path: 'statistics',
            children: [
              {
                path: 'stocks',
                element: <Stocks />,
              },
            ],
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);
