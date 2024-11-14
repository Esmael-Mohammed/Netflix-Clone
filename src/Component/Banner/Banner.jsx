import React from "react";
import { useState,useEffect} from "react";
import play_icon from '../../assets/image/play_icon.png'
import info_icon from '../../assets/image/info_icon.png'
import TitleCards from "../TitleCards/TitleCards";
import './Banner.css'

const Banner = ({category}) => {
    const [movie,setMove]=useState([])
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmNhYzI3M2NmODk4ODdiNWI4YmQwOTEyN2RkZmYxZSIsIm5iZiI6MTczMTU4NTA3MC4xNTAzNjMyLCJzdWIiOiI2NzM1ZTMyYWIwNDI5N2Y3MGM2ODMxZTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ULGP7TiSItRAUCBlUKQeG2sE1rBo2pZNr72bLV6PcNY'
      }
    };
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setMove(res.results[
        Math.floor(Math.random()*res.results.length)
      ]))
      .catch(err => console.error(err));
    },[])
    const truncate=(str,n)=>{
        return str?.length >n ?str.substr(0,n-1)+'...':str;
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
          <TitleCards/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
