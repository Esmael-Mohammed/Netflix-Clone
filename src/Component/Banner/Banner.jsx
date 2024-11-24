import React from "react";
import { useState,useEffect} from "react";
import play_icon from '../../assets/image/play_icon.png'
import info_icon from '../../assets/image/info_icon.png'
import TitleCards from "../TitleCards/TitleCards";
import './Banner.css'
import requests from "../../Utility/requests";
import axios from '../../Utility/axios';

const Banner = () => {
    const [movie,setMovie]=useState([])
    useEffect(() => {
      (async () => {
          try {
              const response = await axios.get(requests.fetchNetflixOriginals);
              console.log(response)
              if (response.data.results.length > 0) {
                  setMovie(response.data.results[
                      Math.floor(Math.random() * response.data.results.length)
                  ]);
              }
          } catch (error) {
              console.error("Failed to fetch Netflix Originals:", error);
          }
      })();
  }, []);
    const truncate=(str,n)=>{
        return str?.length > n ?str.substr(0,n-1)+'...':str;
    }
  return (
    <div>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
          alt=""
          className="banner-img"
        />
        <div className="banner-Caption">
          <h1 className="caption-title">
            {movie?.title || movie?.name || movie?.orginal_name}
          </h1>
          <p>
            {truncate(movie?.overview,150)}
          </p>
          <div className="banner-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards title="NETIFLIX ORIGINALS " fetchUrl={requests.fetchNetflixOriginals}/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
