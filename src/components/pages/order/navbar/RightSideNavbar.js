import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import Profil from './Profil';
import ToggleButton from './ToggleButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RightSideNavbar = ({username}) => {
    
    const [isChecked, setIsChecked] = useState(false);


    // comportement
    const onToggle = () =>{
        if(isChecked == false)  {
            setIsChecked(true);
            toast.info(
                "Mode admin activé", 
                {
                theme: "dark",
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
        }else{
            setIsChecked(false);
        }
    }

    // view
    return (
        <RightSideNavbarStyled >
            <ToggleButton  onToggle={onToggle}/>
            <Profil username={username} />
            <BsPersonCircle className='icon' />
            <ToastContainer  />
        </RightSideNavbarStyled>
    )
}

const RightSideNavbarStyled = styled.div`
    display: flex;
    align-items: center;
    color: ${theme.colors.greyMedium};

    /* .admin_btn{
        background: orange;
    }
    */
    .icon{
        width: 36px;
        min-height: 36px;
        padding-right: 50px;
    }


`;

export default RightSideNavbar