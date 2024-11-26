import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import axios from '../../Utility/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
const base_url = "https://image.tmdb.org/t/p/original";

const TitleCards = ({title,fetchUrl,isLargeRow}) => {
  const[movies,setMovies]=useState([])
  const [loading,setLoading]=useState(false)
  const [trailerUrl, setTrailerUrl] = useState('');
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
        setMovies(response?.data?.results || [])
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
  const opts = {
		height: '390',
		width: "100%",
		playerVars: {
			autoplay:1,
		},
	}
  const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('')
		} else {
			movieTrailer(movie?.title || movie?.name || movie?.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search)
					// console.log(urlParams)
					setTrailerUrl(urlParams.get('v'));
					
			})
		}
	}
  return (
<div className="row" >
			<h1>{title}</h1>
			<div className="row__posters" ref={cardsRef}>
      {movies && movies.length > 0 ? ( 
            movies.map((movie, i) => (
                <img
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie?.name || "Movie poster"}  
                    key={i}
                    
                />
            ))
        ) : (
            <p>No movies available</p> 
        )}
			</div>
			<div style={{ padding: '15px' }}>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
			</div>
		</div>

  );
};

export default TitleCards;
