import { useState } from 'react'
import './App.css'
import ContactList from './components/components-list'
import ContactRow from './components/ContactRow'


function App() {
  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];
  
  const [count, setContacts] = useState(0)
  const [selectedContactId, setSelectedContactId] = useState(null);
 

console.table("contacts")
  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
    )}
  </>

  )
}


export default App 
