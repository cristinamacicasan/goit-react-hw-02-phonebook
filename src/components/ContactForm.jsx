

import React, { useState } from 'react';
import styles from './ContactForm.module.css'

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddContact(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer} >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
