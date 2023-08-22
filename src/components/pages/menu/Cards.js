import React, { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import Card from './Card';

const Cards = () => {
    const [products, setProducts] = useState({ fakeMenu2 });

    //eslint-disable-next-line

    return (
            <CardsStyled>
                {products.fakeMenu2.map((product) => (
                    <Card product={product} key={product.id} />
                ))}
            </CardsStyled>
    )
}
const CardsStyled = styled.ul`

/* ul{ */
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Crée 4 colonnes de largeur égale */
    gap: 20px; /* Ajoute un espacement de 20 pixels entre les éléments du grid */
    list-style-type:none;

    width: 70rem;
    height: 525px;

    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    grid-row-gap: 60px;


    padding: 50px 50px 150px;

    margin: 1rem 1rem 10rem 1rem;

    overflow: auto;

    -ms-overflow-style: none;  
     scrollbar-width: none;    
    //Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

/* } */

ul li .product{
    background: grey;
    width: 240px;
    height: 330px;
    border: 1px solid red;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

ul li{
  display: flex;
  justify-content: center;
}

`;

export default Cards