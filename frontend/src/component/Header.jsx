import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm'>
            <nav className='container navbar px-0'>
                <div className="flex-1 items-center">
                    <Link to='/' className='flex items-center gap-3'>
                        <Logo className='h-6 w-auto md:h-10' />
                        <span className='font-title text-base-content text-lg md:text-2xl'>TAGLINE</span>
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/login' className='btn btn-ghost drawer-button font-normal gap-2'><FaSignInAlt className='w-4 h-4'/>Login</Link>
                        </li>
                        <li>
                            <Link to='/register' className='btn btn-ghost drawer-button font-normal gap-2'><FaUser className='w-4 h-4'/>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header