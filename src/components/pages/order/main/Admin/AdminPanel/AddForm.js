import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import OrderContext from '../../../../../../context/OrderContext'

const EMPTY_PRODUCT = {
  id: new Date().getTime(),
  title: "Nouveeau produit",
  imageSource: "",
  price: 14
}

const AddForm = () => {

  //State
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewPeoduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    }

    handleAdd(newProductToAdd);
  }

  //comportements
  const handleChange = (e) => {   
    const {name, value} = e.target;
    setNewPeoduct({...newProduct, [name] : value})
  };

  // vue
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="img-preview">Image preview</div>
      <div className="input-fields">
        <input name='title' value={newProduct.title} onChange={handleChange} type="text" placeholder="Nom" />
        <input name='imageSource' value={newProduct.imageSource} onChange={handleChange} type="text" placeholder="Image URL" />
        <input name='price' value={newProduct.price ? newProduct.price : ""} onChange={handleChange} type="text" placeholder="Price" />
      </div>
      <button className="submit-preview">Submit button</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: pink solid 1px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr) ;
  height: 100%;
  width: 70%;
  
  .img-preview{ 
    background: red;
    grid-area: 1/1/4/2;
  }
  .input-fields{
    background: blue;
    grid-area: 1/2/4/2;

    display: grid;

}
  .submit-preview{
    background: grey;
    grid-area:4/2/5/3;
    display: grid;
    width: 50%;
  }

`;
export default AddForm