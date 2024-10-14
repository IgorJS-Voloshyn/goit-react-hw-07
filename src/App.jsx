import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import css from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchAll } from "./redux/contactsOps";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  console.log(fetchAll());
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Constacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
