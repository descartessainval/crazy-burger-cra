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

  const [username, setUsername] = useState("");
  // const [mdp, setMdp] = useState("");

  const navigate = useNavigate();

  const handleSubmit/* ou RedirectOrderPage */ = (e) => {
    e.preventDefault();
    if (username /*&& mdp == "1234"*/) {
      navigate(`/order/${username}`);
      localStorage.setItem("username", username);
    }
  };

  const handleChange   = (e) => {
    setUsername(e.target.value);
  }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <TextInput
        value={username}
        handleChange={handleChange}
        placeholder={'Entrez votre prénom'}
        type={"text"}
        required
        Icon={<BsPersonCircle className='icon' />}
      />
      <PrimaryButton 
         className={'btn-form'}
         Icon={<IoChevronForward className='icon' />}  
         label={<span >Accéder à mon espace</span>}
      />
    </LoginFormStyled>
  )
}

//  TEST DE LA REUTISABILITE D UN INPUT 
//AJOUT D UN NOUVEL INPUT
/*
Dans ala partie COMPORTEMENTS
  
const handleChangeMdp = (e) => {
setMdp(e.target.value);
}
*/
// <TextInput 
    // -> Ici, j'hydrate mon composant
//   value={mdp} 
//   handleChange={handleChangeMdp}
//   placeholder={"Entrez ton mot-de-passe"}
//   type={"password"}
//   Icon={<RiLockPasswordLine className='icon'/>}
//   required
// /> 

//dans tous les projets en entrepr ise qui utilise styled components
const LoginFormStyled = styled.form`

  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: /*2.5rem 2rem*/ 40px ${theme.spacing.lg};
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

  .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.size.SM};
      margin-left: 10px;
    }  

  //these properties are specific to the loginForm button
  .btn-form{
    width: 100%; 
    padding: 18px 24px;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.heavy};
  }
`

export default LoginForm