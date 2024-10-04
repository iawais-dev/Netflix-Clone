import React from 'react';
import headerPic from '../Assets/imgs/header-pic.jpg';
import logo from '../Assets/imgs/logo (2).png'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <section
      className="border-b-[9px] border-[#232323] bg-cover h-[90vh] bg-no-repeat xl:bg-center bg-top"
      style={{ backgroundImage: `url(${headerPic})` }}
    >
      <div className="bg-[rgba(0,0,0,0.3)] h-[90vh]">
        <div className='absolute  top-0 bottom-0 left-0 right-0 bg-Gradient h-[89.2vh]  xl:h-[88.1vh]' />
        <div>
          <div>
            <div className='relative'>
              <div className="flex mr-5 pt-3 mdl:pt-0 justify-between items-center xl:m-36 xl:-mt-3 xl:mb-0">
                <img
                  className="h-16 ml-5 mdl:h-24 xl:h-[6.2rem]"
                  src={`${logo}`}
                  alt="Logo"
                />
                <Link to='/signIn'>
                  <button className="bg-[#e50914] hover:bg-[rgb(193,17,25)] duration-300 mr-5 w-20 h-8 font-semibold text-white p-1 rounded">
                    Sign In
                  </button>
                  </Link>
              </div>
              <div>
                <div className="flex flex-col items-center ml-0 mt-12 ssm:mt-24 smx:mt-32">
                  <p className="text-white text-center text-3xl p-9 pt-0 pb-0 font-bold mdl:text-5xl mdl:font-black mdl:p-5 mdl:pt-0 mdl:pb-0 mdl:mt-10 mdl:leading-normal">
                    Unlimited movies, TV shows, and more
                  </p>
                  <p className="text-white text-center text-xl mt-3 mdl:text-2xl mdl:font-semibold mdl:mt-4">
                    Watch anywhere. Cancel anytime.
                  </p>
                  <p className="text-white text-center text-xl ssm:text-lg mt-6 p-10 pt-0 pb-0 ssm:p-16 ssm:pt-0 ssm:pb-0 mdl:text-xl">
                    Ready to watch? Enter your email to create or restart your membership.
                  </p>
                </div>
                <div className="ml-0 flex flex-col items-center p-9 pt-0 pb-8 ssm:pr-20 ssm:pl-20 ssm:pb-20 mdl:pb-44 ssm:flex ssm:flex-row ssm:gap-2 max-w-[700px] ssm:mx-auto ssm:-mt-2">
                  <input
                    className="w-[100%] text-white rounded h-12 pl-3 bg-black bg-opacity-45 backdrop-blur-sm border border-1 border-gray-500 mt-3 ssm:w-[60%] ssm:mt-6 ssm:h-14"
                    type="text"
                    placeholder="Email address"
                    name=""
                    id=""
                  />
                  <button className="bg-[#e50914] hover:bg-[rgb(193,17,25)] text-xl ssm:text-2xl duration-300 text-white p-0 mt-4 h-12 w-36 rounded ssm:mt-6 ssm:w-[40%] ssm:h-14">
                    Get Started &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
