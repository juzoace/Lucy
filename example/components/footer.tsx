import Image from 'next/image';
import useWindowSize from '../../utils/useWindowSize';

function Footer() {
    const { width }  = useWindowSize();

    interface footerIconData {
        name: string,
        imgPath: string,
        href: string
    }

    interface footerData {
        footerLogo: footerIconData,
        footerText: string,
        footerIcons: footerIconData[],
        copyrightText: string
    }

    const data: footerData = {
        footerLogo: {
            name: 'LucyLogo',
            imgPath: '/assets/icons/LucyLogo.png',
            href: 'https://asklucy.co'
        },
        footerText: 'Lucy is more than just a digital assistant. She is your personal helper, always ready to assist you with whatever you need. With her advanced AI technology and wide range of features.',
        footerIcons: [
            {
                name: 'Telegram',
                href: 'https://t.me/lucy_one_bot',
                imgPath: '/assets/icons/telegramLogo.png'
            },
            {
                name: 'Instagram',
                href: 'https://www.instagram.com/asklucyhq/',
                imgPath: '/assets/icons/instagramLogo.png' 
            },
            {
                name: 'Facebook',
                href: 'https://www.facebook.com/asklucyhq',
                imgPath: '/assets/icons/facebookLogo.png'
            },
            {
                name: 'Twitter',
                href: 'https://twitter.com/asklucyhq',
                imgPath: '/assets/icons/twitterLogo.png'
            }
        ],
        copyrightText: 'All rights reserved'
    }

    return (
        <div className='flex flex-col w-[100%] p-7 mt-6'>

            {/* Footer description and social icon */}
            <div className='justify-between md:flex'>
                <div>

                    {/* Lucy Logo */}
                    <div className='flex align-center justify-center md:flex md:justify-start text-center md:text-left'>
                        <a href={data.footerLogo.href}>
                            <Image alt="" width={ width! >= 769 ? 90: 80} height={width! >= 769 ? 43: 43} src={data.footerLogo.imgPath} />
                        </a>
                    </div>

                    {/* Lucy Text */}
                    <div className='mt-4 mb-3 text-center md:text-left'>
                        <p className='not-italic leading-7 font-normal text-base text-gray-500 md:ml-2.5 md:w-[25rem] lg:w-[28rem]'>{data.footerText}</p>
                    </div>

                </div>


                {/* Social Icons */}
                <div className='flex mt-4 justify-center mb-4 md:relative md:top-[7rem]'>

                    {data.footerIcons.map((icon, i) => (
                        <a href={icon.href} key={i} className='mr-5'>
                            <Image alt="" width={ width! >= 769 ? 35: 25} height={width! >= 769 ? 35: 25} src={icon.imgPath} />
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