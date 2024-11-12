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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmZiMTk1NTc3YTBhMWU0YTJhYmU5M2NiNzc3ZDQ0YSIsIm5iZiI6MTczMTIyNTgxMS42Nzg4MTczLCJzdWIiOiI2NzMwNjdiMzZiZTMyZTMwNTVkM2FmNTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.X04mlQaq8RU_TyiwgS2plqeoIWD_RlPZ2tqDrosJEVc'
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
          <TitleCards />
        </div>
      </div>
    </div>
  );
};

export default Banner;
