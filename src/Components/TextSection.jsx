import React from 'react';

const TextSection = () => {
  return (
    <section className="border-b-8 relative border-[#232323] bg-black mdl:pl-10 lg:pl-40 xl:pl-52 2xl:pl-80">
      <p className="text-white font-bold text-3xl pt-10 text-center ssm:text-4xl ssm:pt-14 mdl:text-left mdl:text-5xl mdl:z-50 mdl:ml-7 mdl:font-black mdl:break-words lg:break-normal lg:leading-normal mdl:w-[30%]">
        Watch everywhere
      </p>
      <p className="text-white mdl:w-[28rem] text-lg p-7 pt-3 text-center pb-24 ssm:pb-28 mdl:text-left mdl:text-2xl">
        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
      </p>
    </section>
  );
};

export default TextSection;
