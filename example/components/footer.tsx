import Image from 'next/image';
import LucyLogo from 'public/assets/icons/LucyLogo.png';
import facebookLogo from 'public/assets/icons/facebookLogo.png';
import twitterLogo from 'public/assets/icons/twitterLogo.png';
import instagramLogo from 'public/assets/icons/instagramLogo.png';
import telegramLogo from 'public/assets/icons/telegramLogo.png';

function Footer() {
    return (
        <div className='flex flex-col w-[100%] p-4 mt-6'>

            {/* Footer description and social icon */}
            <div className='justify-between md:flex'>
                <div >
                    {/* Lucy Logo */}
                    <div className='md:ml-4'>
                        <Image src={LucyLogo} />
                    </div>

                    {/* Lucy Text */}
                    <div className='mt-4'>
                        <p className='h-24 not-italic font-light text-xs leading-6 md:md:ml-4'>Lucy is more than just a digital assistant. She is your personal <br></br> helper, always ready to assist you with whatever you need.<br></br>With her advanced AI technology and wide range of features.</p>
                    </div>
                </div>


                {/* Social Icons */}
                <div className='flex mt-4 mb-4 md:relative md:top-[4rem]'>
                    <a className='mr-5'>
                        <Image src={telegramLogo} />
                    </a>
                    <a className='mr-5'>
                        <Image src={instagramLogo} /> 
                    </a>
                    <a className='mr-5'>
                        <Image src={facebookLogo} />
                    </a>
                    <a className='mr-5'>
                        <Image src={twitterLogo} />
                    </a>   
                </div>
            </div>

            {/* Line */}
            <div className='w-[100%] h-0 border-[1px] border-gray-200'></div>

            {/* Copy right */}
            <p className='text-center m-4'>All rights reserved</p>
        </div>
    )
}

export default Footer;