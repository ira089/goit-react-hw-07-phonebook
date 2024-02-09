import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactClice';
import styles from '../ContactList/ContactList.module.css';

const ContactItems = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact({ id }));
  };

  return (
    <li key={id} id={id}>
      {name}: {number}{' '}
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
