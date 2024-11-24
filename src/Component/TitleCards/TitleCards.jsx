import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";
import axios from '../../Utility/axios';
const TitleCards = ({title,fetchUrl}) => {
  const[data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const cardsRef=useRef();
  
  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
  }
  useEffect(()=>{
    (async()=>{
      try {
        const response=await axios.get(fetchUrl);
        console.log(response.data.results)
        setData(response?.data?.results || [])
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)

      }
    })()
  cardsRef.current.addEventListener('wheel',handleWheel)
  },[fetchUrl])
  if(loading){
    return <div>Loading....</div>
  }
  console.log(data)
  return (
    <div className="title-cards">
    <h2>{title}</h2>
    <div className="card-list" ref={cardsRef}>
        {data?.length > 0 ? (
            data?.map((card) => (
                <Link className="card" key={card?.id} to={`/player/${card?.id}`}>
                    <img 
                        src={card?.backdrop_path 
                            ? `https://image.tmdb.org/t/p/w500${card?.backdrop_path}` 
                            : '/path/to/fallback-image.jpg'} 
                        alt={card?.original_title || "Card image"} 
                    />
                    <p>{card?.original_title || "Untitled"}</p>
                </Link>
            ))
        ) : (
            <p>No data available</p>
        )}
    </div>
</div>

  );
};

export default TitleCards;
