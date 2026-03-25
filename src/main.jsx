import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/blog",
        element: <Blog/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
