import React from 'react'
import { styled } from 'styled-components';

const ImgSource = ({ imgSrc }) => {
    return (
        <ImgSourceStyled className='img-container'><img src={`${imgSrc}`} alt="" /></ImgSourceStyled>
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