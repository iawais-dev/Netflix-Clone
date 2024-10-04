import React from 'react'
import { AdsSection ,FAQ , Footer, Header,KidsProfilesSection,TVSection,TextSection } from '../Components/index'
function Home() {
  return (
    <>    
    <Header />
    <TVSection />
    <AdsSection/>
    <TextSection />
    <KidsProfilesSection />
    <FAQ/>
    <Footer/>
    </>

  )
}

export default Home