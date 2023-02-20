import React from 'react'
import { VscMenu, VscClose } from "react-icons/vsc";
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Menu = () => {
    const {setnavVisible, navVisibilty, } = useContext(DataContext)

    const hambugerIcon =  <VscMenu className="vsc" size={25}
    onClick={() => setnavVisible(true)}/>
    const closeIcon = <VscClose className="vsc" size={25}
    onClick={() => setnavVisible(false)}/>
  return (
    <>
      <button className='mobilenav'>
              {navVisibilty ? closeIcon :hambugerIcon}
     </button>
      
    </>
  )
}

export default Menu