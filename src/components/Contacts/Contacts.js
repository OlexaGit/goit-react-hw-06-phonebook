import css from './Contacts.module.css';
import { increment, contacts, filter } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';

const Contacts = ({ contacts, onDeleteContact }) => {
  const dispatch = useDispatch;
  const value = useSelector(state => state.myValue);
  return (
    <div className={css.form}>
      {value}
      <button onClick={() => dispatch(increment(1))}>increment</button>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.formList}>
            @ {name}: {number}
            <button
              className={css.formButton}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
