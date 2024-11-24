import React, { useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import "./Player.css";
import back_arrow_icon from "../../assets/image/back_arrow_icon.png";
import axios from "../../Utility/axios";
// import axios from "axios";
const Player = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  const[data,setData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  const apiKey = import.meta.env.VITE_TMDB_KEY;
  useEffect(() => {
    (async () => {
      try {
        
        const request = await axios.get(`/movie/${id}/videos?api_key=${apiKey}`);
        console.log("API Response:", request.data);

        setData(request?.data?.results?.[0]);
        
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    })();
  }, [id]);

  if (!data || !data.key) {
    return <div>No playable video available.</div>;
  }
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
