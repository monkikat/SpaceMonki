import { Link } from 'react-router-dom';
import Logo from '../assets/LogoLargeWhite.svg';
import { useState } from 'react';

const NavBar2 = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
    className="fixed flex justify-between items-center h-fit w-screen pt-6 pb-4 px-10 bg-black z-50">
        <Link to="/">
            <img src={Logo} alt="White SPACE MONKI Logo"
            className='h-10 md:h-14
            transition-transform duration-300 ease-in-out hover:scale-105'/>
        </Link>         

        <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
        </button>  

        <div className={`flex flex-col absolute right-5 top-20 pt-4 text-xl w-1/2 h-screen bg-black 
            md:flex md:flex-row md:right-10 md:top-0 md:pt-0 md:text-lg md:w-fit md:h-fit md:opacity-100    
            transform transition-transform ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{transition: 'transform 0.3s ease, opacity 0.3s ease'}}>
            <li 
            className='px-5 py-5 text-right flex-none list-none transition-transform duration-100 ease-in-out hover:scale-105'>
                <Link to='/'>Home</Link>
            </li>
            <li
            className='px-5 py-5 text-right flex-none list-none transition-transform duration-100 ease-in-out hover:scale-105'>
                <Link to='/pods-of-the-week'>PODs of the Week </Link>
            </li>
            <li
            className='px-5 py-5 text-right flex-none list-none transition-transform duration-100 ease-in-out hover:scale-105'>
                <Link to='/find-a-pod'>Find a POD</Link>
            </li>
        </div>
    </header>
  )
}

export default NavBar2
