import { Article } from "@/inerface";
import { createSlice } from "@reduxjs/toolkit";

interface searchArticleState {
  searchArticles: Article[];
  searchKeyword: string;
  search: boolean;
}

const initialState: searchArticleState = {
  searchArticles: [],
  searchKeyword: "",
  search: false,
};

const searcharticlesSlice = createSlice({
  name: "searcharticles",
  initialState,
  reducers: {
    updateSearchList: (state, action) => {
      return {
        ...state,
        searchArticles: action.payload,
      };
    },
    setSearchKeyWord: (state, action) => {
      return {
        ...state,
        searchKeyword: action.payload,
      };
    },
    setSearch: (state) => {
      return {
        ...state,
        search: !state.search,
      };
    },
  },
});

export const { updateSearchList, setSearchKeyWord, setSearch } =
  searcharticlesSlice.actions;

export default searcharticlesSlice.reducer;
