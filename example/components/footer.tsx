import Image from 'next/image';
import useWindowSize from '../../utils/useWindowSize';

function Footer() {
    const { width }  = useWindowSize();
    const data = {
        footerLogo: {
            imgPath: '/assets/icons/LucyLogo.png',
            href: 'https://asklucy.co'
        },
        footerText: 'Lucy is more than just a digital assistant. She is your personal helper, always ready to assist you with whatever you need. With her advanced AI technology and wide range of features.',
        footerIcons: [
            {
                name: 'Telegram',
                href: 'https://t.me/lucy_one_bot',
                src: '/assets/icons/telegramLogo.png'
            },
            {
                name: 'Instagram',
                href: 'https://www.instagram.com/asklucyhq/',
                src: '/assets/icons/instagramLogo.png' 
            },
            {
                name: 'Facebook',
                href: 'https://www.facebook.com/asklucyhq',
                src: '/assets/icons/facebookLogo.png'
            },
            {
                name: 'Twitter',
                href: 'https://twitter.com/asklucyhq',
                src: '/assets/icons/twitterLogo.png'
            }
        ],
        copyrightText: 'All rights reserved'
    }

    return (
        <div className='flex flex-col w-[100%] p-4 mt-6'>

            {/* Footer description and social icon */}
            <div className='justify-between md:flex'>
                <div >

                    {/* Lucy Logo */}
                    <div className='text-center md:ml-1 md:text-left'>
                        <a href={data.footerLogo.href}>
                            <Image width={ width! >= 769 ? 90: 80} height={width! >= 769 ? 43: 43} src={data.footerLogo.imgPath} />
                        </a>
                        
                    </div>

                    {/* Lucy Text */}
                    <div className='mt-4 text-center md:text-left'>
                        <p className='h-24 not-italic font-light text-xs leading-6 md:md:ml-2.5 md:w-[18rem] lg:w-[22rem]'>{data.footerText}</p>
                    </div>

                </div>


                {/* Social Icons */}
                <div className='flex mt-4 justify-center mb-4 md:relative md:top-[4rem]'>

                    {data.footerIcons.map((icon) => (
                        <a href={icon.href} className='mr-5'>
                            <Image width={ width! >= 769 ? 50: 40} height={width! >= 769 ? 50: 40} src={icon.src} />
                        </a>
                    ))}
                </div>

            </div>

            {/* Line */}
            <div className='w-[100%] h-0 border-[1px] border-gray-200'></div>

            {/* Copy right */}
            <p className='text-center m-4'>{data. copyrightText}</p>
        </div>
    )
}

export default Footer;