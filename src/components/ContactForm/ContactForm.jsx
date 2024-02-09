import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from '../../redux/contactClice';

import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import { getContacts } from '../../redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(getContacts);
  // console.log(items);
  const dispatch = useDispatch();

  const handleChangeName = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const handleChangeNumber = ({ target }) => {
    const { value } = target;
    setNumber(value);
  };

  const isDublicate = evt => {
    // console.log(evt);
    const normalizedName = evt.toLowerCase();
    const dublicate = items.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );
    return dublicate;
  };

  const addTask = e => {
    e.preventDefault();
    if (isDublicate(name)) {
      console.log(name);
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const contactNameId = useMemo(() => nanoid(), []);
  const contactNumberId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={addTask} className={styles.formWrap}>
      <label htmlFor={contactNameId} className={styles.formItem}>
        Name
        <input
          onChange={handleChangeName}
          value={name}
          name="name"
          required
          id={contactNameId}
          placeholder="Name"
          type="text"
        ></input>
      </label>

      <label htmlFor={contactNumberId} className={styles.formItem}>
        Number
        <input
          onChange={handleChangeNumber}
          value={number}
          name="number"
          id={contactNumberId}
          placeholder="Number"
          required
        ></input>
      </label>

      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
