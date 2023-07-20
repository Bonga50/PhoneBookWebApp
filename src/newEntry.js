import React, { useState,useEffect } from 'react';
import './newEntry.css';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from './PhoneBookService.js';
import './resultMessage.css';

const apiService = new ApiService('http://localhost:3000');
const NewEntry = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPhoneBook, setSelectedPhoneBook] = useState(null);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    async function fetchData() {
      const phoneBooks = await apiService.getPhoneBooks();
      if (phoneBooks.length > 0) {
        setSelectedPhoneBook(phoneBooks[0].name);
      }
    }
    fetchData();
  }, []);
  
  const handleSave = async () => {
    if (!name || !phone || !apiService.isValidPhoneNumber(phone) || await apiService.phoneNumberExists(phone)) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    apiService.addContact(selectedPhoneBook, name, phone).then((phoneBook) => {
      console.log(phoneBook);
      setName('');
      setPhone('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    });
  };
  

  return (
    <div>

      {success && 
      <div className='successMessage'>
      <p>Entry created successfully!</p>
      </div>}
      {error && 
      <div className='errorMessage'>
      <p>Entry creation failed</p>
      </div>}
      <div>
        <h1 className="Text">Add New Entry</h1>
      </div>

      <div className="Contents">
      <Dropdown onSelectedOptionChange={setSelectedPhoneBook} />
       
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