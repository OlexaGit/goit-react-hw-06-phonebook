import { deleteContact } from 'redux/contactSlice';
import css from './Contacts.module.css';
// import { increment, contacts, filter } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contactSlice';
import { filterSelectContacts } from 'redux/filterSlice';
import { useState } from 'react';

export const Contacts = () => {
  // const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filterSelectContacts);
  const handleDelete = id => dispatch(deleteContact(id));

  console.log(contacts.contacts);
  console.log(filter);
  return (
    <div className={css.form}>
      <ul>
        {contacts.contacts.map(({ id, name, number }) => (
          <li key={id} className={css.formList}>
            @ {name}: {number}
            <button
              className={css.formButton}
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
