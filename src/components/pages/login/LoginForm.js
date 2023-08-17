import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsPersonCircle, BsChevronRight } from "react-icons/bs";
// import Logo from '../../reusable-ui/Logo';
import styled from 'styled-components'// ouimport styled from 'styled-components/macro' -> permet d'afficher les noms de class attribuer à nos balises
import { theme } from '../../../themes';
import Welcome from './Welcome';
import InputForm from './InputForm';
import ButtonForm from './ButtonForm';


const LoginForm = () => {

  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      navigate(`/order/${username}`);
      localStorage.setItem("username", username);
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  return (
    <LoginFormStyled action="submit">
      <Welcome />
      <div className='input-width-icon'>
        <BsPersonCircle className='icon' />
        <InputForm username={handleChange} />
      </div>
      <div className='button-width-icon'>
        <ButtonForm clicBtn={handleSubmit}/>
        <BsChevronRight />
      </div>
    </LoginFormStyled>

  )
}

//dans tous les projets en entreprise qui utilise styled components
const LoginFormStyled = styled.div`

  background: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family:  "Amatic SC", cursive;

  hr{
    border: 1.5px solid #f56a2c;
    margin: 40px;
  }

  h1{
    color: white;
    font-size: 48px;
  }
  
  h2{
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 48px;
  }

  .input-width-icon{
     /* border: 1px solid red; */
     background-color: #fff;
     border-radius: 5px;
     display: flex;
     align-items: center;
     padding: 18px 24px;
     margin: 18px 0;

     .icon{
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
     }

     input{ 
      border: none;
      font-size: 15px;
      color: #17161a;
      /* width: 100%;
      display: flex; */
    }

    &::placeholder{
      background: white;
      color: lightgrey;
    }
  }

  .button-width-icon{
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    &:hover:not(:diseable){
        background-color: white;
        color: #ff9f1b;
        border: #ff9f1b 1px solid;
        transition: all 200ms ease-out;
    }

    &:active{
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }
  
  //before correction
  
   /* min-height: 100vh;
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
  } */

  .bg-img {
    /* background-image: url("/images/F03_burger-background.jpg");
    filter: brightness(50%);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position:  bottom;
    position: absolute;
    min-height: 100vh;
    width: 100%;
    z-index: -10;  */
  }
  
`


/*

 <LoginFormStyled action="submit">

         <div className="bg-img"></div>
        <Logo />
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
          </form>
        </div>
  
  </LoginFormStyled>
*/
export default LoginForm