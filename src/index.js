import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import {RouterProvider, createBrowserRouter} from "react-router-dom" 

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/dashboard',
    element: <Dashboard/>
  },
 {
  path:'*',
  element:<ErrorPage/>
 }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

