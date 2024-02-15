import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import OrderContext from '../../../../../../context/OrderContext'
import { theme } from '../../../../../../themes'
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0
}

const AddForm = () => {

  //State
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewPeoduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setisSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    }

    handleAdd(newProductToAdd);
      setNewPeoduct(EMPTY_PRODUCT);
      
      setisSubmitted(true);

      setTimeout(() => {
        setisSubmitted(false);
      }, 2000);
  }

  //comportements
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPeoduct({ ...newProduct, [name]: value })
  };

  // vue
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="img-preview">
        {newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : <div className='empty-img'>Aucune Image</div>}
      </div>
      <div className="input-fields">
        <TextInput Icon={<FaHamburger/>} name='title' value={newProduct.title} onChange={handleChange} type="text" placeholder={"Nom du produit (ex: Super Burger)"} version='minimalist' />
        <TextInput Icon={<BsFillCameraFill/>} name='imageSource' value={newProduct.imageSource} onChange={handleChange} type="text" placeholder="Lien URL d\'une image(ex: https://photo-de-mon-produit.png" version='minimalist'  />
        <TextInput Icon={<MdOutlineEuro/>} name='price' value={newProduct.price ? newProduct.price : ""} onChange={handleChange} type="text" placeholder="Price"version='minimalist'  />
      </div>
      <div className="submit">
        {/* <button className='submit-btn'>Submit button</button> */}
        <Button /*className='submit-btn' */label="Ajouter un nouveau produit au menu" version="success"/>
        {
          isSubmitted && <div className="submit-msg">
            <FiCheck />
            <span> Ajouté avec succès</span>
          </div>
        }
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr) ;
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  
  .img-preview{ 
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: ${theme.colors.greyMedium} solid 1px;
    border-radius: ${theme.borderRadius.extraRound};
    margin: 5px; */
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
  }
  .input-fields{
    grid-area: 1/2/4/2;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit{
    /* background: green; */
    grid-area:4/2/5/3;
    display: flex;
    align-items: center;
    .submit-btn{
      width: 50%;
    }
    .submit-msg{
      color: #60BD4F;
      padding-left: 1rem;
    }
  }

`;
export default AddForm  