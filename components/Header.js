import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import Search from './Search';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import Headerstyles from '@/styles/Header.module.css';

export default function Header() {
    const { user, logout } = useContext(AuthContext)

    return (
        <header className={Headerstyles.header}>
            <div className={Headerstyles.logo}>
                <Link href='/'>
                    <a>Dj Events</a>
                </Link>
            </div>
            <Search />
            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            <a>Events</a>
                        </Link>
                    </li>
                    
                    {user ? (
                        // If Logged In
                        <>
                            <li>
                                <Link href='/events/add'>
                                    <a>Add Events</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/account/dashboard'>
                                    <a>Dashboard</a>
                                </Link>
                            </li>
                            <li>
                                <button 
                                 onClick={() => logout()}
                                 className="btn-secondary btn-icon">
                                    <FaSignOutAlt />Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        // If Logged Out
                        <>
                            <li>
                                <Link href='/account/login'>
                                    <a className='btn-secondary btn-icon'>
                                        <FaSignInAlt />Login
                                    </a>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}
