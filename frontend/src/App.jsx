import AppLayout from './AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App