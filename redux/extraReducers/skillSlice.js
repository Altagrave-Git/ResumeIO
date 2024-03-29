import { createSlice } from "@reduxjs/toolkit";

export const skillObj = {
  Name: "",
  Proficiency: ""
};

export const skillSlice = createSlice({
  name: "skills",
  initialState: {
    active: false,
    useProficiency: true,
    data: []
  },
  reducers: {
    addSkill: (state, action) => {
      state.data.push(action.payload.data);
    },
    removeSkill: (state, action) => {
      const index = action.payload.index;
      state.data.splice(index, 1);
    },
    setSkill: (state, action) => {
      const index = action.payload.index;
      state.data[index] = action.payload.data;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setUseProficiency: (state, action) => {
      state.useProficiency = action.payload;
    }
  }
});

export const { addSkill, removeSkill, setSkill, setActive, setUseProficiency } = skillSlice.actions;

export default skillSlice.reducer;