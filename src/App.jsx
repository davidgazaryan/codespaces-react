import { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
  { id: 1, name: "Alice Smith", email: "alice@example.com" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  { id: 4, name: "Diana Lee", email: "diana@example.com" },
  { id: 5, name: "Ethan Garcia", email: "ethan@example.com" },
  { id: 6, name: "Fiona Davis", email: "fiona@example.com" },
]
);

  const [newContact, setNewContact] = useState({id:null,name:'',email:''});
  const [searchQuery, setSearchQuery] = useState('');

  const deleteContact = (index) => {
    setContacts(prev => (prev.filter(contact => contact.id != index)));
  }

  return (
    <div className="App">
      <label>
        Contact Name:
        <input onChange={(e) => setNewContact(prev => ({...prev, name: e.target.value}))} type='text' />
      </label>
      <label>
        Contact Email:
        <input onChange={(e) => setNewContact(prev => ({...prev,email:e.target.value}))} type='email' />
      </label>
      <button onClick={()=> {}}> Add Contact</button>
      <label>
        Filter Contact:
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
      </label>
      {/* contacts.filter in front of map */}
      {contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase())).map((value,_) => {
        return (
          <ul>
            <li key={value.id}>
              <label >name: {value.name}</label>
              <label> email: {value.email}</label>
              <button onClick={() => deleteContact(value.id)} style={{marginLeft:"2rem"}}>delete</button>
            </li>
          </ul>
        )})
}
    </div>
  );

}



export default App;
