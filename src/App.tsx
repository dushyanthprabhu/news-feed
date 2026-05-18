import { useEffect } from "react";
import "./App.css";
import NewsFeed from "./containers/NewsFeed/NewsFeed";
import ArticleInfo from "./containers/ArticleInfo/ArticleInfo";
import Layout from "./components/Layout/Layout";
import { saveArticles } from "./redux/newsfeedSlice";
import { fetchCountryNews, getPersonalizedArticles } from "@/api/api";
import { Article, PersonalizeForm } from "@/inerface";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const personalizeFeeds = useSelector(
    (state: RootState) => state.newsfeed.personalizeFeeds
  );
  useEffect(() => {
    updateArticales();
  }, [personalizeFeeds]);

  const updateArticales = async () => {
    let newArticles: Article[] = [];
    if (personalizeFeeds.length > 0) {
      await personalizeFeeds.map(async (item: PersonalizeForm) => {
        let personalizeArticles: Article[] = await getPersonalizedArticles(
          item
        );
        newArticles = [...newArticles, ...personalizeArticles];
        return;
      });
    } else {
      newArticles = await fetchCountryNews();
    }
    dispatch(saveArticles(newArticles));
  };

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<NewsFeed />} />
            <Route path="/view" element={<ArticleInfo />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
