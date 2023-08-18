import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Header/Navbar';
import Main from '../reusable-ui/Main';

const OrderPage = () => {
    //états 
    const { username } = useParams();

    //comportements
    // step 1
    // prenom = localStorage.getItem("prenom");

    

    //vue
    return (
        <div className='Container' style={{ minHeight:"88vh", background:"orange", padding:"50px"}}>
            <Navbar  username={username} />
            <Main/>
        </div>
    )
}

export default OrderPage