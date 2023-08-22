import React, { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

const Cards = () => {
    const [products, setProducts] = useState({ fakeMenu2 });


    return (
        <CardsStyled className="container">
            <ul>
                {products.fakeMenu2.map((product) => (
                    <li key={product.id}>
                        <div className="product">
                            <img src={`${product.imageSource}`} alt=""  />
                            <h3>{product.title}</h3>
                            <div className="info_product">
                                <p>{product.price}</p> 
                                <button >Ajouter</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </CardsStyled>
    )
}
const CardsStyled = styled.div`

ul{
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Crée 4 colonnes de largeur égale */
    gap: 20px; /* Ajoute un espacement de 20 pixels entre les éléments du grid */
}

ul li .product{
    background: grey;
    width: 240px;
    height: 330px;
    border: 1px solid red;
}

.product img{
      width: 200px;
      height: 145px;
}
`;

export default Cards