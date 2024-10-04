import React, { useEffect, useState } from 'react';

const HeroCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_API_KEY_HERE'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check if you're getting the movies
        setMovies(data.results); // Set the movies into state
      })
      .catch(err => console.error(err));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  return (
<>
<div className='relative bg-black -mt-12 '>
  {movies.length > 0 && (
  <>
    <div className="relative xl:h-[20vh] w-full aspect-w-16 aspect-h-9 bg-center bg-cover" 
         style={{
           backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[currentIndex].backdrop_path})`,
         }}
    >
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center bg-black bg-opacity-30 text-white">
        <div className="carousel-content p-4 bg-black mt-32 sm:-mt-24  w-fit mb-5 ml-2 bg-opacity-50 rounded-lg">
          <h2 className="text-sm md:text-2xl ml-10  font-bold">{movies[currentIndex].title}</h2>
        </div>
      </div>
    </div>
  </>
)}
 <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
            onClick={nextSlide}
          >
            ❯
          </button>
</div>



</>
  );
};

export default HeroCarousel;
