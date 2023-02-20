import React from 'react'
import logo from '../assets/souplogo.png'
import { Link } from 'react-router-dom'
import { VscMenu, VscClose } from "react-icons/vsc";
import { GiCookingPot} from "react-icons/gi"
import Shoppingpot from "../components/Shoppingpot";
import { useContext } from 'react'
import DataContext from '../context/DataContext';
import '../styles/header.css'
import MobileNavigation from '../components/MobileNavigation'



const Header = () => {
  const { bagVisibilty, setBagVisible, navVisibilty, setnavVisible, onProductRemove, onQuantityChange, productsInBag} = useContext(DataContext)
  const hambugerIcon =  <VscMenu className="vsc" size={25}
        onClick={() => setnavVisible(true)}/>
  
  const closeIcon = <VscClose className="vsc" size={25}
  onClick={() => setnavVisible(false)}/>

  return (
    <div className='header'>

        
        <Shoppingpot
          visibility={bagVisibilty}
          products={productsInBag}
          onClose={() => setBagVisible(false)}
          onQuantityChange={onQuantityChange}
          onProductRemove={onProductRemove}/>
        <button className='mobilenav'>
              {navVisibilty ? null :hambugerIcon}
         </button>
         <MobileNavigation
          visibility={navVisibilty}/>
        
        <img className='logo' src={logo} alt="logo" />
        <h1>
          SOUP WIZ
        </h1>
       
        <ul>
          <li><Link style={{textDecoration: 'none'}} to="/register">Sign Up</Link></li>
          <li><Link style={{textDecoration: 'none'}} to="/signin">Log In</Link> </li>
        </ul>
        <button  className='pot-btn' onClick={() => setBagVisible(true)}>
          <GiCookingPot size={40}/>
              {productsInBag.length > 0 && (
                <span className="product-count">{productsInBag.length}</span>
              )}
          </button>

          
         
     
    </div>
    
  )
}

export default Header