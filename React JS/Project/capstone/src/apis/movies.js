import Swal from "sweetalert2";
import axios from "axios";

export const getMovies = async (genre) => {
  try {
    const api_key = import.meta.env.VITE_MOVIES_API_KEY;
    const request_url = `http://www.omdbapi.com/?s=${genre}&apikey=${api_key}`;
    const response = await axios.get(request_url);
    if (
      response.data.Response === "True" &&
      Number(response.data.totalResults) > 0
    ) {
      return response.data.Search;
    }

    throw new Error("Unable to load movies!");
  } catch (e) {
    console.error("Error fetching movies:", e);
    Swal.fire({
      title: "Something went wrong!",
      text: "Please try again after some time.",
      icon: "error",
    });
    return null;
  }
};
