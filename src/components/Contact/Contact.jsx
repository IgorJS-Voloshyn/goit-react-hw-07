import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = (contact) => {
  const dispatch = useDispatch();
  return (
    <li id={contact.id} className={css.list_item}>
      {contact.name}: <span>{contact.number}</span>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
        className={css.btn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
