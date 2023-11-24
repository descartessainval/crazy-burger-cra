import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import PrimaryButton from './PrimaryButton'
import OrderContext from '../../context/OrderContext';
import { getTabSelected, tabsConfig } from '../pages/order/main/Admin/tabConfig';
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { MdEuroSymbol } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";


const InputField = () => {
    const { currentTabSelected } = useContext(OrderContext)
    const [inputField, setInputField] = useState('');
    const [isImg, setIsImg] = useState(false);

    const tabs = tabsConfig;
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    const handleChange = (e) => {
        setInputField(e.target.value);
    }

    const isImgPresent = (e) => {
        if(e.target.src != null){
            setIsImg(true);
        }

        
    }

    return (
        <FormTabStyled>
            <div className="container_fields">
                <div className="img_preview">
                    {isImg == false ? <p>Aucune image</p> : <img src="" alt="" />}
                </div>
                <div className='form_right'>
                    <div className="input-field">

                        <TextInput handleChange={handleChange}
                            placeholder={"Nom du produit (ex: Super Burger)"}
                            type={"text"}
                            Icon={<FaHamburger className='icon' />}
                            className={'input_panel'}
                        />

                        <TextInput handleChange={handleChange}
                            placeholder={"Lien URL d\'une image(ex: https://photo-de-mon-produit.png"}
                            type={"text"}
                            Icon={<MdPhotoCamera className='icon' />}   
                            className={'input_panel'}

                        />

                        <TextInput handleChange={handleChange}
                            placeholder={'Prix'}
                            type={"text"}
                            Icon={<MdEuroSymbol className='icon' />}
                            className={'input_panel'}
                        />

                    </div>
                    <div className='submit-side '> 
                        <PrimaryButton label={tabSelected && tabSelected.labelForm} className={'btn-form'} />
                        {/* <div className='success-logo' >
                            <CiCircleCheck  />
                            <p>Ajouté avec succès</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </FormTabStyled>
    )
}

const FormTabStyled = styled.form`

.container_fields{
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 1.8rem 8rem 2rem 4.5rem;
    height: 160.19px;
    width:880.59px;
  
    .img_preview{
        border: 1px solid #d0d0d3;
        width: 215.14px;
        height: 130px;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form_right{
        margin-left: 1rem;
        .btn-form{
            background: #60BD4F;
            border: none;
            height: 34.05px;
            width: 275.25px;
        }
    }

    .input-field {

        .input_panel{
            padding: 0;
            margin-bottom: 8px ;
            display: flex;
            background: #F5F5F7;
            padding-left: 2rem;
            justify-content: center;
            align-items: center;

            input {
                padding: 10px;
                width: 100%;
                border: 0;
                background: #F5F5F7;
            }
        }         
    }   
    
    .btn-form{
        color: whitesmoke;
    }

    .btn-form:hover{
        color: #60BD4F;
        background: white;
        border: #60BD4F solid 1px;
    }
.submit-side{
    display: flex;

    .success-logo{
        color: #60BD4F;
        margin-left: 2rem;
        display: flex;
        align-items: center;

        & p{
            margin: 0;
            padding: 0 5px;
        }
    }
}
   
}



`

export default InputField