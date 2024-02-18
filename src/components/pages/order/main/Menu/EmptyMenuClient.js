import styled from 'styled-components'
import Button from '../../../../reusable-ui/Button'
import { theme } from '../../../../../themes'

export const EmptyMenuClient = () => {
    return (
        <EmptyMenuClientStyled>
            <span className='title'>Victime de notre succès! :D </span>
            <span className="description">De nouvelles recettes sont en cours  de préparation.</span>
            <span className='description'>A très vite!</span>
        </EmptyMenuClientStyled>
    )
}

const  EmptyMenuClientStyled= styled.div`
background-color: ${theme.colors.background_white};
box-shadow: ${theme.shadows.strong};
border-bottom-right-radius: ${theme.borderRadius.extraRound};
display: flex;
flex-direction: column;
justify-content:center;
align-items:center; //permet de réduire la largeur du bouton resetMenu
font-family: 'Amatic SC',cursive;

.title
.descrption{
    text-align: center;
    color: ${theme.colors.greyBlue};
}

.title{
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
}

.description{
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
}

button{
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
    width: auto;
}

`