import { Container } from '@mui/material';
import React, { lazy } from 'react';
import { Outlet, createBrowserRouter } from "react-router-dom";
import { NavBar } from '../components/NavBar';
const ErrorPage = lazy(() => import('../containers/ErrorPage'))
const HomePage = lazy(() => import('../containers/Home'))
const ContactPage = lazy(() => import('../containers/Contact'))
const AuthorsPage = lazy(() => import('../containers/Authors'))

export const router = createBrowserRouter([
  {
    element: <Container><NavBar /><Outlet /></Container>,
    errorElement: <ErrorPage />,
    path: '/',
    children: [
      {
        path: "",
        element: <HomePage />,
        index: true
      },
      {
        path: "authors",
        element: <AuthorsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
  }
]);