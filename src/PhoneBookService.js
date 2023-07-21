import axios from 'axios';


class PhoneBookService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  //method to create a new phone book
  async createPhoneBook(name) {
    try {
      const response = await axios.post(`${this.baseUrl}/phoneBooks`, { name });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //method that gets all phoneBooks
  async getPhoneBooks() {
    try {
      const response = await axios.get(`${this.baseUrl}/phoneBooks`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //method that checks if the phone book has been created
  async phoneBookExists(name) {
    try {
      const phoneBooks = await this.getPhoneBooks();
      return phoneBooks.find(phoneBook => phoneBook.name === name) !== undefined;
    } catch (error) {
      console.log(error);
    }
  }

  //method to get specific entries based on the phone book name
  async getContacts(phoneBookName) {
    try {
      const response = await axios.get(`${this.baseUrl}/Contacts?phoneBookname=${phoneBookName}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  
 //method to get get all entries 
 getAllContacts() {
  try {
    const response =  axios.get(`${this.baseUrl}/Contacts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
  //method to creat a new entry for a specific phone book
  async addContact(phoneBookName, userName, phoneNumber) {
    try {
      const response = await axios.post(`${this.baseUrl}/Contacts`, { phoneBookname: phoneBookName, userName: userName, PhoneNumber: phoneNumber });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //method to check if a phone number already exists
  async phoneNumberExists(phoneNumber) {
    try {
      const response = await axios.get(`${this.baseUrl}/Contacts`);
      return response.data.some(contact => contact.PhoneNumber === phoneNumber);
    } catch (error) {
      console.log(error);
    }
  }

  //method to check the format of a phone number
  isValidPhoneNumber(phoneNumber) {
    const phoneNumberPattern = /^(?!.*[^-\d])\d{3}-\d{3}-\d{4}$/;
    return phoneNumberPattern.test(phoneNumber);
  }
  //method to filter the contacts by name using chars 
  async filterByName(data,filterValue) {
    try {    
        return data.filter(item => item.userName.toLowerCase().includes(filterValue.toLowerCase()));
        } catch (error) {
          console.log(error);
        } 
  }
  

  
}


export default PhoneBookService;