import React from 'react'
import { IoChevronForward } from "react-icons/io5";


const ButtonForm = ({addClick}) => {
  return (
    <button  className='button-width-icon'  onSubmit={addClick}>
      <span >Accéder à mon espace</span>
      <IoChevronForward className='icon' />
    </button>
  )
}

export default ButtonForm