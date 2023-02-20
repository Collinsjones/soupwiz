import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import  '../styles/mobilenav.css'

const Mobilenavigation = ({visibility,setnavVisible }) => {
  return (
    <div className='mobilenavigation'
    style={{
        display: visibility ? "block" : "none",
      }}>
      
              < ul>
                 <Menu className='menu'/>

              <li className='mli'>
                <Link style={{textDecoration: 'none'}} to="/"
                 onClick={() => setnavVisible(false)}>
                  Home
                </Link>
              </li>
              <li className='mli'>
                <Link style={{textDecoration: 'none'}} to="/Soup&Sauces"
                  onClick={() => setnavVisible(false)}>
                  Soups & Sauces
                </Link>
              </li>
              <li className='mli'>
                <Link style={{textDecoration: 'none'}} to="/swallow"
                  onClick={() => setnavVisible(false)}>
                  Swallows
                </Link>
              </li>
              <li className='mli'> 
                <Link style={{textDecoration: 'none'}} to="/contact"
                  onClick={() => setnavVisible(false)}>
                    Contact Us
                </Link>
              </li>
              <span >
                  <li className='mli'>
                    <Link style={{textDecoration: 'none'}} to="/register"
                      onClick={() => setnavVisible(false)}>
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link style={{textDecoration: 'none'}} to="/signin"
                      onClick={() => setnavVisible(false)}>
                      Log In
                    </Link>
                  </li>
            </span>
            </ul>
          
        
    </div>
  )
}

export default Mobilenavigation