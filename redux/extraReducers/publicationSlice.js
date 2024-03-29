import { createSlice } from "@reduxjs/toolkit";

export const publicationObj = {
  Title: "",
  Publisher: "",
  Date: "",
  URL: "",
  Description: ""
};

export const publicationSlice = createSlice({
  name: "publications",
  initialState: {
    active: false,
    data: []
  },
  reducers: {
    addPublication: (state, action) => {
      state.data.push(action.payload.data);
    },
    removePublication: (state, action) => {
      const index = action.payload.index;
      state.data.splice(index, 1);
    },
    setPublication: (state, action) => {
      state.data[action.payload.index] = action.payload.data;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    }
  }
});

export const { addPublication, removePublication, setPublication, setActive } = publicationSlice.actions;

export default publicationSlice.reducer;