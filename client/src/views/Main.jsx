import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Main = (props) => {
  // const { id } = useParams;
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/')
      .then(res => {
        setAuthors(res.data)
        setLoaded(true);
      })
      .catch(err => console.log(err))
  }, [])

  // set a function that takes the product id as an argument and returns all products that do not match the id of the product 'deleted'
  const removeFromDom = authorId => {
    setAuthors(authors.filter(author => author._id !== authorId))
  }

  return (
    <div>
      <hr />
      {/* send in the removefromdom func to productList */}
        {loaded && <AuthorList setAuthors={setAuthors} authors={authors} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main