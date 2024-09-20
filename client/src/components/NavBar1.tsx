import { Link } from "react-router-dom"
import Logo from '../assets/LogoWhite.svg'

const NavBar1 = () => {
  return (
    <header className="fixed w-full flex justify-between items-center px-5 px bg-black h-20
                        md:px-5">
        <Link to='/home'>
            <img src={Logo} alt="white logo" className="h-10"/>
        </Link>
        <nav className="">
            <button className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </button>
            <ul className="fixed left-0 right-0 min-h-screen space-y-4 px-5 py-6 bg-black transform translate-y-6 translate-x-full
                            md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-4 md:py-0 md:translate-y-0 md:translate-x-0">
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/pods-of-the-week'>PODs of the Week </Link>
                </li>
                <li>
                    <Link to='/todays-pod'>POD of the day</Link>
                </li>
                <li>
                    <Link to='/find-a-pod'>Find a POD</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar1
