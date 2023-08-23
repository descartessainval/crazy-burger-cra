import React from 'react'
import { styled } from 'styled-components';
import { formatPrice } from '../../../utils/maths'
import { theme } from '../../../themes';

const Card = ({ product }) => {
    return (
        <CardStyled>
            <div className='img-container'><img src={`${product.imageSource}`} alt="" /></div>
            <div className="info_product">
                <h2>{product.title}</h2>
                <div className='flex-render'>
                    <p>{formatPrice(product.price)}</p>
                    <button >Ajouter</button>
                </div>
            </div>
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

   
.img-container{

    width: 200px;
    height: 145px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    margin-top: 1rem;
}

 img{
    height: 120px;;
}

.info_product, .flex-render{
    width: 190px;
}
.info_product{
    width: 200px;
    padding: 10.5px; 
    margin-top: 1rem;
}

.info_product h2{
    font-family:  "Amatic SC", cursive;
    font-size: 2.2rem;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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
export default Card