import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import { formatPrice } from '../../../../utils/maths'
import Card from '../../../reusable-ui/Card';
import OrderContext from '../../../../context/OrderContext';

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const Menu = () => {


    const { products, isModeAdmin, handleDelete, resetMenu } = useContext(OrderContext);


    //comportements

    // STEP 1 AVANT USAGE DU CONTEXT
    // const handleDelete = (IdOfProductToDelete) => {

    //     step 1 SANS CONTEXT
    //     alert(`handleclickbutton IdOfProductToDelete = ${products.filter((index) => index.id == id)} `);


    //     1. copy du state
    //     const menuCopy = [...products];

    //     2. manip de la copie du state
    //     Méthode filtrer => c'est filter out je prends et je le dégage ou
    //     filter in , je prends l'élément et je le conserve 
    //                             dans norte cas ce qu'on va conserver 
    //                             pour chaq product de mon menu,
    //         je veux concerver uniquement le product dont l'id est différent 
    //                             de l'IdOfProductToDelete
    //     const menuUpdated = menuCopy.filter((indexToDelete) => indexToDelete.id !== IdOfProductToDelete);


    //     setProducts(menuUpdated);
    //     3. update state
    //     setProducts(newMenu)


    // }

   

    //snippet nfn

const reloadMenu = () => { 
    resetMenu();
 }

 //affichage
    if (products.length == 0) {
        return <div className=''> 
                    <span>Pas de produit</span>
                    <button onClick={reloadMenu}>Regenere Products</button>
                </div>
    }

    return (
        <MenuStyled>
            {products.map(({ id, title, imageSource, price }) => (
                <Card
                    imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                    key={id}
                    infoId={id}
                    title={title}
                    leftDescription={formatPrice(price)} /*j'utilise le spread opérator dans ce cas on préférera la premièr eméthode {...product}*/
                    hasDeleteButton={isModeAdmin}  //Affichage conditionnel du bouton delete
                    //je dois definir une fonction fléché pour qu'elle appelle
                    //mon comportement handledelete auquelle j'affiche mon id
                    onDelete={() => handleDelete(id)}
                />
            ))}
        </MenuStyled>
    )
}

const MenuStyled = styled.ul`

    margin: 0;
    background: #F5F5F7;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    justify-items: center;
    padding: 50px 50px 150px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    overflow-y: scroll;
`;

export default Menu