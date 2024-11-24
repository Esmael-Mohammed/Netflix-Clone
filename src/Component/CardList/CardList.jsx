import React from "react";
import TitleCards from "../TitleCards/TitleCards";
import requests from "../../Utility/requests";

const CardList = () => {
  return (
    <>
      <div className="more-cards">
        <TitleCards title="Trending Now" fetchUrl={requests.fetchTrending} />
        <TitleCards title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <TitleCards title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <TitleCards title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <TitleCards title=" Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
    </>
  );
};

export default CardList;
