import axios from "axios";

const apiKey = "2c917f8f6e874757be3cfdf4fff9a82d";
const country = "in";
const baseUrl = "https://newsapi.org/v2/top-headlines";

const fetchIndianNews = async () => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        country: country,
        apiKey: apiKey,
      },
    });
    const articles = response.data.articles;
    console.log(articles);
  } catch (error) {
    console.error("Error fetching Indian news:", error);
  }
};

export { fetchIndianNews };
