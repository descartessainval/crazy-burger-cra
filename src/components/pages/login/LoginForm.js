import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'

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
  )
}

export default LoginForm