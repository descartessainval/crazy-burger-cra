import React from 'react'
import styled from 'styled-components'

const AddForm = () => {
  return (
    <AddFormStyled>
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