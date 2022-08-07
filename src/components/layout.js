import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/NR-Logo.png';
import CtaButton from './cta-button';

import { 
        
        container, 
        navElements,
        navLinks,
        navLinkItem,
        navLinkText, 
    } from './layout.module.css';

const Layout = ({children}) => {

    return (
        <div className={container}>
        <nav className={navElements}>
                <Link to='/'>
                    <img 
                        src={Logo}
                        alt='Next Round Logo'
                    />
                </Link>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to='/' className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/solutions' className={navLinkText}>
                            Solutions
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/ideas' className={navLinkText}>
                            Ideas
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/about' className={navLinkText}>
                            About
                        </Link>
                    </li>
                </ul>
                <CtaButton text="Let's Talk!" />               
            </nav>
            <main>
                {children}
                
            </main>
            <footer>
                <nav className={navElements}>
                    <Link to='/'>
                        <img 
                            src={Logo}
                            alt='Next Round Logo'
                        />
                    </Link>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to='/' className={navLinkText}>
                                Home
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to='/solutions' className={navLinkText}>
                                Solutions
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to='/ideas' className={navLinkText}>
                                Ideas
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to='/about' className={navLinkText}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <p>
                    All rights reserved (c). Next Round Studio
                </p>
            </footer>
        </div>
        
    )
}

export default Layout;

