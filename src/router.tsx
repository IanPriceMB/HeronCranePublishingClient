import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { AppBar } from './components';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={(
    <>
      <CssBaseline enableColorScheme />
      <AppBar />
    </>
  )}>
    <Route path='authors' element={<div />} />
  </Route>)
);
