import React, {useState} from 'react'

const LoginForm = () => {
    const [prenom, setPrenom] = useState("");


  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    alert(`Bonjour ${prenom}!`);
  };

  const handleChange = (e) => {
    setPrenom(e.target.value);
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
    <h2>BIENVENUE CHEZ NOUS!</h2>
    <hr />
    <h3>CONNECTEZ-VOUS!</h3>
    <div className='disp-col'>
      <input
        type="text"
        name="" id=""
        placeholder='Entrez votre prénom'
        onChange={handleChange}
        required />
      <button>Accéder à votre espace</button>
    </div>
  </form>
  )
}

export default LoginForm