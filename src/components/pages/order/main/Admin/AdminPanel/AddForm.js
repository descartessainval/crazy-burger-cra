import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import OrderContext from '../../../../../../context/OrderContext'
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';
import ImgPreview from './ImgPreview';
import SubmitMessage from './SubmitMessage';
import { getInputConfig } from './InputTextConfig';


export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0
}

const AddForm = () => {

  //State
  const { handleAdd, newProduct, setNewPeoduct } = useContext(OrderContext);
  const [isSubmitted, setisSubmitted] = useState(false)
  
  //comportements
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPeoduct({ ...newProduct, [name]: value })
  };

  const inputTexts = getInputConfig(newProduct);

  // affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImgPreview  imageSource={newProduct.imageSource} title={newProduct.title}/>
      <div className="input-fields ">
        {
          inputTexts.map((input)=>{
            return (
              <TextInput 
                    {...input} 
                    key={input.id}
                    onChange={handleChange}
                    version={input.version} 
                   
              />
            )
          })
        }
     </div>
      <div className="submit">
        <Button className='submit-btn' label="Ajouter un nouveau produit au menu!" version="success"/>
        {
          isSubmitted && <SubmitMessage/>
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
  

  .input-fields{
    grid-area: 1/2/4/2;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit{
    grid-area:4/2/5/3;
    display: flex;
    align-items: center;
    position: relative;
    top:3px;

    .submit-btn{
      width: 50%;
    }
   
  }

`;
export default AddForm  