import React from 'react'
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {
    let navigate = useNavigate();
    const handleClick =()=>{
        navigate("/");
        localStorage.clear();
    }
    return (
        <div>
            <h1>ErrorPage</h1>
            <button onClick={handleClick}>Retour page d'accueil</button></div>
    )
}

export default ErrorPage