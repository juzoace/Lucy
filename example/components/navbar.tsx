import { useState } from "react";
import Image from 'next/image';
import LucyLogo from 'icons/LucyLogo.png';
import CallToActionButton from './callToActionButton';


function NavBar() {

    const [navbar, setNavbar] = useState(false);

    const buttonWidth: string = `w-[240px]`;

    return (
        <nav className="w-full bg-purple-100 shadow">
            <div className="justify-between flex items-center px-4 mx-auto border lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex border items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <Image src={LucyLogo} />
                        </a>
                    </div>
                </div>

                <div className="md:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                {/* phone nav element */}
                <div
                    className={`flex-1 absolute  md:hidden top-[10%] w-[100%] justify-self-center pb-3 mt-8  md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                        }`}
                >
                    <div className="md:flex md:flex-row md:items-center flex flex-col justify-center items-center">
                        <div className="flex items-center justify-center w-16 h-4 not-italic font-semibold text-xl leading-8" >Login</div>
                        <CallToActionButton width={buttonWidth} />
                    </div>
                </div>
                {/* tab nav element */}
                <div
                    className={`  hidden  w-max   pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                        }`}
                >
                    <div className="md:flex md:flex-row md:items-center flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-4 not-italic font-semibold text-xl leading-8" >Login</div>
                        <CallToActionButton width={buttonWidth} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;