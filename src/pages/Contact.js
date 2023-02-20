import React from 'react'
import Navigation from '../components/Navigation'
import { BsWhatsapp, BsTelephone } from 'react-icons/bs';
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className='contacts'>
        <Navigation/>
        <section className='contact'>
            <address>
                Plot 8, Elegushi Beach Road, Ikate Roundabout, Lekki, Lagos
            </address>
            <p>
              email:info@soupwiz.com
            </p>
            <p>
              <BsWhatsapp/> 08060001001
            </p>
            <p>
              <BsTelephone/> 07040827361
            </p>
        </section>
    </div>
  )
}

export default Contact