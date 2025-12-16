import { Link } from 'react-router-dom'
import { UserPlus, House } from 'lucide-react'

const Navbar = () => {
    return (
        <div>
            <ul className='navbar-links'>
                <li className='nav-item'>
                    <Link to="/"><House/>Home      </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/adduser"><UserPlus/>Add User</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar