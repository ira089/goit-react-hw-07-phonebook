import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactItems from '../ContactItems/ContactItems';

const ContactList = () => {
  const contactsState = useSelector(getContacts);
  console.log(contactsState);

  const filterState = useSelector(getFilter);
  console.log(filterState);

  const getFilteredContacts = () => {
    if (!filterState) {
      return contactsState;
    }
    const normalizedFilter = filterState.toLowerCase();
    return contactsState.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const items = getFilteredContacts();
  console.log(items);

  const elements = items.map(item => (
    <ContactItems
      key={item.id}
      id={item.id}
      number={item.number}
      name={item.name}
    />
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default ContactList;
