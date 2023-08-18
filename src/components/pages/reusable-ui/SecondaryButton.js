import React from 'react'

const SecondaryButton = ({type, handleClick}) => {
  return (
    <button type={type} onClick={handleClick}>Déconnexion</button>
  )
}

export default SecondaryButton