import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import Menu from './Menu';
import Basket from './Basket';
import Admin from './Admin/Admin';
import AdminContext from '../../../../context/AdminContext';


const Main = () => {

  return (
    <MainStyled >
      {/* <Basket />  */}
      <div className='menu-and-admin'>
        <Menu />
        <Admin/>
      </div>  
    </MainStyled>
  )
}

const MainStyled = styled.main`
  border: 1.5px solid green;
  /* flex: 1; */
  height: calc(95vh - 10vh);

  background: ${theme.colors.background_white};
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound}; 
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  
  display: grid;
  grid-template-columns: /*25%*/  1fr;
  /* overflow-y: scroll; */

  &::-webkit-scrollbar{
    width: 5px;
  }
  
  &::-webkit-scrollbar-thumb{
    background: ${theme.colors.greyMedium};
    border-radius: ${theme.borderRadius.round};
  }

  .menu-and-admin{
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    .toggle-panel-ouvert{
      /* height: 6vh; */
      height: 27.08559vh; 

      display: block;
    }

    .toggle-panel-ferme{
      visibility: hidden;
    }

    .toggle-panel-active{
      height: 27.08559vh; 
    }

  }


`;

export default Main