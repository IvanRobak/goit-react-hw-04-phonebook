import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, InputName, InputNumber, InputBtn } from './Form.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    onSubmit({ name, number });
    setName('');
    setNumber('');
    e.preventDefault();
  };

  return (
    <Form title="Phonebook" onSubmit={handleSubmit}>
      <InputName
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInput}
      />
      <InputNumber
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInput}
      />

      <InputBtn type="submit">Add contact</InputBtn>
    </Form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
