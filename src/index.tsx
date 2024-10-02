import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/layout/App.tsx'
import './app/layout/style.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {  RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
