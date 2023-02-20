import React from 'react'
import { Link } from 'react-router-dom'
import mastercard from "../assets/mastercard-logo.png";
import visa from "../assets/visa-logo-png-2018.png";
import interswitch from "../assets/interswitch.png";
import paystack from "../assets/Paystack_Logo.png";
import "../styles/footer.css"
import { BsFacebook, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <span className='navlink'>
         <a href="#">FAQ</a>
         ||
         <a href="#"> About Us</a>
    
      </span>
      <figure className='footfig'>
        <span className='fb'>
          <BsFacebook size={40}/>
        </span>
        <span className='ig'><BsInstagram size={40}/> </span>
        <img src={mastercard} className="mastercard" alt="mastercard" />
        <img src={visa} className="visa" alt="visa" />
        <img src={interswitch} className="interswitch" alt="interswitch" />
        <img src={paystack} className="paystack" alt="pastack" />
      </figure>
      <p className='terms'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis inventore aut numquam vitae laboriosam dolorum necessitatibus commodi eum esse vero, repudiandae magnam ipsa ea soluta. Consectetur aliquam suscipit nesciunt maiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis inventore aut numquam vitae laboriosam dolorum necessitatibus commodi eum esse vero, repudiandae magnam ipsa ea soluta. Consectetur aliquam suscipit nesciunt maiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis inventore aut numquam vitae laboriosam dolorum necessitatibus commodi eum esse vero, repudiandae magnam ipsa ea soluta. Consectetur aliquam suscipit nesciunt maiores.
      </p>
        
    </div>
  )
}

export default Footer