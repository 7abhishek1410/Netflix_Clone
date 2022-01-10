import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./Api/requests";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX Originals "
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
