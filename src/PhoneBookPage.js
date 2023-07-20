// src/PhoneBookPage.js
import React, { useState,useEffect } from 'react';
import Dropdown from './Dropdown';
import './PhoneBookPage.css';
import ApiService from './PhoneBookService.js';

const apiService = new ApiService('http://localhost:3000');

const PhoneBookPage = () => {
  const [filterText, setFilterText] = useState('');
  const [contacts, setContacts] = useState([]);
  const [selectedPhoneBook, setSelectedPhoneBook] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const phoneBooks = await apiService.getPhoneBooks();
      if (phoneBooks.length > 0) {
        setSelectedPhoneBook(phoneBooks[0].name);
      }
    }
    fetchData();
  }, []);
  

  useEffect(() => {
    async function fetchData() {
      const data = await apiService.getContacts(selectedPhoneBook);
      setContacts(data);
    }
    fetchData();
  }, [selectedPhoneBook]);
  

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };



  return (
    <div className="Dropdown">
      
      <Dropdown onSelectedOptionChange={setSelectedPhoneBook}/>
      <div className="FilterInput">
      <input
      className='FilterInput'
        type="text"
        placeholder="Filter"
        value={filterText}
        onChange={handleFilterChange}
      />
      </div>
      <div className="ListBox">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item) => (
            <tr key={item.name}>
              <td>{item.userName}</td>
              <td>{item.PhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default PhoneBookPage;

