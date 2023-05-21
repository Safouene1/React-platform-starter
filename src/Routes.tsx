import { Routes, Route, createBrowserRouter } from 'react-router-dom';

import { DashboardLayout } from './layouts/DashboardLayout/DashboardLayout';
import { Home } from './pages/Dashboard/Home/home';
import { Login } from './pages/Login/Login';
import { AuthenticationLayout } from './layouts/AuthenticationLayout/AuthenticationLayout';
import NotFound from './pages/Error/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'auth',
        element: <AuthenticationLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
      {
        path: 'platform',
        element: <DashboardLayout />,
        children: [
          {
            path: 'dashboard',
            element: <Home />,
          },
          {
            path: '*',
            element :<NotFound/>
          }
        ],
      },

    ],
  },
  {
    path: '*',
    element :<NotFound/>
  }
]);
