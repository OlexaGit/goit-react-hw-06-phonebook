import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import Form from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';
// import { increment, contacts, filter } from 'redux/store';
// import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  // const dispatch = useDispatch;
  // const value = useSelector(state => state.myValue);
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // const [firstRender, setFistRender] = useState(true);

  // const handleNameMatch = (name, number) => {
  //   const normalizedFind = name.toLocaleLowerCase();
  //   return contacts.find(
  //     contact => contact.name.toLocaleLowerCase() === normalizedFind
  //   )
  //     ? Notiflix.Notify.warning(`${name} is already in contacts!`)
  //     : formSubmitHandler(name, number);
  // };

  // const formSubmitHandler = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   setContacts(prevState => [contact, ...prevState]);
  // };

  // const changeFilter = event => {
  //   const { value } = event.currentTarget;
  //   setFilter(value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  return (
    <div>
      <header>
        <h1>Phonebook</h1>
      </header>
      <section>
        <Form />
      </section>
      <section>
        <h2>Contacts</h2>
        {/* <Filter valueFilter={filter} onChange={changeFilter} /> */}
        {/* <Contacts
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        /> */}
        <Contacts />
      </section>
    </div>
  );
};
App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
