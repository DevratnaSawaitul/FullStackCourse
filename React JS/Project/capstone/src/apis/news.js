import Swal from "sweetalert2";
import axios from "axios";

export const getNews = async () => {
  try {
    const api_key = import.meta.env.VITE_NEWS_API_KEY;
    const request_url = `https://newsapi.org/v2/everything?q=india&apiKey=${api_key}`;
    const response = await axios.get(request_url);

    if (response.data.status === "ok") {
      const articles = response.data.articles;
      const randomIndex = Math.floor(Math.random() * articles.length);
      return articles[randomIndex];
    }
    throw new Error("Unable to load news!");
  } catch (e) {
    console.error("Error fetching news:", e);
    // Swal.fire({
    //   title: "Something went wrong!",
    //   text: "Please try again after some time.",
    //   icon: "error",
    // });
    return null;
  }
};
