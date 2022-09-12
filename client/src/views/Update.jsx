import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
    
const Update = (props) => {
  // to redirect after submitting
    const navigate = useNavigate();

    const { id } = useParams();
    const [name, setName] = useState('');
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/' + id)
    //         .then(res => {
    //             setName(res.data.name);
    //         })
    // }, [id]);
    
    const updateAuthor= e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/edit/${id}`, {name})
            .then(res => console.log(res))
            .catch(err => console.error(err));
            navigate('/');
    }
    
    return (
        <div>
            <h1>Update an Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

