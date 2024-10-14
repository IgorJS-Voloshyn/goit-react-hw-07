import { selectNameFilter } from "./filtersSlice";
import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
