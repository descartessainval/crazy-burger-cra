import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm';
import Logo from '../../reusable-ui/Logo';
import '../../reusable-ui/Logo.css'



const LoginPage = () => {
  
  return (
    <LoginFormStyled>
      <Logo/>
      <LoginForm />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;   
  justify-content: center;
  align-items: center;

  //hanlde background
  ::before{
    content: "";
    background-image: url("/images/F03_burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

  }
`;

export default LoginPage