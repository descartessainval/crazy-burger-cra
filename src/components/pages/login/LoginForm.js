import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsPersonCircle, BsChevronRight } from "react-icons/bs";
// import Logo from '../../reusable-ui/Logo';
import styled from 'styled-components'// ouimport styled from 'styled-components/macro' -> permet d'afficher les noms de class attribuer à nos balises
import { theme } from '../../../themes';


const LoginForm = () => {

  const [prenom, setPrenom] = useState("");

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (prenom) {
      navigate(`/order/${prenom}`);
      localStorage.setItem("prenom", prenom);
    }
  };

  const handleChange = (e) => {
    setPrenom(e.target.value);
  }

  return (
    <LoginFormStyled className='FormStyle'>
      {/* <div className="bg-img"></div>
      <Logo /> */}
      <form action="submit" >
        <h2>BIENVENUE CHEZ NOUS !</h2>
        <hr />
        <h3 className='mb'>CONNECTEZ-VOUS</h3>
        <div className='disp-col'>
          <div className='input-username'>
            <i><BsPersonCircle /></i>
            <input
              type="text"
              name="" id=""
              placeholder='Entrez votre prénom'
              onChange={handleChange}
              required />
          </div>
          <button onClick={handleSubmit}>
            Accéder à mon espace 
            <i className='chevron'><BsChevronRight/></i>
          </button>
        </div>
      </form>
    </LoginFormStyled>

  )
}

//dans tous les projets en entreprise qui utilise styled components
const LoginFormStyled = styled.div`

  //before correction
  /*
   min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
      color:${theme.colors.primary_burger};
      font-weight: ${theme.weights.bold};

  }
  h2{
    font-size:  ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
  }

  h3{
    font-size: ${theme.fonts.P4};
  }

  h2, h3{
    color: ${theme.colors.white};
  }

  h1,h2,h3{
    font-family: 'Amatic SC', cursive;
  }

  form {
    text-align: center;
    z-index: 1;
    width: 25rem;

    hr {
      border: ${theme.colors.primary_burger} 2px solid;
      margin: 0;
    }

    button {       
      background-color:  ${theme.colors.primary};
      color: ${theme.colors.white};
      display: flex;
      justify-content: center;
      align-items: center;
 

      i{
        margin-left: 0.5rem;
        width:   ${theme.fonts.XS};
        height:  ${theme.fonts.XS}; 
      }
    }

    button:hover {
      background-color:  ${theme.colors.white};
      color: ${theme.colors.primary_burger};
    }

    .disp-col {
      display: flex;
      flex-direction: column;
      width: 25rem;
    }
  }

  .mb {
    margin-bottom:  ${theme.spacing.sm};
  }

  .input-username{
    position: relative;

   
    i{
      position: absolute;
      margin: ${theme.fonts.P1};
      opacity: 0.33;
    }

    ::placeholder{
      opacity: 0.33;

    }

    :focus{
      outline: none;
    }
  
    input{
      width: 20.5rem;
      margin-bottom: 1rem;
      padding-left: 3rem ;
    }
  }

  .input-username:focus{
    outline: none; 
  }

  input,
  button {
    padding: 18px 24px 18px 24px;
    margin-bottom: 1rem;
    cursor: pointer;
    border-radius: ${theme.borderRadius.round};
    border: none;
    font-size:  ${theme.fonts.P0};    
  }

  .bg-img {
    background-image: url("/images/F03_burger-background.jpg");
    filter: brightness(50%);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position:  bottom;
    position: absolute;
    min-height: 100vh;
    width: 100%;
    z-index: -10; 
  }
   */
`
export default LoginForm