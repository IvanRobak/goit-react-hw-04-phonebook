import { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, PhoneBook, Title } from './App.styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsLocalStorage = localStorage.getItem('contacts');
    const contacts = JSON.parse(contactsLocalStorage);
    console.log(contacts);
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  submitForm = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handeDeleteContact = deleteId => {
    this.setState(prevState => ({
      ...prevState,
      contacts: this.state.contacts.filter(({ id }) => id !== deleteId),
    }));
  };

  handleFilterName = e => {
    this.setState(prevState => ({
      ...prevState,
      filter: e.target.value,
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts } = this.state;
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
          <ContactForm contactList={contacts} onSubmit={this.submitForm} />
          <Title>Contacts</Title>
          <Filter handleFilterName={this.handleFilterName} />
          <ContactList
            contactList={this.filterContacts()}
            onDelete={this.handeDeleteContact}
          />
        </Container>
      </div>
    );
  }
}
