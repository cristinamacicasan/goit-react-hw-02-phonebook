// App.jsx

import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (name) => {
    setContacts([...contacts, { id: contacts.length + 1, name }]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
