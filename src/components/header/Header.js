import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <header>
            <ul className='header__menu'>
                <li><Link to='/cars'>Cars</Link></li>
                <li><Link to='/managers'>Managers</Link></li>
                <li><Link to='/customers'>Customers</Link></li>
                <li><Link to='/deals'>Deals</Link></li>
            </ul>            
        </header>
    )
}

export default Header
