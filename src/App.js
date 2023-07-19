import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';
import PhoneBookPage from './PhoneBookPage';
import NewEntry from './NewEntry';
import NewPhoneBook from './NewPhoneBook';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PhoneBookPage />} />
          <Route path="/NewEntry" element={<NewEntry />} />
          <Route path="/NewPhoneBook" element={<NewPhoneBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }