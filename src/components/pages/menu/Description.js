import React from 'react'
import { styled } from 'styled-components';
import { formatPrice } from '../../../utils/maths'
import { theme } from '../../../themes';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import TitleH2 from './TitleH2';

const Description = ({ product }) => {
    return (
        <DescriptionStyled className="info_product">
            <TitleH2 product={product}/>
            <div className='flex-render'>
                <p>{formatPrice(product.price)}</p>
                <PrimaryButton label={"Ajouter"} />
            </div>
        </DescriptionStyled>
    )
}

const DescriptionStyled = styled.div`
      width: 200px;
      padding: 10.5px; 
      margin-top: 1rem;

  &, .flex-render{
    width: 190px;
}


.flex-render{
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.primary};
}

button{
    margin: 6px 0px;
    padding: 0px 30px;
    border-radius: 5px;
    border: 0;
    background: ${theme.colors.primary}; 
    color: white;
    letter-spacing: 1px;
    cursor: pointer;
}

button:hover{
    background: ${theme.colors.white}; 
    border: ${theme.colors.primary} solid 1px;
    color: ${theme.colors.primary};
}

`;
export default Description