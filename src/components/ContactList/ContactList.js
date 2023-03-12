import PropTypes from 'prop-types';
import { User, Button } from './ContactList.styled';

export const ContactList = ({contacts, filter, onDelete}) => {
    const normalizedFilter = filter.toLowerCase();

    return (
        contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
        .map(({ name, number, id }) => 
        (<User key={id}>
        {name}: {number}
        <Button type='Button' onClick={() => onDelete(id)}>Delete</Button>
        </User>))
    );
};


ContactList.propTypes = {
    filter: PropTypes.string.isRequired,
  };