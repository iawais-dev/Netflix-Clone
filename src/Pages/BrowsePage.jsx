import React from 'react'
import Browse from '../Components/Browse/BrowseHeader'
import BrowseMain from '../Components/Browse/BrowseMain'
import HeroCarousel from '../Components/Browse/BrowseHero'

function BrowsePage() {
  return (
   <div className=''>
   <Browse/>
   <HeroCarousel/>
   <BrowseMain/>
   </div>
  )
}

export default BrowsePage