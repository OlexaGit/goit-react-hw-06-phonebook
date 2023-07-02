import { deleteContact } from 'redux/contactSlice';
import css from './Contacts.module.css';
// import { increment, contacts, filter } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contactSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleDelete = id => dispatch(deleteContact(id));
  return (
    <div className={css.form}>
      <ul>
        {contacts.map(({ id, name, number }) => (
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
