import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const OrderPage = () => {
    //états 
    const { username } = useParams();
    let navigate = useNavigate();

    //comportements
    // step 1
    // prenom = localStorage.getItem("prenom");

    const handleClick = () => {
        navigate("/");
        localStorage.clear();
    }

    //vue
    return (
        <div>
            <h2>Bonjour {username}</h2>
            <button type="submit" onClick={handleClick}>Déconnexion</button>
        </div>
    )
}

export default OrderPage