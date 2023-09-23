import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import CreateUser from '../pages/CreateUser/CreateUser';
import User from '../pages/User/User';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage />,
      children: [
        {
        path: "/",
        element: <CreateUser />
        },
        {
        path: "/user/:userId",
        element: <User />,
        errorElement: <ErrorPage />
        }
      ]
    }
  ])