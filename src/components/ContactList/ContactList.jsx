import PropTypes from 'prop-types';
import { List, Item, Text, DeleteBtn } from './ContactList.styled';

const ContactList = ({ contactList, onDelete }) => {
  return (
    <List>
      {contactList.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>{`${name}: ${number}`}</Text>
          <DeleteBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
