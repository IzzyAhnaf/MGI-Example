import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PublicationsPages from './Pages/PublicationPages.jsx'

const router = createBrowserRouter([
  {
    path: '/MGI-Example/',
    element: <App />,
    children: [
      {
        path: '/MGI-Example/Publications',
        element: <PublicationsPages/>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
