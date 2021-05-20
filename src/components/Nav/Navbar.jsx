import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          AlgoRyhthm <i class="fab fa-squarespace"></i>
        </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
