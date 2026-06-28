import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='text-center bg-orange-300 text-black'>
      <nav>
        <ul className='flex justify-center items-center list-none m-0 gap-20.5 p-3.5'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar