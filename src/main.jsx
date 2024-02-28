import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Blog from './Component/Blog/Blog.jsx';
import Statistics from './Component/Statistics/Statistics.jsx';
import AppliedJob from './Component/AppliedJob/AppliedJob.jsx';
import UserDetails from './Component/UserDetails/UserDetails.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Loading from './Component/Loading/Loading.jsx';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/userDatails/:id',
        element: <UserDetails></UserDetails>,
        loader:()=>fetch('/featured.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/appliedJob',
        element: <AppliedJob></AppliedJob>,
        loader:()=>fetch('/featured.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/loading',
        element: <Loading></Loading>
      }

    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
