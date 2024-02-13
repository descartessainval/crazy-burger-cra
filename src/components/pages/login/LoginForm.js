import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
// import { RiLockPasswordLine } from "react-icons/ri";

import styled from 'styled-components'// ou import styled from 'styled-components/macro' -> permet d'afficher les noms de class attribuer à nos balises
// import { theme } from '../../../themes';
import Welcome from './Welcome';
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { theme } from '../../../themes';


const LoginForm = () => {
  // State
  const [username, setUsername] = useState("Descartes");

  const navigate = useNavigate();

  // Comportements
  const handleSubmit= (e) => {
    e.preventDefault();
    if (username == 'Descartes') {
      navigate(`/order/${username}`);
      localStorage.setItem("username", username);
    }
  };

  const handleChange   = (e) => {
    setUsername(e.target.value);
  }

  // Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
    
           
        <div > 
          <TextInput
            value={username}
            onChange={handleChange}
            placeholder={'Entrez votre prénom'}
            type={"text"}
            required
            Icon={<BsPersonCircle/>}
            className='input-login'
          />
        </div>
        <PrimaryButton
           Icon={<IoChevronForward />}
           label={<span >Accéder à mon espace</span>}
        />
      
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`

  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family:  "Amatic SC", cursive;

  hr{
    border: 1.5px solid ${theme.colors.loginLine};
    margin: ${theme.gridUnit * 5}px;
  }

  h1{
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }
  
  h2{
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-login{
    margin: 18px 0;
  }
`

export default LoginForm