import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../../themes'

const ImgPreview = ({imageSource, title}) => {
  return (
    <ImagePreviewStyled >
    {imageSource ? <img src={imageSource} alt={title} /> : <div className='empty-img'>Aucune Image</div>}
    </ImagePreviewStyled>
  )
}
const ImagePreviewStyled = styled.div`
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;
 
    img{
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }

    .empty-img{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items:center;
      border : 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greyDark};
      border-radius: ${theme.borderRadius.round};
    }

`

export default ImgPreview