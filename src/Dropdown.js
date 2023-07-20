// src/Dropdown.js
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import PhoneBookService from './PhoneBookService';

const phoneBookService = new PhoneBookService('http://localhost:3000');

const DropdownComponent = ({ onSelectedOptionChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    phoneBookService.getPhoneBooks().then(phoneBooks => {
      // Extract the names of the phone books and put them in an array
      const phoneBookNames = phoneBooks.map(phoneBook => phoneBook.name);
      setOptions(phoneBookNames);
      setSelectedOption(phoneBookNames[0]);
    });
  }, []);

  const handleDropdownChange = (option) => {
    setSelectedOption(option.value);
    onSelectedOptionChange(option.value);
  };

  return (
    <div className="dropdown">
      <Dropdown
        options={options}
        onChange={handleDropdownChange}
        value={selectedOption}
        placeholder="Select an option"
      />
    </div>
  );
};

export default DropdownComponent;



// // src/Dropdown.js
// import React, { useState } from 'react';
// import { BsChevronDown } from 'react-icons/bs';
// import './Dropdown.css';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

// const options = [
//   'one', 'two', 'three'
// ];
// const defaultOption = options[0];
// <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
// // const comboBox = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleDropdown = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="comboBox">
// //       <button className="dropdown-button" onClick={toggleDropdown}>
// //         Phone Book <BsChevronDown />
// //       </button>
// //       {isOpen && (
// //         <ul className="dropdown-ul">
// //           <li className="dropdown-li">General</li>
// //           <li className="dropdown-li">Option 2</li>
// //           <li className="dropdown-li">Option 3</li>
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// export default Dropdown;
