import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

export function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  return (
    <div>
      <label className={css.label}>
        Find contacts by name:
        <input
          className={css.input}
          onChange={(e) => {
            dispatch(changeFilter(e.target.value));
          }}
          type="text"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
}
