import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  value: any;
}

const initialState: InitialState = {
  value: [],
};

export const article = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setArticle } = article.actions;
export default article.reducer;
