import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import Profil from './Profil';
import ToggleButton from './ToggleButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RightSideNavbar = ({username}) => {
    
    const [isModeAdmin, setsModeAdmin] = useState(false);
 
    // comportement
    const displayToasrNotification = () =>{
        if(!isModeAdmin )  {
            setsModeAdmin(true);
            toast.info(
                "Mode admin activé", 
                {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
        }
        setsModeAdmin(!isModeAdmin);
    }

    // view
    return (
        <RightSideNavbarStyled >
            <ToggleButton  
                onToggle={displayToasrNotification} 
                labelIfUnchecked={"activer le mode admin" } 
                labelIfChecked={ "désactiver le mode admin"}
                couleurDuBackground={"green"}
            />
            <Profil username={username} />
            <BsPersonCircle className='icon' />
            <ToastContainer  className="toaster" bodyClassName="body-toast"/> 
        </RightSideNavbarStyled>
    )
}

const RightSideNavbarStyled = styled.div`
    display: flex;
    align-items: center;
    color: ${theme.colors.greyMedium};

    .icon{
        width: 36px;
        min-height: 36px;
        padding-right: 50px;
    }

    .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }

`;

export default RightSideNavbar