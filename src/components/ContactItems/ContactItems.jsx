import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from '../../redux/operations';
import styles from '../ContactList/ContactList.module.css';

const ContactItems = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    const numberId = Number(id);
    dispatch(deleteContactsThunk(numberId));
  };

  return (
    <li key={id} id={id}>
      {name}: {phone}{' '}
      <button
        className={styles.btnDel}
        onClick={() => onDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItems;
