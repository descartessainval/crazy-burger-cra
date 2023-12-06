import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../themes/index';
import PrimaryButton from '../reusable-ui/PrimaryButton';
import { TiDelete } from "react-icons/ti";

const Card = ({ infoId, imageSource, title, leftDescription }) => {

    //test handel's button  
    const handleClic = () => {
        console.log(`j'ai cliqué sur ${infoId}`);
        //nClick={handleClic}
    }


    const onDelete =()=>{
        console.log(`j'ai supprime sur ${infoId}`);
    }

    return (
        <CardStyled >
        
            {/* si panel admin actif faire apparaitre le logo */}
            <button className='delete-btn' area-lang='delete-btn'>
                <TiDelete className='icon' />
            </button>
      
            <div className='image'><img src={`${imageSource}`} alt="" /></div>
            <div className="info-text">
                <div className='title'>{title}</div>
                <div className='description'>
                    <p>{leftDescription}</p> 
                    <PrimaryButton label={"Ajouter"}   />
                </div>
            </div>

        </CardStyled>
    )
}

const CardStyled = styled.div`   
    display: grid;
    grid-template-rows:  65% 1fr; // step avant 65% 1%
    border-radius: 20px;
    width: 200px;
    height: 300px;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    background:  ${theme.colors.white};
    position: relative;
    
    .delete-btn{
        border: 1px solid red;
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
        width: 30px;
        height: 30px;
        color: ${theme.colors.primary};
        z-index: 2;
        padding: 0;
        border: none;
        background: none;

        .icon{
            height: 100%;
            width: 100%;
        }

        &:hover{
            color: ${theme.colors.red};
        }

        &:active{
            color: ${theme.colors.PrimaryButton};
        }
    }


    .image{
        width: 100%;
        height: auto;
        margin-top: 30px;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .info-text {
        display: grid;
        
        .title{
            font-family:  "Amatic SC", cursive;
            font-size:  ${theme.fonts.size.P4};
            font-weight: ${theme.fonts.weights.bold};
            line-height: 45.4px;
            margin: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        &, .description{
            width: 190px;
        }
      
        .description{
          display: flex;
          justify-content: space-between;
          color: ${theme.colors.primary};
        }
      
        button{
          margin: 6px 0px;
          padding: 0px 30px;
          border-radius: ${theme.borderRadius.round};
          border: 0;
          background: ${theme.colors.primary}; 
          color: white;
          letter-spacing: 1px;
          cursor: pointer;
        }
    
        button:hover{
          background: ${theme.colors.white}; 
          border: ${theme.colors.primary} solid 1px;
          color: ${theme.colors.primary};
        }
    }

  

`;
export default Card