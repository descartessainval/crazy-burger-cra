import React from 'react'
import { styled } from 'styled-components';

const Card = ({ product }) => {
    return (
        <CardStyled key={product.id}>
            <div className="product">
                <div className='img-container'><img src={`${product.imageSource}`} alt="" /></div>
                <h3>{product.title}</h3>
                <div className="info_product">
                    <p>{product.price}</p>
                    <button >Ajouter</button>
                </div>
            </div>
        </CardStyled>
    )
}
const CardStyled = styled.li`

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
export default Card