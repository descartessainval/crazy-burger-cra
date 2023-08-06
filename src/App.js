import React from 'react';
import LoginPage from './components/LoginPage'
import './App.css'

const App = () => {
  return (
    <div className='App'> 
     <LoginPage/>
    </div>
  )
}

export default App


// exo2
// import React, { useState } from 'react'

// const App = () => {
// //state (Etat, données)
// //----------------------
// const [prenom, setPrenom] = useState("Arthur");
// const[count, SetCount] = useState(1);

// //Comportemens(s)
// //-----------------

// const handleClick =()=>{
//   // alert("handleClick");
//   SetCount(count + 1);
// }

// //Affichage (render)
// //---------------------
//   return (
//   <div>
//       <h1>Bonjour {prenom}</h1>
//       <button onClick={handleClick}>Incrémenter</button>
//   </div>
//   )
// }

// export default App


//Exo 1
//import React, { useState} from 'react'

// const App = () => {


//     const [form, setForm] = useState({
//       prenom: ""
//     });


//   const handleSubmit =(e) =>{
   
//     // Prevent the browser from reloading the page
//     //  e.preventDefault(); 
//      alert(`Bonjour ${form.prenom}!`);

//   }
//   return (
//     <div className="App">
//     <h1>Bienvenue chez nous!</h1>

//     <h2>Connectez-vous</h2>
//     <form action="submit" onSubmit={handleSubmit}>
//         <input type="text" placeholder='Entrez votre prénom'  
//         onChange={e => {
//             setForm({
//               prenom:  e.target.value 
//             });
//           }} 
//           required
//         />
//         <button>Accédez à votre espace</button>
//     </form>
//     </div>
//   )
// }

// // eslint-disable-next-line
// export default App