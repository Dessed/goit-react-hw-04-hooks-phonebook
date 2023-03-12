import { useState } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import  useLocalStorage  from '../hooks/useLocalStorage';
import { H1, H2, DIV} from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage ( 'PhoneBook', [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');

  const handleFormOnSubmit = data => {
    const { name } = data;
    
    const alertReplayNameUser = contacts.some((el) => (el.name === name));
    
    alertReplayNameUser === true ? alert (`${name} is already in contacts.`) : 
    setContacts(() =>([...contacts, data]));
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    removeContactStorage(contactId);
};

  const removeContactStorage = contactId => {
    return (
      localStorage.setItem('PhoneBook',JSON.stringify(JSON.parse(localStorage.getItem('PhoneBook'))
      .filter((item) => item.id !== contactId)))
    );
};

  return (
    <DIV>
      <H1>Phonebook</H1>
      <ContactForm onFormSubmit={handleFormOnSubmit}/>
      <H2>Contacts</H2>
      <Filter filter={filter} onChange={handleFilterChange}/>
      <ul>
      <ContactList contacts={contacts} filter={filter} onDelete={deleteContact}/>
      </ul>
    </DIV>         
      )
};


