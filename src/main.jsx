import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './assets/scss/style.scss'
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Card from './pages/Card.jsx';
import Dex from './pages/Dex.jsx';
import News from './pages/News.jsx';
import Error from './pages/Error.jsx';
import Layout from './pages/Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'card',
        element: <Card />
      },
      {
        path: 'dex',
        element: <Dex />
      },
      {
        path: 'news',
        element: <News />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router}></RouterProvider>
    </NextUIProvider>
  </React.StrictMode>
)
