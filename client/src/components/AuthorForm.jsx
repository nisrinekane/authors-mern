import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    //keeps track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const navigate = useNavigate();

    //handler for when the form is submitted
    const onSubmitHandler = e => {
        //prevent the default behavior of the submit
        e.preventDefault();
        //make a POST request to create a new person
        axios.post('http://localhost:8000/api/new', {
            name
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            navigate('/');
    }
    //onChange to update name, price and description
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default Form
