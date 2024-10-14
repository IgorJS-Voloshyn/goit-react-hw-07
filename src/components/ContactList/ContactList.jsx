import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/selctors";
import Contact from "../Contact/Contact";

export function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}
