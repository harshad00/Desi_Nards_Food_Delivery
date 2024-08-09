
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import Contact from './pages/Contact.jsx'
import UserSingUp from './pages/UserSingUp.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
       },
       {
        path:"/login",
        element: <UserLogin/>
       },
       {
        path:"/singup",
        element: <UserSingUp/>
       },
       {
        path:"/contact",
        element: <Contact />
       }
      
      ]
    }])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
