import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
import ContactList from "./components/ContactList";

function App() {

  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));

  const addRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    setContactsList((prevContactsList) => [...prevContactsList, randomContact]);
    console.log(randomContact);
  }

  const sortByName = () => {
    setContactsList((prevContactsList) => [...prevContactsList].sort((a, b) => a.name.localeCompare(b.name)));
  }

  const sortByPopularity = () => {
    setContactsList((prevContactsList) => [...prevContactsList].sort((a, b) => b.popularity - a.popularity));
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <ContactList 
      contactsList={contactsList} 
      setContactsList={setContactsList} 
      addRandom={addRandom}
      sortByName={sortByName}
      sortByPopularity={sortByPopularity}/>
    </div>
  );
}

export default App;
