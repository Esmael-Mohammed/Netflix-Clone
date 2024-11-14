import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/image/cards/Cards_data";
import { Link } from "react-router-dom";
const TitleCards = ({title,category}) => {
  const[data,setData]=useState([])
  const cardsRef=useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmNhYzI3M2NmODk4ODdiNWI4YmQwOTEyN2RkZmYxZSIsIm5iZiI6MTczMTU4NTA3MC4xNTAzNjMyLCJzdWIiOiI2NzM1ZTMyYWIwNDI5N2Y3MGM2ODMxZTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ULGP7TiSItRAUCBlUKQeG2sE1rBo2pZNr72bLV6PcNY'
    }
  };
  
  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setData(res.results))
    .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel)
  },[])
  console.log(data)
  return (
    <div className="title-cards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {data.map((card, index) => {
          return (
            <Link className="card" key={index} to={`/player/${card.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
