import React, { useContext, useState }  from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';
import ImgPreview from './ImgPreview';
import SubmitMessage from './SubmitMessage';
import { getInputConfig } from './InputTextConfig';
import styled from 'styled-components';

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0
}
const EditForm = () => {

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
  
    //fonction qui au click sur la card 
    //QUESTION EST CE QUE LA FONCTION EST BIEN A SA PLACE
    const handleClick = (key) => { 
      //permet d'afficher les proppriété de la card dans les inputs correspondants
      //et modifie le propréités css de la card 
     }
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewPeoduct({ ...newProduct, [name]: value })
    };
  
    const inputTexts = getInputConfig(newProduct);
  

  return (
    <EditFormStyled>
      <div className="content-edit">
        <span className="description">editer un produit en temps réel</span>
      </div>
      <form onSubmit={handleSubmit} className='form-edit'>
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
        <span className='msg-indicatif'>message indicatif</span>
      </form>
    </EditFormStyled>
  )
}


const EditFormStyled =  styled.div `
.content-edit{
  background: green;
}

.form-edit{
  background: red;
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

  .msg-indicatif{
    background: yellow;
    grid-area:4/2/5/3;
    display: flex;
    align-items: center;
    position: relative;
    top:3px;
    height: 100%;
  }

}

`

export default EditForm