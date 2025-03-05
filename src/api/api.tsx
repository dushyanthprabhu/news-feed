import { PersonalizeForm } from "@/inerface";
import axios from "axios";

const apiKey = "2c917f8f6e874757be3cfdf4fff9a82d";
const country = "us";
const baseUrl = "https://newsapi.org/v2/";
//Endpoints
const topHeadlines = "top-headlines";
const everything = "everything";

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c917f8f6e874757be3cfdf4fff9a82d
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=2c917f8f6e874757be3cfdf4fff9a82d

const fetchCountryNews = async () => {
  try {
    const response = await axios.get(baseUrl + topHeadlines, {
      params: {
        category: "business",
        country: country,
        apiKey: apiKey,
      },
    });
    const articles = response.data.articles;
    return articles;
  } catch (error) {
    console.error("Error fetching Indian news:", error);
  }
};

const searchArticles = async (keyword: string | '') => {
  try {
    const response = await axios.get(baseUrl + everything, {
      params: {
        q: keyword,
        apiKey: apiKey,
      },
    });
    const articles = response.data.articles;
    return articles;
  } catch (error) {
    console.error("Error fetching Indian news:", error);
  }



};

const getPersonalizedArticles = async (personalizeInfo: PersonalizeForm) => {
  try {
    const response = await axios.get(baseUrl + everything, {
      params: {
        sources: personalizeInfo.source,
        category: personalizeInfo.category,
        apiKey: apiKey,
      },
    });
    const articles = response.data.articles;
    return articles;
  } catch (error) {
    console.error("Error fetching Indian news:", error);
  }
};

export { fetchCountryNews, searchArticles };
