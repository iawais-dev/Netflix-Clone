import React from 'react';



const Footer = () => {
    return (
        <footer className="bg-black flex pb-40 pt-32 xl:pt-5 pl-4  ">
            {/* Mobile View */}
            <div className="flex flex-col text-[15px] font-semibold mdl:hidden">
                <ul>
                    <li>
                        <a className="text-[#989898] ml-3 mt-5 underline text-lg cursor-pointer font-semibold" href="#">Contact Support</a>
                    </li>
                    <li className="ml-3 pt-4">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Help Center</a>
                    </li>
                    <li className="ml-3 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">My Account</a>
                    </li>
                    <li className="ml-3 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Partnerships</a>
                    </li>
                    <li className="ml-3 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Viewing Options</a>
                    </li>
                    <li className="ml-3 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Privacy Policy</a>
                    </li>
                    <li className="ml-3 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Company Info</a>
                    </li>
                    <li className="ml-3 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Speed Tests</a>
                    </li>
                    <li className="ml-3 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Exclusive Content</a>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col mt-6 m-auto text-[15px] font-semibold mdl:hidden">
                <ul>
                    <li className="-ml-5 mt-5">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Customer Support</a>
                    </li>
                    <li className="-ml-5 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Media Coverage</a>
                    </li>
                    <li className="-ml-5 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Careers</a>
                    </li>
                    <li className="-ml-5 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Terms of Service</a>
                    </li>
                    <li className="-ml-5 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Cookie Policy</a>
                    </li>
                    <li className="-ml-5 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Get in Touch</a>
                    </li>
                    <li className="-ml-5 mt-2">
                        <a className="text-[#989898] underline cursor-pointer" href="#">Legal Details</a>
                    </li>
                </ul>
            </div>

            {/* Desktop View */}
            <div className="mdl:flex mdl:flex-row mdl:pt-7 mdl:pl-4 mdl:gap-20 lg:gap-28 xl:gap-24 2xl:gap-40 xl:pl-40">
                {/* First section */}
                <div className="hidden mdl:visible mdl:flex mdl:flex-col text-[15px] font-semibold">
                    <ul>
                        <li>
                            <a className="text-[#989898] underline cursor-pointer" href="#">Contact Support</a>
                        </li>
                        <li className="mt-4">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Help Center</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Partnerships</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Privacy Policy</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Speed Tests</a>
                        </li>
                    </ul>
                </div>

                {/* Second section */}
                <div className="hidden mdl:visible mdl:flex mdl:flex-col mt-6 text-[15px] font-semibold">
                    <ul>
                        <li className="mt-4">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Customer Service</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Media Center</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Careers</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Terms of Use</a>
                        </li>
                    </ul>
                </div>

                {/* Third section */}
                <div className="hidden mdl:visible mdl:flex mdl:flex-col mt-6 text-[15px] font-semibold">
                    <ul>
                        <li className="mt-4">
                            <a className="text-[#989898] underline cursor-pointer" href="#">My Account</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Viewing Options</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Company Info</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Exclusive Content</a>
                        </li>
                    </ul>
                </div>

                {/* Fourth section */}
                <div className="hidden mdl:visible mdl:flex mdl:flex-col mt-6 text-[15px] font-semibold">
                    <ul>
                        <li className="mt-4">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Media Center</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Terms of Use</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-[#989898] underline cursor-pointer" href="#">Get in Touch</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
    