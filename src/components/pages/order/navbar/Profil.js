import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from '../../../../themes';


const Profil = ({ username }) => {
    const deleteLocalStorage = () => {
        localStorage.clear()
    }
    return (
        <ProfilStyles >
            <p>Hey, <b>{username}</b></p>
            <Link to={"/"} onClick={deleteLocalStorage}  ><small>Se déconnecter</small></Link>
        </ProfilStyles>
    )
}

const ProfilStyles = styled.div`
    color: ${theme.colors.white};
    margin: 1rem;
    padding-left: 50px;

    p, a{
        font-weight: ${theme.fonts.weights.regular};
        color: ${theme.colors.greyMedium};
    }

    p{
        margin: 0;
        font-size: ${theme.fonts.size.P0};
    }

    p b{
       color: ${theme.colors.primary};
    }

    a:hover{
        border-bottom: 1px solid ;
    }
`;

export default Profil