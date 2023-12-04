import React, { useContext } from 'react'
import styled from 'styled-components'
import OrderContext from '../../../../../../context/OrderContext'

const AddForm = () => {

  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau Produit",
    imageSource: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2.5
}

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
  }


  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="img-preview">Image preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />

        <input type="text" placeholder="Image URL" />

        <input type="text" placeholder="Price" />
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