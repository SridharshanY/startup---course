import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-400 px-4 py-2">
        <div>
          <img className="w-18" src={logo} alt="" />
        </div>
        <ul className="flex gap-4 text-xl">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/register'>Register</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
        </ul>
        <div>
          <input className="border-2 border-gray-600 rounded-l-lg bg-gray-200 px-4 py-2" type="text" />
          <button className="border-2 border-gray-600 px-4 py-2 rounded-r-lg hover:bg-gray-300 hover:cursor-pointer">Search</button>
        </div>
    </nav>
  )
}

export default Navbar