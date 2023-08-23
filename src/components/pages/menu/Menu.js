import React, { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import Card from './Card';

const Menu = () => {
    const [products, setProducts] = useState({ fakeMenu2 });
    return (
            <MenuStyled>
                {products.fakeMenu2.map((product) => (
                    <Card product={product} key={product.id} />
                ))}
            </MenuStyled>
    )
}

const MenuStyled = styled.ul`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Crée 4 colonnes de largeur égale */
    gap: 20px; /* Ajoute un espacement de 20 pixels entre les éléments du grid */
    list-style-type:none;
    justify-items: center;
    
    width: 100%;

    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    grid-row-gap: 60px;
    
    padding: 33px 60px;
    
    overflow: auto;
    -ms-overflow-style: none;  
    scrollbar-width: none;    
    
    //Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

@media screen and  (max-width: 1120px){
    grid-template-columns: repeat(2, 1fr)
}

@media screen and  (max-width: 580px){
    grid-template-columns: repeat(1, 1fr)
}
`;

export default Menu