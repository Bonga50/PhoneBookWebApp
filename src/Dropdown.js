// src/Dropdown.js
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['one', 'two', 'three','qhuahfbjnewjnadkjnwkdjn'];
const defaultOption = options[0];

const DropdownComponent = () => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
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
