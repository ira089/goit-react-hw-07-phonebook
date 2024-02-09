import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getContacts, getFilter, getItem } from '../../redux/selectors';
import { getContactsThunk } from '../../redux/operations';

import styles from './ContactList.module.css';
import ContactItems from '../ContactItems/ContactItems';

const ContactList = () => {
  const { isLoading, error } = useSelector(getContacts);
  const contacts = useSelector(getItem);
  console.log(contacts);
  // console.log(items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterState = useSelector(getFilter);
  console.log(filterState);

  const getFilteredContacts = () => {
    if (!filterState) {
      return contacts;
    }
    const normalizedFilter = filterState.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const itemsVisible = getFilteredContacts();
  console.log(itemsVisible);

  const elements = itemsVisible.map(item => (
    <ContactItems
      key={item.id}
      id={item.id}
      number={item.number}
      name={item.name}
    />
  ));

  const isItemsVisible = Boolean(itemsVisible.length);

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isItemsVisible && <ul className={styles.list}>{elements}</ul>}
    </>
  );
};

export default ContactList;
