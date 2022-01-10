import React, { useState, useEffect } from "react";
import axios from "../Api/axios";
import "../Assets/Css/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); //tp just get the video id that is embedded in the video id at teh last
          //URLSearchParams helps us to get the url
          setTrailerUrl(urlParams.get("v"));
          //  v or any variable is a one to which videoId is assigned and we are going to catch that value
        })
        .catch((error) => console.log(error));
    }
  };

  //    console.log(movies);
  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row_posters">
        {movies.map((currElem) => {
          return (
            <img
              key={currElem.id}
              onClick={() => handleClick(currElem)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? currElem.poster_path : currElem.backdrop_path
              }`}
              alt={currElem.name}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
