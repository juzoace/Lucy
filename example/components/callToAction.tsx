import Image from 'next/image';
import CallToActionImage from 'public/assets/images/CallToActionImage.png';
import CallToActionImageMobile from 'public/assets/icons/CallToActionImageMobile.png';
import CallToActionButton from './callToActionButton';
import useWindowSize from '../../utils/useWindowSize';

function callToAction() {
    const { width }  = useWindowSize();
    const buttonWidth: string = `w-[260px]`;

    interface callToActionImageData {
        name: string,
        imgPath: string
    }

    interface callToActionButtonData {
        width: string,
        href: string,
    }

    interface callToActionData {
        headingText: string,
        headingTextHighlight: string,
        paragraph: string,
        callToActionButton: callToActionButtonData,
        navButtonText: string
    }

    const data: callToActionData = {
        headingText: 'Your Personal Digital',
        headingTextHighlight: 'Assistant',
        navButtonText: 'Get started for free',
        paragraph: 'Meet Lucy, your personal AI Assistant: Whether you need help answering questions for work or school, setting reminders, composing messages and replies, or staying healthy, Luccy has got you covered. With Lucy, you can stay organised and focused on what matters most in your life.',
        callToActionButton: {
            width: buttonWidth,
            href: 'https://t.me/lucy_one_bot'
        }
    }

    return (
        <div className="bg-purple-100 w-full pt-[150px] mb-[120px]"> 
            <div className="flex flex-col justify-center items-center w-full pl-[16px] pr-[16px] mb-[48px]">
                <h1 className="mb-[2rem] lg:font-black not-italic leading-[57px] text-center font-black text-[38px] lg:text-5xl text-black"> {data.headingText}<span className='text-indigo-600 pl-2'>{data.headingTextHighlight}</span> </h1>
                <p className="leading-[29px]  text-center not-italic font-normal text-base text-gray-900 lg:w-[55rem]">{data.paragraph}</p>
            </div>
            <div className='flex justify-center align-center mb-[80px]'>
            <a target="_blank" href={data.callToActionButton.href}>
                <CallToActionButton text={data.navButtonText} width={data.callToActionButton.width} />
            </a>   
            </div>
            <div className='flex flex-row items-center justify-center'>
               {width! >= 760 ? <Image alt="" width={1280} height={800} src={CallToActionImage}/> : <Image alt="" src={CallToActionImageMobile}/>}
            </div>
        </div>
    )
}

export default callToAction;