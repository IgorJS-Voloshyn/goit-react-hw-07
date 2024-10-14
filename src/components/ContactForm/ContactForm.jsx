import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (value, { resetForm }) => {
    const contact = { name: value.name, number: value.number };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field
          id="nameFieldId"
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={numberFieldId} className={css.label}>
          Number
        </label>
        <Field
          id="numberFieldId"
          type="tel"
          name="number"
          placeholder="Number phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
