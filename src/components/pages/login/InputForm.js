import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
const InputForm = ({username}) => {
   
  return (
    <>
        <input
          type="text"
          name="" id=""
          placeholder='Entrez votre prénom'
          onChange={username}
          required />
    </>
  )
}

export default InputForm