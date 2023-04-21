import Image from 'next/image';
import CallToActionImage from 'icons/CallToActionImage.png';
import CallToActionImageMobile from 'icons/CallToActionImageMobile.png';
import CallToActionButton from './callToActionButton';
import useWindowSize from '../../utils/useWindowSize';

function callToAction() {
    const { width }  = useWindowSize();
    const buttonWidth: string = `w-[250px]`;
    return (
        <div className="pt-14 bg-purple-100 w-full pt-[150px] mb-[120px]"> 
            <div className="flex flex-col justify-center items-center w-full pl-[16px] pr-[16px] mb-[48px]">
                <h1 className="mb-[12px] font-bold lg:font-black not-italic leading-[57px] text-center font-black text-[38px] lg:text-5xl text-black">Your Personal Digital<span className='text-blue-600 pl-2'>Assistant</span> </h1>
                <p className="leading-[29px] text-center not-italic font-normal text-base text-gray-900">Meet Lucy, your personal AI Assistant: Whether you need help answering questions for work or school, setting reminders, <br></br> composing messages and replies, or staying healthy, Luccy has got you covered. With Lucy, you can stay organised and focused <br></br> on what matters most in your life.</p>
            </div>
            <div className='flex justify-center align-center mb-[80px]'>
                <CallToActionButton width={buttonWidth}/>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <Image src={ width! >= 760 ? CallToActionImage : CallToActionImageMobile } />
            </div>
        </div>
    )
}

export default callToAction;