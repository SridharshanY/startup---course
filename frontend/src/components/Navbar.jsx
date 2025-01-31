import logo from '../assets/img/logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-400 px-4 py-2">
        <div>
          <img className="w-18" src={logo} alt="" />
        </div>
        <ul className="flex gap-4 text-xl">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Register</a></li>
          <li><a href="">Login</a></li>
        </ul>
        <div>
          <input className="border-2 border-gray-600 rounded-l-lg bg-gray-200 px-4 py-2" type="text" />
          <button className="border-2 border-gray-600 px-4 py-2 rounded-r-lg hover:bg-gray-300 hover:cursor-pointer">Search</button>
        </div>
    </nav>
  )
}

export default Navbar