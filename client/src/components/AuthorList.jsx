import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const AuthorList = ({ removeFromDom, authors, setAuthors }) => {
  // we get and deconstruct the function from Main which filters out deleted products
  // const [author, setAuthor] = useState('')
  useEffect(() => {
    axios.get('http://localhost:8000/api/')
      .then(res => setAuthors(res.data))
      .catch(err => console.log(err))
  }, []);
  
  // set a function that makes an api call and executed the func on the ID of the prodyct
  const deleteAuthor = authorId => {
    axios.delete('http://localhost:8000/api/' + authorId)
      .then(res => { removeFromDom(authorId) })
      .catch(err => console.log(err))
  }

  return (
    <div>
      {authors.map((author) => {
        return <p key={author._id}>
            {author.name}
          |
          <button onClick={(e) => { deleteAuthor(author._id) }}>
            Delete
          </button>
          |
          <Link to={"/edit/" + author._id}>
            <button>
              Edit
            </button>
          </Link>
        </p>
      })
      }

    </div>
  )
}
export default AuthorList;