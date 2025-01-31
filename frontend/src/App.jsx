import AppLayout from './AppLayout'
import Home from './Home'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'

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
    <div>
      <Navbar />
    </div>
  )
}

export default App