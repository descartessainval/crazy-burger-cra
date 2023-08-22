import React, { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

const Cards = () => {
    const [products, setProducts] = useState({ fakeMenu2 });


    return (
        <CardsStyled className="list-products">
            <ul>
                {products.fakeMenu2.map((product) => (
                    <li key={product.id}>
                        <div className="product">
                            <div className='img-container'><img src={`${product.imageSource}`} alt=""  /></div>
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

.img-container{
    width: 200px;
    height: 145px;
    border : pink solid 1px ;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product img{
    width: 10rem;
    height: 11.75vh;
}

.info_product{
    display: flex;
    justify-content: space-between;
    width: 12rem;
}
.product h3{
    text-overflow: ellipsis;
}
`;

export default Cards