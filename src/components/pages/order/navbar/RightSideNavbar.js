import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { styled } from 'styled-components';
import { theme } from '../../../../themes';
import Profil from './Profil';
import ToggleButton from './ToggleButton';

const RightSideNavbar = ({username}) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const [labelIfChecked,setLabelIfChecked ] = useState(false);
    const [labelIfUnchecked, setLabelIfUnchecked] = useState(false);

    // feature variables
    // isChecked
    // onToggle
    // labelIfChecked 
    // labelIfUnchecked

    // comportement
    const onToggle = () =>{

        // logic
        //si ischecked == false alors isChecked = false
        //si non, isChecked == false alors isCheck = true

        if(isChecked == false)  {
            setIsChecked(true);
            //
            console.log("mode admin activé ")
        }
        else {
            setIsChecked(false);
            console.log("mode admin desactivé ")
        }
    }

    // view
    return (
        <RightSideNavbarStyled >
            <ToggleButton  onToggle={onToggle}/>
            <Profil username={username} />
            <BsPersonCircle className='icon' />
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