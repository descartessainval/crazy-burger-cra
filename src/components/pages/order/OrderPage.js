import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const OrderPage = () => {
    //états 
    let { prenom } = useParams();
    
    let navigate = useNavigate();
    
    //comportements
    prenom = localStorage.getItem("prenom");
  
    
    const  handleClick =()=> {
        navigate("/");    
        localStorage.clear();
    }   

 
    
    //vue
    return (
        <div>
             <h2>Bonjour {prenom}</h2>  
            <button type="submit" onClick={handleClick}>Déconnexion</button>
        </div>
    )

  
}

export default OrderPage