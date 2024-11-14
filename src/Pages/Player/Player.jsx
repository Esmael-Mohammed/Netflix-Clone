import React, { useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import "./Player.css";
import back_arrow_icon from "../../assets/image/back_arrow_icon.png";
const Player = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  const[data,setData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmNhYzI3M2NmODk4ODdiNWI4YmQwOTEyN2RkZmYxZSIsIm5iZiI6MTczMTU4NTA3MC4xNTAzNjMyLCJzdWIiOiI2NzM1ZTMyYWIwNDI5N2Y3MGM2ODMxZTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ULGP7TiSItRAUCBlUKQeG2sE1rBo2pZNr72bLV6PcNY'
    }
  };
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setData(res.results[0]))
      .catch(err => console.error(err));
  },[])
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{
        navigate(-2)
      }}/>
      <iframe
        frameborder="0"
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${data.key}`} title="trailer" allowFullScreen
      ></iframe>
      <div className="palyer-info">
        <p>{data.published_at.slice(0,10)}</p>
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div>
    </div>
  );
};

export default Player;
