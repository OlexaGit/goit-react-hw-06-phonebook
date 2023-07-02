import css from './Contacts.module.css';
// import { increment, contacts, filter } from 'redux/store';
// import { useSelector, useDispatch } from 'react-redux';

export const Contacts = () => {
  // const dispatch = useDispatch;
  // const value = useSelector(state => state.myValue);

  const contacts = [];
  return (
    <div className={css.form}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.formList}>
            @ {name}: {number}
            {/* <button
              className={css.formButton}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
