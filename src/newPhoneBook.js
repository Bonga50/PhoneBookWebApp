// src/newPhoneBook.js
import React, { useState } from 'react';
import './newPhoneBook.css';
import './resultMessage.css';
import { useNavigate } from 'react-router-dom';
import ApiService from './PhoneBookService.js';

const apiService = new ApiService('http://localhost:3000');

const NewPhoneBook = () => {
  const [phoneBookname, setPhoneBookName] = useState('');
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleNameChange = (event) => {
    setPhoneBookName(event.target.value);
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSave = async () => {
    if (await apiService.phoneBookExists(phoneBookname) || !phoneBookname) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else {
      apiService.createPhoneBook(phoneBookname).then(phoneBook => {
        console.log(phoneBook);
        setPhoneBookName('');
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      });
    }
  };

  return (
    <div>
      
      {success && 
      <div className='successMessage'>
      <p>Phone book created successfully!</p>
      </div>}
      {error && 
      <div className='errorMessage'>
      <p>Phone Book creation failed</p>
      </div>}

      <div>
        <h1 className="Text">Add New Phone Book</h1>
      </div>
      <div className="textBoxes">
        <input
        className="textBoxes"
          type="text"
          placeholder="Name"
          value={phoneBookname}
          onChange={handleNameChange}
        />
      </div>
      <div className="btnContents">
        <button className="btn btn-primary button" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-danger button" onClick={handleCancel}>
          Cancel
        </button>
        </div>
    </div>
  );
};

export default NewPhoneBook;