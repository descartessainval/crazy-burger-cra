import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'

const LoginForm = () => {
  
  const [prenom, setPrenom] = useState("");

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // alert(`Bonjour ${prenom}!`);
    let path = `/order`
    if (prenom) {
       navigate(path);
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