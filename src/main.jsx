import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./styles/index.css";
import App from './App.jsx';

import { Login, SignUp, ForgotPassword } from './pages/index.js';
import Time from './pages/Home.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='forget' element={<ForgotPassword />} />
      <Route path='home' element={<Time />} /> 
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
