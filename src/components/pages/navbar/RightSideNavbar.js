import React from 'react'
import { Link} from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { styled } from 'styled-components';
import { theme } from '../../../themes';

const RightSideNavbar = ({ username}) => {
    
    const deleteLocal =()=>{
        localStorage.clear() 
    }
    return (
        <RightSideNavbarStyled >
            <div className='account-name'>
                <h1>Hey, <span>{username}</span></h1>
                <Link to={"/"} onClick={deleteLocal}  >Se déconnecter</Link>
            </div>
            <BsPersonCircle className='icon' />
        </RightSideNavbarStyled>
    )
}

const RightSideNavbarStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greyMedium};

    .account-name{
      color: ${theme.colors.white};
      margin: 1rem;
    }

    .icon{
        width: 36px;
        min-height: 36px ;
        margin: 31.09px 70px 31.09px 0;
    }

    h1, a{
        font-weight: ${theme.fonts.weights.regular};
        color: ${theme.colors.greyMedium};
    }

    h1{
        margin: 0;
        font-size: ${theme.fonts.size.P0};
    }

    h1 span{
       color: ${theme.colors.primary};
    }

    a:hover{
        border-bottom: 1px solid ;
    }
`;

export default RightSideNavbar