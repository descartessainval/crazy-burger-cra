import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import OrderContext from '../../../../../../context/OrderContext'
import { theme } from '../../../../../../themes'
import { CiCircleCheck } from 'react-icons/ci'

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
        {newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : <div>Aucune Image</div>}
      </div>
      <div className="input-fields">
        <input name='title' value={newProduct.title} onChange={handleChange} type="text" placeholder={"Nom du produit (ex: Super Burger)"} />
        <input name='imageSource' value={newProduct.imageSource} onChange={handleChange} type="text" placeholder="Lien URL d\'une image(ex: https://photo-de-mon-produit.png" />
        <input name='price' value={newProduct.price ? newProduct.price : ""} onChange={handleChange} type="text" placeholder="Price" />
      </div>
      <div className="submit">
        <button className='submit-btn'>Submit button</button>
        {
          isSubmitted && <div className="submit-msg">
            <CiCircleCheck />
            <span> Ajouté avec succès</span>
          </div>
        }
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  /* border: pink solid 1px; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr) ;
  height: 100%;
  width: 70%;
  
  .img-preview{ 
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${theme.colors.greyMedium} solid 1px;
    border-radius: ${theme.borderRadius.extraRound};
    margin: 5px;
    img{
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .input-fields{
    /* background: blue; */
    grid-area: 1/2/4/2;

    display: grid;

}
  .submit{
    /* background: grey; */
    grid-area:4/2/5/3;
    display: flex;
    align-items: center;
    .submit-btn{
      width: 50%;
    }
    .submit-msg{
      color: #60BD4F;
      span{
        }
}
  }

`;
export default AddForm