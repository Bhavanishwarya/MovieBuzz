import { useState, useEffect } from "react";
import tmbd from "../api/tmbd";
import axios from "axios";
import "../ui/Searchbar.css";

function SearchBar({ handleMovies }) {
  const [term, setTerm] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fetchMovies = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: "bcc4ff10c2939665232d75d8bf0ec093",
          query: term,
        },
      }
    );
    handleMovies(fetchMovies.data.results);
  };
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmbd.get("movie/popular");
      handleMovies(data.results);
    };
    fetchMovies();
  }, []);
  return (
    <div className="body">
      <div className="content">
        <h1 className="content-heading">Want to Search Movies Info?</h1>
        <p>
        Welcome to MovieBuzz – your go-to source for the latest movie reviews, ratings, and recommendations.
We’re passionate about showcasing everything from blockbuster hits to indie gems.
At MovieBuzz, we believe movies are more than entertainment – they’re powerful, inspiring experiences.
        </p>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            value={term}
            className="search-bar-input"
          />
          <button className="search-bar-button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
