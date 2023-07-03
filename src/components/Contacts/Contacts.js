import { deleteContact } from 'redux/contactSlice';
import css from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contactSlice';
import { filterSelectContacts } from 'redux/filterSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(filterSelectContacts);
  const handleDelete = id => dispatch(deleteContact(id));
  let arrayContacts = [];
  if (filter === '') {
    arrayContacts = contacts;
  } else {
    const normalizedFilter = filter.toLocaleLowerCase();
    arrayContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
  console.log(arrayContacts);
  console.log(filter);
  return (
    <div className={css.form}>
      <ul>
        {arrayContacts.map(({ id, name, number }) => (
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
