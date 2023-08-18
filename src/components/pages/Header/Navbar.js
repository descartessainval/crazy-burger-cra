import React from 'react'
import Logo from '../reusable-ui/Logo'
import { useNavigate } from 'react-router-dom';

const Navbar = ({username}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    localStorage.clear();
}
  return (
    <div className='Navabar' style={{background:"red"}}>
      <Logo />
      <div>
        <div className='right-side' style={{ background:"green"}}>
          <h2>Bonjour {username}</h2>
          <button type="submit" onClick={handleClick}>Déconnexion</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar