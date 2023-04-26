import Image from "next/image";
import EnquiryImage from 'public/assets/images/enquiry.png';
import EnquiryImageMobile from 'public/assets/images/enquiryMobile.png';
import ReminderAndAppointmentImage from 'public/assets/images/reminderAndAppointment.png';
import ReminderAndAppointmentImageMobile from 'public/assets/images/reminderAndAppointmentMobile.png';
import BusinessAndCareerImage from 'public/assets/images/businessAndCareer.png';
import BusinessAndCareerImageMobile from 'public/assets/images/businessAndCareerMobile.png';
import LearningAndAcademicsImage from 'public/assets/images/learningAndAcademics.png';
import LearningAndAcademicsImageMobile from 'public/assets/images/learningAndAcademicsMobile.png';
import CallToActionButton from './callToActionButton';
import useWindowSize from '../../utils/useWindowSize';


function AppDetails() {
    const { width }  = useWindowSize();
    const buttonWidthDesktop: string = `w-[380px]`;
    const buttonWidthMobile: string = `w-[260px]`
    const data = {
        headingText: 'Empower your life with AI technology',
        testimonialButtonText: 'Get started for free',
        lucyFunctions: [
            {
                heading: 'Ask Lucy anything',
                paragraph: 'Lucy can provide instant answers to your questions, and even compose professional emails and personalised messages that leave a lasting impressions on the recipent.'
            },
            {
                heading: 'Set reminders and appointment',
                paragraph: 'Lucy can provide instant answers to your questions, and even compose professional emails and personalised messages that leave a lasting impression on the recipent.'
            },
            {
                heading: 'Business and Career',
                paragraph: `Let's work together on your business, career, or personal growth. I can help with launching/growing businesses, career upskilling, strategic planning, and more! `
            },
            {
                heading: 'Learning and Academics',
                paragraph: `Whether you need help with academics, tech career transition, essay writing, research papers, study tips, exam prep, homework, or want to learn a new topic, i'm here for you.`
            }
        ]
    }

    return (
        <div className="flex flex-col gap-[3.5rem] items-center justify-center mb-[0rem] mr-2 ml-2"> 
            
            <h1 className="h-24 not-italic font-semibold text-3xl text-center text-black md:mb-4 md:not-italic md:font-bold md:text-5xl md:text-black md:text-center md:leading-[79px] ">{data.headingText}</h1>
            
            {/* One */}
            <div className="flex flex-col items-center justify-between lg:space-x-[2rem] lg:flex-row xl:space-x-[7rem]">
                {/* image */}
                <div className=" block ml-auto mr-auto md:block md:ml-auto md:mr-auto">
                    <Image placeholder="blur" className='' width={ width! >= 769 ? 459: 350} height={width! >= 769 ? 459: 350} src={ width! >= 760 ? EnquiryImage : EnquiryImageMobile} alt="Ask Lucy anything"/>
                </div>
                {/* Text */}
                <div className="">
                    <div className="flex justify-center items-center">
                        <div className="md:text-center mt-4">
                            <h1 className="not-italic font-semibold text-3xl text-center text-indigo-500 md:not-italic md:font-extrabold md:text-4xl md:text-indigo-500 md:pb-[32px] md:w-[100%] md:text-center lg:text-center xl:text-left">{data.lucyFunctions[0].heading}</h1>
                            <p className="not-italic font-light text-base leading-10 text-center text-gray-900 mr-2 ml-2 md:not-italic md:font-light md:text-lg md:leading-10 md:h-40 md:w-[34rem] lg:text-center xl:text-left">{data.lucyFunctions[0].paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Two */}
            <div className="flex flex-col items-center justify-between lg:space-x-[2rem] lg:flex-row xl:space-x-[7rem]">
                {/* Text */}
                <div className="order-2 mt-4 md:block md:ml-auto md:mr-auto lg:order-1">
                    <div className="flex justify-center items-center">
                        <div>
                            <h1 className="h-24 not-italic font-bold text-3xl text-center text-black md:not-italic md:font-extrabold md:text-4xl md:mt-4 md:text-black md:pb-[32px] md:w-[100%] lg:mb-4 lg:text-center xl:text-left">{data.lucyFunctions[1].heading}</h1>
                            <p className="not-italic font-light text-base leading-10 text-center text-gray-900 mr-2 ml-2  md:not-italic md:font-light md:text-lg md:leading-10 md:h-40 md:w-[34rem] lg:text-center xl:text-left">{data.lucyFunctions[1].paragraph}</p>
                        </div>
                    </div>

                </div>
                {/* Image */}
                <div className=" order-1 block ml-auto mr-auto md:block md:ml-auto md:mr-auto lg:left-[0rem] lg:order-2 xl:left-[0rem]">
                    <Image placeholder="blur" width={ width! >= 769 ? 459: 350} height={width! >= 769 ? 459: 350} src={ width! >= 760 ? ReminderAndAppointmentImage : ReminderAndAppointmentImageMobile} alt="Lucy helps you set reminders and appointment"/>
                </div>
            </div>

            {/* Three */}
            <div className="flex flex-col items-center justify-between lg:space-x-[2rem] lg:flex-row xl:space-x-[7rem]">
                {/* Image */}
                <div className="block ml-auto mr-auto">
                    <Image placeholder="blur" width={ width! >= 769 ? 459: 350} height={width! >= 769 ? 459: 350}  src={ width! >= 760 ? BusinessAndCareerImage : BusinessAndCareerImageMobile } alt="Lucy helps you build your business and career"/>
                </div>
                {/* Text */}
                <div className="">
                    <div className="flex justify-center itens-center">
                        <div>
                            <h1 className="h-10 not-italic font-bold text-3xl text-center text-indigo-500 mt-4 md:not-italic md:font-extrabold md:text-4xl md:text-indigo-500 md:pb-[32px] md:text-center md:mb-8 md:w-[100%] lg:text-center xl:text-left">{data.lucyFunctions[2].heading}</h1>
                            <p className="h-40 not-italic font-light text-base leading-10 text-center text-gray-900 md:h-32 md:not-italic md:font-light md:text-lg md:leading-10 md:w-[34rem] lg:text-center xl:text-left">{data.lucyFunctions[2].paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Four */}
            <div className="flex flex-col items-center justify-between lg:space-x-[2rem] lg:flex-row xl:space-x-[7rem]">
                {/* Text */}
                <div className="lg:order-1 order-2">
                    <div className="flex justify-center items-center">
                        <div>
                            <h1 className="h-24 not-italic font-bold text-3xl text-center text-black mt-4 md:not-italic md:font-extrabold md:text-4xl md:text-center md:text-black md:pb-[32px] md:mt-[1rem] md:w-[100%] lg:text-center xl:text-left">{data.lucyFunctions[3].heading}</h1>
                            <p className="h-40 not-italic font-light text-base leading-10 text-center text-gray-900 md:not-italic md:font-light md:text-lg md:leading-10 md:text-center md:w-[34rem] lg:text-center xl:text-left lg:pl-[0rem] lg:pr-[4rem] ">{data.lucyFunctions[3].paragraph}</p>
                        </div>
                    </div>

                </div>
                {/* Image */}
                <div className="block ml-auto mr-auto md:block md:ml-auto md:mr-auto lg:order-2">
                    <Image placeholder="blur" width={ width! >= 769 ? 459: 350} height={width! >= 769 ? 459: 350} src={ width! >= 760 ? LearningAndAcademicsImage : LearningAndAcademicsImageMobile} alt="Lucy helps you with your learning and academic needs"/>
                </div>
            </div>

            <div className="md:mt-[2rem] cursor-pointer md:mb-[5rem]">
                <a target="_blank" href="https://t.me/lucy_one_bot">
                    <CallToActionButton text={data.testimonialButtonText} width={ width! >= 769 ?  buttonWidthDesktop: buttonWidthMobile }/>
                </a>  
            </div>
            

        </div>
    )

}

export default AppDetails;