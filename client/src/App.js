import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './views/Main';
import Update from './views/Update';
import AuthorForm from './components/AuthorForm';


function App() {
  return (
    <div className="App">
      <Link to="/new">
        <p>add author</p>
      </Link>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Update />} path="/edit/:id"/>
        <Route element={<AuthorForm />} path="/new" />
      </Routes>
    </div>
  );
}

export default App;
