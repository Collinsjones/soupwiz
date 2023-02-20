import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation'>
       <ul>
          <li className='links'>
            <Link style={{textDecoration: 'none'}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{textDecoration: 'none'}} to="/Soup&Sauces">Soups & Sauces</Link>
          </li>
          <li><Link style={{textDecoration: 'none'}} to="/swallow">Swallows</Link></li>
          <li> <Link style={{textDecoration: 'none'}} to="/contact">Contact Us</Link></li>
        </ul>
    </div>
  )
}

export default Navigation
