import React, { useEffect, useState } from 'react';
import arrow from '../Assets/imgs/left-arrow (2).png'
import { useNavigate, useParams } from 'react-router-dom';
function Player() {
    const navigate= useNavigate()
    const {id} = useParams()
    const [apiData , setApiData] = useState({
        name : '',
        key : '',
        type : '',
        published_at : ''
    })

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGQzNzdmNDExOThmOWJhZjZhMWRlOThjNTkyMGU5MSIsIm5iZiI6MTcyNzM3Njg3NS4yNjg0MjMsInN1YiI6IjY2ZWVlMGZmYTgyYjAwNTcwMzI1ZmFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H0TExxDDVceBOkiUnLvASPOWmV_tlehfSIuirNYzgyo'
      }
    };
    
    useEffect(()=>{
   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
    },[])
 
    const goback= ()=>{
      navigate('/browse')
    }

  return (
    <div className='bg-[#141414] min-h-screen   h-screen w-screen pt-5 text-white flex flex-col overflow-scroll'>  
    <div className='bg-white w-fit p-2 rounded-3xl ml-5 cursor-pointer' >
    <img src={arrow} className='h-5 w-5'  alt="" onClick={goback} />

    </div>
         <div className="relative mt-10 w-full h-[200px]  aspect-w-16 aspect-h-9 ">
      <iframe 
      className="absolute top-0 left-0 xl:w-[80%] xl:h-[80%] 2xl:w-[70%] 2xl:h-[70%] xl:mx-auto h-full"
        src={`https://www.youtube.com/embed/${apiData.key}`} 
        frameBorder="0" 
        allowFullScreen 
      ></iframe>
    </div>
    <div className='mb-96 xl:-mt-20 ml-5 2xl:-mt-48'>
         <h2 className='mt-5'>Name: {apiData.name} </h2>
   <h2 className='mt-2'>Type: {apiData.type} </h2>
   <h2 className='mt-2'>Published Date: {apiData.published_at} </h2>
    </div>

    </div>

  );
}

export default Player;
