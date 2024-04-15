import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Hoom from './components/Hoom';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider';
import About from './components/About';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PersonalData from './PrivateRoute/PersonalData';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Hoom></Hoom>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/about",
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:"/personalData",
        element: <PrivateRoute><PersonalData></PersonalData></PrivateRoute>
      },
    ]

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
