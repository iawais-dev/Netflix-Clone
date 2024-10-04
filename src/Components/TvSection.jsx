import React from 'react';
import tv from '../Assets/imgs/tv.png'
const TVSection = () => {
  return (
    <section className="bg-black flex flex-col items-center ssm:h-[85vh] mdl:h-auto overflow-hidden border-b-8 border-[#232323] mdl:flex mdl:flex-row mdl:pt-10 mdl:pb-10 xl:pl-32 xl:pr-32">
      <div className="flex-col mdl:justify-start mdl:w-[70%] lg:w-[55%] 2xl:w-[53%]">
        <p className="text-white text-center pt-12 text-[32px] font-bold mdl:text-[45px] mdl:pt-0 mdl:text-left mdl:font-black mdl:pl-10">
          Enjoy on your TV
        </p>
        <p className="text-white text-center text-[19px] mt-4 pl-3 pr-3 mdl:text-[25px] mdl:text-left mdl:p-10 mdl:pt-0">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
        </p>
      </div>
      <div className="flex flex-col items-center overflow-hidden relative mb-10">
        <video
          className="absolute max-w-screen-sm z-40 mt-14 p-4 sm:pt-16 smm:pt-16 mdl:pt-4 lg:pt-10 2xl:pt-14"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          autoPlay
          loop
          playsInline
          muted
        ></video>
        <img
          className="mt-10 ss:mt-8 sm:mt-5 relative w-full sm:w-auto z-50"
          style={{ marginTop: 'clamp(280px, 480px)' }}
          src={`${tv}`}
          alt="TV"
        />
      </div>
    </section>
  );
};

export default TVSection;
