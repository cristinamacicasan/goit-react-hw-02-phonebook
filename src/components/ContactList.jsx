

import React from 'react';
import styles from './ContactList.module.css'

const ContactList = ({ contacts }) => {
    return (
    <div className={styles.container}> 
      <ul>
        {contacts.map((contact) => (
        <li className={styles.contact} key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div> 
  );
};

export default ContactList;
