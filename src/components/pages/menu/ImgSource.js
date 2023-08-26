import React from 'react'
import { styled } from 'styled-components';

const ImgSource = ({ product }) => {
    return (
        <ImgSourceStyled className='img-container'><img src={`${product.imageSource}`} alt="" /></ImgSourceStyled>
    )
}
const ImgSourceStyled = styled.div`
width: 200px;
height: 145px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;
margin-top: 1rem;
img{
    height: 120px;;
}  
`;
export default ImgSource