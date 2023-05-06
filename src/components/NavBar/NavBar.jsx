import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <nav className="menu">
            <Link className='link' to='/'>Inicio</Link>
            <Link className='link' to='/productos/electrodomestico'>Electrodomésticos</Link>
            <Link className='link' to='/productos/ropa'>Ropa</Link>
            <Link className='link' to='/cart'><CartWidget/></Link>
        </nav>
    )
}
