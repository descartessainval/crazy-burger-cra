import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./FormStyle.css"


const LoginForm = () => {

  const [prenom, setPrenom] = useState("");

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (prenom) {
      navigate(`/order/${prenom}`);
      localStorage.setItem("prenom", prenom);
    }
  };

  const handleChange = (e) => {
    setPrenom(e.target.value);
  }

  return (
    <div className='FormStyle'>
      <form action="submit" >
        <h2>BIENVENUE CHEZ NOUS !</h2>
        <hr />
        <h3>CONNECTEZ-VOUS</h3>
        <div className='disp-col'>
          <input
            type="text"
            name="" id=""
            placeholder='Entrez votre prénom'
            onChange={handleChange}
            required />
          <button onClick={handleSubmit}>Accéder à votre espace</button>
        </div>
      </form>
    </div>

  )
}

export default LoginForm