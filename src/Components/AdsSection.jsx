import React from 'react';
import strangerThings from '../Assets/imgs/strangerthinga.png'
import downloadIcon from '../Assets/imgs/download-icon.gif'
import mobile from '../Assets/imgs/mobile-0819.jpg'
const AdsSection = () => {
  return (
    <section className="bg-black flex flex-col mdl:flex-row-reverse items-center mdl:pt-10 mdl:pb-10 xl:pt-14 xl:pl-36 xl:pr-36 border-b-8 border-[#232323]">
      <div className="xl:w-[100%]">
        <div className="mdl:w-[100%] mdl:mr-40">
          <p className="text-white text-center font-bold text-3xl p-10 pb-0 mdl:text-5xl mdl:text-left mdl:font-black mdl:leading-snug xl:p-0">
            Download your shows to watch offline
          </p>
          <p className="text-white text-center text-lg p-10 pb-4 pt-4 mdl:text-2xl mdl:text-left mdl:p-14 mdl:pl-10 mdl:pt-4 xl:p-0">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mdl:w-[80%] xl:w-[100%]">
        <img className="pb-20 p-5" src={`${mobile}`} alt="Mobile" />
        <div className="bg-black flex w-[260px] ss:w-[60%] max-w-[400px] ssm:-mt-[12rem] z-50 -mt-40 mb-20 p-1 ml-14 mr-14 rounded-xl border-2 border-[#485155] items-center">
          <div className="flex flex-row items-center">
            <img className="h-[50px] ssm:h-[70px] p-1 pl-2" src={`${strangerThings}`}alt="Stranger Things" />
            <div className="flex flex-col pl-2">
              <p className="text-white text-sm">Stranger Things</p>
              <p className="text-blue-700 text-sm">Downloading...</p>
            </div>
          </div>
          <img className="h-[50px] ml-auto" src={`${downloadIcon}`} alt="Download Icon" />
        </div>
      </div>
    </section>
  );
};

export default AdsSection;
