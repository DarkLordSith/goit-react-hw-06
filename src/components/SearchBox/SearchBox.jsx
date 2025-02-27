import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.searchLabel}>
      Find contacts by name:
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={styles.input}
      />
    </label>
  );
};

export default SearchBox;
