import { Container } from '@mui/material';
import React, { lazy } from 'react';
import { Outlet, createBrowserRouter } from "react-router-dom";
const ErrorPage = lazy(() => import('../containers/ErrorPage'))

export const router = createBrowserRouter([
  {
    element: <Container><Outlet /></Container>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Heron Crane</div>,
        // loader: function loader() { return import('../data/esports').then(module => module.default) },
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
  }
]);