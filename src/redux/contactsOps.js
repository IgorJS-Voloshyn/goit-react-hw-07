import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://670c24ee7e5a228ec1cfa6e9.mockapi.io";

// export const fetchAll = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkApi) => {
//     try {
//       const { data } = await axios.get("/contacts");
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
export const fetchAll = createAsyncThunk("contacts/fetchAll", async () => {
  const { data } = await axios.get("/contacts");
  return data;
});

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post("/contacts", body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
