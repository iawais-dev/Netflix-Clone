import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MovieCards(props) {
  const navigate = useNavigate()
  const[apiData , setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGQzNzdmNDExOThmOWJhZjZhMWRlOThjNTkyMGU5MSIsIm5iZiI6MTcyNzAwMzM2Ny4zNDI3OTgsInN1YiI6IjY2ZWVlMGZmYTgyYjAwNTcwMzI1ZmFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4BP9_5wsDz-itxT-5tFlRxSyDHzq9F2llT4qfUEgrQE'
    }
  };
  
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${props.category}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  },[])

   const gotoPlayer = (id)=>{
   navigate(`/player/${id}`)
   }


  return (
<div className='z-50 relative sm:-top-40 xl:-top-72 p-5 pr-0 '>
  <h1 className='text-white font-bold text-xl mb-3'>{props.title}</h1>
  <div className='flex  gap-2 overflow-scroll scrollbar-hide '>  
    {apiData.map((card, key) => (
      <div className=' flex-shrink-0 ' key={key} onClick={()=>gotoPlayer(card.id)}>
        <img className='h-24 sm:h-28 xl:h-40 object-cover hover:scale-105 transition-all ' src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title}  />
        <h2 className='text-white  w-48'>{card.original_title}</h2>
      </div>
    ))}
  </div>
</div>

  
  )
}

export default MovieCards