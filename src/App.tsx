import { useEffect } from "react";
import "./App.css";
import NewsFeed from "./containers/NewsFeed/NewsFeed";
import ArticleInfo from "./containers/ArticleInfo/ArticleInfo";
import Layout from "./components/Layout/Layout";
import { saveArticles } from "./redux/newsfeedSlice";
import { fetchCountryNews } from "@/api/api";
import { Article } from "@/inerface";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecentFeed from "./components/RecentFeed/RecentFeed";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    updateArticales();
  }, []);

  const updateArticales = async () => {
    let newArticles: Article[] = await fetchCountryNews();
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
