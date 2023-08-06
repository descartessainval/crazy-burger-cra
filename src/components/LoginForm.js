import React , {useState}from 'react'
import './FormStyle.css'

function LoginForm() {


  const [form, setForm] = useState({
    prenom: ""
  });


  const handleSubmit = (e) => {

    // Prevent the browser from reloading the page
    //  e.preventDefault(); 
    alert(`Bonjour ${form.prenom}!`);


  };

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
          onChange={e => {
            setForm({
              prenom: e.target.value
            });
          } }
          required />
        <button>Accéder à votre espace</button>
      </div>
    </form>
  );
}

export default LoginForm