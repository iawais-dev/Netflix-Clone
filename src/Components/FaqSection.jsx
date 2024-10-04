import React from 'react';
import addIcon from '../Assets/imgs/add.png'; // Adjust path if needed

const FAQ = () => {
    return (
        <section className="border-b-8 border-[#232323] bg-black">
            <p className="text-white text-center text-3xl mdl:text-5xl mdl:font-black mdl:pt-16 pt-12 sm:pt-14 p-10 pb-0 font-bold">
                Frequently Asked Questions
            </p>

            <div className="xl:p-36 xl:pt-0 xl:pb-0">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#2d2d2d] hover:bg-[#414141] flex p-6 justify-between m-6 mb-2 sm:m-7 sm:mb-2 mdl:m-8 mdl:mb-2"
                    >
                        <p className="text-white text-lg font-semibold mdl:text-2xl">
                            {item.question}
                        </p>
                        <img className="h-6 mt-1" src={addIcon} alt="Toggle" />
                    </div>
                ))}
            </div>

            <p className="text-white text-center p-12 pt-10 pb-0 text-lg mdl:text-xl sm:p-20 sm:pt-10 sm:pb-0">
                Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div className="ml-0 flex flex-col items-center p-9 pt-0 pb-0 ssm:flex ssm:flex-row ssm:gap-2 max-w-[700px] ssm:mx-auto ssm:-mt-16 ssm:p-16 ssm:pt-0 ssm:pb-0">
                <input
                    className="w-[100%] rounded h-12 pl-3 bg-black bg-opacity-45 border border-1 border-gray-500 mt-3 ssm:w-[60%] sm:w-[65%] ssm:mt-6 ssm:h-14"
                    type="text"
                    placeholder="Email address"
                />
                <button className="bg-[#e50914] mb-14 hover:bg-[rgb(193,17,25)] duration-300 text-white p-2 text-lg mt-4 h-12 w-36 sm:w-[35%] rounded ssm:mt-20 ssm:w-[40%] ssm:p-0 ssm:text-2xl ssm:h-14">
                    Get Started
                </button>
            </div>
        </section>
    );
};

// Mock FAQ Data
const faqData = [
    { question: 'What is Netflix?' },
    { question: 'How much does Netflix cost?' },
    { question: 'Where can I watch?' },
    { question: 'How do I cancel?' },
    { question: 'What can I watch on Netflix?' },
    { question: 'Is Netflix good for kids?' },
];

export default FAQ;
