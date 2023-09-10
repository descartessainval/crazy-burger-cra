import React, { useContext } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import Profil from './Profil';
import ToggleButton from './ToggleButton';
import { toast } from 'react-toastify';
import ToastAdmin from './ToastAdmin';
import OrderContext from '../../../../context/OrderContext';

const RightSideNavbar = () => {
 
    // comportement
    const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext)  

    const displayToastNotification = () =>{
        if(!isModeAdmin)  {
            setIsModeAdmin(!isModeAdmin);
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

              //Le panel admin s'ouvre
        }
        setIsModeAdmin(!isModeAdmin);
    }

    // view
    return (
        <RightSideNavbarStyled>
            <ToggleButton  
                onToggle={displayToastNotification} 
                labelIfUnchecked={"activer le mode admin" } 
                labelIfChecked={ "désactiver le mode admin"}
                couleurDuBackground={"green"}
                isChecked={isModeAdmin}
            />
            <Profil/>
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