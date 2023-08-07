import React from 'react'
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {
    let navigate = useNavigate();
    let path = "/"
    const handleClick =()=>{
        navigate(path);
    }
    return (
        <div>
            <h1>ErrorPage</h1>
            <button onClick={handleClick}>Retour page d'accueil</button></div>
    )
}

export default ErrorPage