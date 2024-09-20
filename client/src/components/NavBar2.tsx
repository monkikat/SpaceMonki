import { Link } from 'react-router-dom';
import Logo from '../assets/LogoLargeWhite.svg';

const NavBar2 = () => {

  return (
    <header 
    className="fixed flex justify-between items-center h-fit w-screen pt-6 pb-4 px-10 bg-black">
        <Link to="/home">
            <img src={Logo} alt="White SPACE MONKI Logo"
            className='h-10 md:h-14 transform transition-all'/>
        </Link>           

        <ul 
        className="hidden md:flex items-center">
            <li 
            className='px-5 flex-none'>
                <Link to='/home'>Home</Link>
            </li>
            <li
            className='px-5 flex-none'>
                <Link to='/pods-of-the-week'>PODs of the Week </Link>
            </li>
            <li
            className='px-5 flex-none'>
                <Link to='/find-a-pod'>Find a POD</Link>
            </li>
        </ul>

        <button 
        className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
        </button>
    </header>
  )
}

export default NavBar2
