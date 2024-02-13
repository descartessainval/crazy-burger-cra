import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../themes/index';
import PrimaryButton from '../reusable-ui/PrimaryButton';
import { TiDelete } from "react-icons/ti";

const Card = ({ infoId, imageSource, title, leftDescription , hasDeleteButton, onDelete}) => {

    return (
        <CardStyled >
        
           {hasDeleteButton &&  (<button className='delete-btn' area-lang='delete-btn' onClick={onDelete}>
                <TiDelete className='icon' />
            </button>)}
            
      
            <div className='image'><img src={`${imageSource}`} alt="" /></div>
            <div className="info-text">
                <div className='title'>{title}</div>
                <div className='description'>
                    <div className="left-description">{leftDescription}</div>
                    <div className="right-description">
                        <PrimaryButton className="primary-button" label={"Ajouter"}   />
                    </div>
                </div>
            </div>

        </CardStyled>
    )
}

const CardStyled = styled.div`   
    display: grid;
    grid-template-rows:  65% 1fr; 
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
        grid-template-rows: 40%  60%;
        
        .title{
            font-family:  "Amatic SC", cursive;
            font-size:  ${theme.fonts.size.P4};
            font-weight: ${theme.fonts.weights.bold};
            color: black;
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
          align-items: center;
          color: ${theme.colors.primary};
            
          
            .leftDescription{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-weight: ${theme.fonts.weights.medium};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: ${theme.fonts.weights.medium};
                color: ${theme.colors.primary};
            }          

            .right-description{
                justify-content: flex-end;
                align-items: center;
                font-size: ${theme.fonts.size.P1};
          
                .primary-button{
                  font-size: ${theme.fonts.size.XS};
                  cursor: pointer;
                  padding: 13px 24px;
                }
          }

        }
  
    }
`;
export default Card