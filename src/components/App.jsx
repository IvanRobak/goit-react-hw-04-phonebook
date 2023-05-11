import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, PhoneBook, Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setfilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitForm = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsList = [...contacts];

    if (contactsList.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts.`);
    }
    return setContacts(prevState => [...prevState, { id, name, number }]);
  };

  const handeDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleFilterName = e => {
    const { value } = e.target;
    setfilter(value);
  };

  const filterContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
        color: '#010101',
      }}
    >
      <Container>
        <PhoneBook>Phonebook</PhoneBook>
        <ContactForm contactList={contacts} onSubmit={submitForm} />
        <Title>Contacts</Title>
        <Filter handleFilterName={handleFilterName} />
        <ContactList
          contactList={filterContacts()}
          onDelete={handeDeleteContact}
        />
      </Container>
    </div>
  );
};
