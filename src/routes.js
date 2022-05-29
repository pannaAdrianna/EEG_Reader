import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//

import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Band from './pages/Band/BandProcess';
import EEGTest from './pages/EEGTest';
import Visualize from './pages/Visualize';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        // { path: 'blog', element: <Blog /> },
        { path: 'band', element: <Band /> },
        { path: 'eegtest', element: <EEGTest /> },
        {
          path: 'test',
          children: [
            { path: 'visualize', element: <Visualize /> },
          ],
        }],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to='/dashboard/app' /> },
        // { path: '/', element: <Navigate to='/login' /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to='/404' /> },
      ],
    },
    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
}
