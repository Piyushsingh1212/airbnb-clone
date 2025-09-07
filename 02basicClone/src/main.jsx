import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Service from './Components/Services/Service.jsx'
import Login from './Components/Login/Login.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Card from './Components/Card/Card.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
       <Route path="service" element={<Service />} />
        <Route path="card" element={<Card />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
