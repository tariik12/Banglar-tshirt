import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import OrderReview from './components/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path:'/',
     element: <Main />,
     children:[

      {
        path:'/',
        element: <Home />,
        loader:()=>('tshirts.json')
      },
      {
        path: '/review',
        element: <OrderReview />
      }
     ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
