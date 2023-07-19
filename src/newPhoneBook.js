// src/newPhoneBook.js
import React, { useState } from 'react';
import './newPhoneBook.css';
import { useNavigate } from 'react-router-dom';

const NewPhoneBook = () => {
  const [phoneBookname, setPhoneBookName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setPhoneBookName(event.target.value);
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSave = () => {
    // Add code to handle save button click
  };

  return (
    <div>
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