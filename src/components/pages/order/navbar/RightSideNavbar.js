import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import Profil from './Profil';
import ToggleButton from './ToggleButton';
import { toast } from 'react-toastify';

import ToastAdmin from './ToastAdmin';

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
            <ToastAdmin/>
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
`;

export default RightSideNavbar