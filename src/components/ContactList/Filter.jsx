import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import styles from './ContactList.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFitler = ({ target }) => {
    dispatch(addFilter(target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={styles.filter}
        onChange={changeFitler}
        name="filter"
        placeholder="Search"
      />
    </>
  );
};

export default Filter;
