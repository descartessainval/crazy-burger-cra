import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import Menu from './Menu/Menu';
import Basket from './Basket';
import Admin from './Admin/Admin';
import OrderContext from '../../../../context/OrderContext';


const Main = () => {

  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext);

  return (
    <MainStyled >
      {/* <Basket />  */}
      <div className='menu-and-admin'>
        <Menu />
      {isModeAdmin && <Admin/>}
      </div>  
    </MainStyled>
  )
}

const MainStyled = styled.main`
  /* flex: 1; */
  height: calc(95vh - 10vh);

  background: ${theme.colors.background_white};
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound}; 
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  
  display: grid;
  grid-template-columns: /*25%*/  1fr;

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

    .toggle-panel-open{
      height: 6vh;
      display: block;
    }

    .toggle-panel-close{
      visibility: hidden;
    }

    .toggle-panel-active{
      height: 27.08559vh; 
    }
  } 
`;

export default Main