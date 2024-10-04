import React from 'react'
import MovieCards from '../Item'

function BrowseMain() {
    return (
        <div className='h-screen bg-[#141414]'>
            <MovieCards title={'Now Playing'} category={'now_playing'}/>
            <MovieCards title={'Popular'} category={'popular'}/>
            <MovieCards title={'Top Rated'} category={'top_rated'}/>
            <MovieCards title={'UpComing'} category={'upcoming'}/>
 
        </div>
    )
}

export default BrowseMain