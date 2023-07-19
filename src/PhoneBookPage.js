// src/PhoneBookPage.js
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './PhoneBookPage.css';


const PhoneBookPage = () => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  // Example data for the table
  const data = [
    { name: 'John', phone: '123-456-7890' },
    { name: 'Jane', phone: '234-567-8901' },
    { name: 'Bob', phone: '345-678-9012' },
  ];

  return (
    <div className="Dropdown">
      <Dropdown />
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
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default PhoneBookPage;

