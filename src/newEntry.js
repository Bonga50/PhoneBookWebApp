import React, { useState } from 'react';
import './newEntry.css';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewEntry = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
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
        <h1 className="Text">Add New Entry</h1>
      </div>

      <div className="Contents">
        <Dropdown />
       
      </div>
      <div className="textBoxes">
        <input
        className='textBoxes'
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        </div>
      <div className="textBoxes">
        <input
        className='textBoxes'
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={handlePhoneChange}
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

export default NewEntry;