import { useState, useEffect } from "react";
import Image from 'next/image';
import CallToActionButton from './callToActionButton';
import useWindowSize from '../../utils/useWindowSize';


function NavBar() {

    const [colorChange, setColorchange] = useState(false);

    useEffect(() => {
        const changeNavbarColor = () =>{
            if(window.scrollY >= 90){
              setColorchange(true);
            }
            else{
              setColorchange(false);
            }
         };
         window.addEventListener('scroll', changeNavbarColor);
    })


    const { width }  = useWindowSize();

    const [navbar, setNavbar] = useState(false);

    const buttonWidth: string = `w-[240px]`;
    const navBarStyleWithOutScroll = `fixed z-10 w-full bg-purple-100 shadow-none`
    const navBarStyleOnScroll = `fixed z-10 w-full bg-white shadow`
    interface navBarIconData {
        name: string,
        imgPath: string,
        href: string
    }

    interface navBarData {
        navBarLogo: navBarIconData,
        navBarItems: string[]
    }

    const data: navBarData = {
        navBarLogo: {
            name: 'LucyLogo',
            imgPath: '/assets/icons/LucyLogo.png',
            href: "https://asklucy.co"
        },
        navBarItems: ['Login']
    }

    return (
        <nav className={colorChange ? navBarStyleOnScroll : navBarStyleWithOutScroll}>
            <div className="justify-between flex items-center px-4 mx-auto border md:items-center md:flex md:px-8 lg:max-w-7xl">
                <div>
                    <div className="flex border items-center justify-between py-3 md:py-5 md:block">
                        <a href={data.navBarLogo.href}>
                            <Image width={ width! >= 769 ? 90: 80} height={width! >= 769 ? 43: 43} src={data.navBarLogo.imgPath}/>
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
                    className={`flex-1 absolute left-[-0.2rem] top-[2%] w-[100%] justify-self-center pb-3 ${colorChange ? "bg-white": ""} mt-8 md:hidden md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                        }`}
                >
                    <div className="flex flex-col justify-center items-center md:flex md:flex-row md:items-center">
                        <div className="flex items-center justify-center w-16 h-4 not-italic font-semibold text-xl leading-8" >{data.navBarItems[0]}</div>
                        <a href="https://t.me/lucy_one_bot">
                            <CallToActionButton width={buttonWidth} />
                        </a>
                    </div>
                </div>
                {/* tab nav element */}
                <div
                    className={`  hidden w-max pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                        }`}
                >
                    <div className="flex flex-col w-[100%] items-center md:flex md:flex-row md:items-center">
                        <div className="flex items-center justify-center w-16 h-4 not-italic font-semibold text-xl leading-8">{data.navBarItems[0]}</div>
                        <a href="https://t.me/lucy_one_bot">
                            <CallToActionButton width={buttonWidth} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
