import { Link } from "react-router-dom"

const NavBar = () => {
  return (
        <ul>
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
  )
}

export default NavBar
