import React from 'react'
import { styled } from 'styled-components';
import { formatPrice } from '../../../utils/maths'

const Card = ({ product }) => {
    return (
        <CardStyled >
            {/* <div className="product"> */}
            <div className='img-container'><img src={`${product.imageSource}`} alt="" /></div>
            <h3>{product.title}</h3>
            <div className="info_product">
                <p>{formatPrice(product.price)}</p>
                <button >Ajouter</button>
            </div>
            {/* </div> */}
        </CardStyled>
    )
}
const CardStyled = styled.li`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 20px;

    
.img-container{

    width: 200px;
    height: 145px;
    border: pink solid 1px;
    text-align: center;
    padding: 29px 5px 12px 8px;
}

 img{
    height: 108px;
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