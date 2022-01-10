import React, { useState, useEffect } from "react";
import axios from "../Api/axios";
import requests from "../Api/requests";
import "../Assets/Css/Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  // console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    // this is to limit the description
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* ? im movie.backdrop_path is for voiding any kind of crashing if movie is not defined */}
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
          {/* because of the inconsistent naming convention in this API */}
        </h1>
        <p className="banner_description">{truncate(movie?.overview, 150)}</p>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
