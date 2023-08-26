import React from 'react'
import { styled } from 'styled-components';

import ImgSource from './ImgSource';
import Description from './Description';
import { theme } from '../../../themes';

const Product = ({ infoId, imgSrc, title, price }) => {

    //test handel's button  
    const handleClic = () => {
        console.log(`j'ai cliqué sur ${infoId}`);
    }

    return (
        <ProductStyled onClick={handleClic}>
            <ImgSource imgSrc={imgSrc}/>
            <Description title={title} price={price} />
        </ProductStyled>
    )
}

const ProductStyled = styled.li`   
    border-radius: 20px;
    width: 240px;
    height: 330px;

    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    background:  ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: end; 

`;
export default Product