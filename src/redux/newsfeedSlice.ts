import { Article, PersonalizeForm } from "@/inerface";
import { createSlice } from "@reduxjs/toolkit";

interface newsfeedState {
  articles: Article[];
  article: Article;
  recentlyViewed: Article[];
  personalizeFeeds: PersonalizeForm[];
}

const initialState: newsfeedState = {
  articles: [],
  article: {
    author: "",
    title: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: "",
  },
  recentlyViewed: [],
  personalizeFeeds: [],
};

const newsfeedSlice = createSlice({
  name: "newsfeed",
  initialState,
  reducers: {
    saveArticles: (state, action) => {
      console.log(action);
      return {
        ...state,
        articles: action.payload,
      };
    },
    updateSelectedArticle: (state, action) => {
      return {
        ...state,
        article: action.payload,
      };
    },
    updatePersonalizeList: (state, action) => {
      return {
        ...state,
        personalizeFeeds: [...state.personalizeFeeds, action.payload],
      };
    },
    removeFromPersonalizeList: (state, action) => {
      return {
        ...state,
        personalizeFeeds: action.payload,
      };
    },
    updateRecentList: (state, action) => {
      let newArticle: Article = action.payload;
      if (
        state.recentlyViewed.find(
          (article) => article.title === newArticle.title
        )
      ) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          recentlyViewed: [...state.recentlyViewed, action.payload],
        };
      }
    },
  },
});

export const {
  saveArticles,
  updateSelectedArticle,
  updatePersonalizeList,
  updateRecentList,
  removeFromPersonalizeList,
} = newsfeedSlice.actions;

export default newsfeedSlice.reducer;
