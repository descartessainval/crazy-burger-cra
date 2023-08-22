import React, { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import Card from './Card';

const Cards = () => {
    const [products, setProducts] = useState({ fakeMenu2 });


    return (
        <CardsStyled className="list-products">
            <ul>
                {products.fakeMenu2.map((product) => (
                    <Card product={product} />
                ))}
            </ul>
        </CardsStyled>
    )
}
const CardsStyled = styled.div`

padding: 0;
width: 70rem;
margin: 2rem auto;
border: 1px solid purple;


ul{
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Crée 4 colonnes de largeur égale */
    gap: 20px; /* Ajoute un espacement de 20 pixels entre les éléments du grid */
    list-style-type:none;
    padding: 0;
    width: 70rem;
}

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