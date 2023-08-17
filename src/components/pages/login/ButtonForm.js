import React from 'react'
import { IoChevronForward } from "react-icons/io5";


const ButtonForm = () => {
  return (
    <button  className='button-width-icon'>
      <span >Accéder à mon espace</span>
      <IoChevronForward className='icon' />
    </button>
  )
}

export default ButtonForm