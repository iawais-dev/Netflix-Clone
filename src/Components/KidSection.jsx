import React from 'react';
import kidsImage from '../Assets/imgs/kids.png'; // Adjust path if necessary

const KidsProfilesSection = () => {
    return (
        <section className="border-b-8 border-[#232323] bg-black flex flex-col items-center mdl:flex mdl:flex-row-reverse mdl:pt-16 mdl:pb-8 xl:pl-32 xl:pr-32">
            <div className="mdl:flex mdl:flex-col mdl:w-[50%] mdl:mb-16">
                <p className="text-white text-center text-[32px] p-7 pt-12 pb-0 font-bold mdl:text-left mdl:p-0 mdl:font-black mdl:text-5xl mdl:ml-4">
                    Create profiles for kids
                </p>
                <p className="text-white text-center text-lg p-5 font-semibold mdl:text-2xl mdl:text-left mdl:p-4 mdl:pt-6">
                    Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                </p>
            </div>
            <img className="pb-14 pt-0 p-7 mdl:w-[50%]" src={kidsImage} alt="Kids Profiles" />
        </section>
    );
};

export default KidsProfilesSection;
