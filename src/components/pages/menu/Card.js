import React from 'react'
import { styled } from 'styled-components';

import ImgSource from './ImgSource';
import Description from './Description';

const Card = ({ product }) => {

    //test handel's button  
    const handleClic = () => {
        console.log(`j'ai cliqué sur ${product.id}`);
    }

    return (
        <CardStyled onClick={handleClic}>
            <ImgSource product={product}/>
            <Description product={product} />
        </CardStyled>
    )
}

const CardStyled = styled.li`   
    border-radius: 20px;
    width: 240px;
    height: 330px;

    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: end; 

`;
export default Card