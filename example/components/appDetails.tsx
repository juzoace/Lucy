import Image from "next/image";
import EnquiryImage from 'icons/enquiry.png';
import EnquiryImageMobile from 'icons/enquiryMobile.png';
import ReminderAndAppointmentImage from 'icons/reminderAndAppointment.png';
import ReminderAndAppointmentImageMobile from 'icons/reminderAndAppointmentMobile.png';
import BusinessAndCareerImage from 'icons/businessAndCareer.png';
import BusinessAndCareerImageMobile from 'icons/businessAndCareerMobile.png';
import LearningAndAcademicsImage from 'icons/learningAndAcademics.png';
import LearningAndAcademicsImageMobile from 'icons/learningAndAcademicsMobile.png';
import CallToActionButton from './callToActionButton';
import useWindowSize from '../../utils/useWindowSize';


function AppDetails() {
    const { width }  = useWindowSize();
    const buttonWidth: string = `w-[380px]`;

    return (
        <div className="flex flex-col gap-[3.5rem] items-center justify-center mb-[120px] mr-2 ml-2"> 
            
            <h1 className="h-24 not-italic font-semibold text-3xl text-center text-black md:mb-4 md:not-italic md:font-bold md:text-5xl md:text-black md:text-center md:leading-[79px] ">Empower your life with AI technology</h1>
            
        {/* One */}
            <div className="flex flex-col items-center justify-between lg:space-x-[7rem] lg:flex-row">
                <div className="relative block ml-auto mr-auto md:block md:ml-auto md:mr-auto">
                    <Image className='lg:w-[34.18rem]' src={ width! >= 760 ? EnquiryImage : EnquiryImageMobile} alt="Ask Lucy anything"/>
                </div>
                <div className="relative lg:top-[-50px]">
                    <div className="flex justify-center items-center">
                        <div className="md:text-center mt-4">
                            <h1 className="not-italic font-semibold text-3xl text-center text-indigo-500 md:not-italic md:font-extrabold md:text-4xl md:text-indigo-500 md:pb-[32px] lg:text-left">Ask Lucy anything</h1>
                            <p className="md:not-italic md:font-light md:text-lg md:leading-10 md:h-40 not-italic font-light text-base leading-10 text-center text-gray-900 mr-2 ml-2 lg:text-left">Lucy can provide instant answers to your questions, and <br></br>even compose professional emails and personalised <br></br> messages that leave a lasting impressions on the recipent.</p>
                        </div>
                    </div>
                </div>
            </div>

        {/* Two */}
            <div className="flex flex-col items-center justify-between lg:space-x-[7rem] lg:flex-row">
                <div className="relative order-2 mt-4 md:block md:ml-auto md:mr-auto lg:top-[-8rem] lg:order-1">
                    <div className="flex justify-center items-center">
                        <div className="">
                            <h1 className="h-24 not-italic font-bold text-3xl text-center text-black lg:text-left md:not-italic md:font-extrabold md:text-4xl md:mt-4 md:text-black md:pb-[32px] lg:mb-4">Set reminders and <br className="lg:block hidden"></br> appointment</h1>
                            <p className="md:not-italic md:font-light md:text-lg md:leading-10 md:h-40 not-italic font-light text-base leading-10 text-center text-gray-900 mr-2 ml-2 lg:text-left">Lucy can provide instant answers to your questions, and <br></br> even compose professional emails and personalised <br></br> messages that leave a lasting impression on the recipent</p>
                        </div>
                    </div>

                </div>
                <div className="relative lg:left-[4.5rem] lg:top-[-8rem] lg:order-2 order-1 block ml-auto mr-auto md:block md:ml-auto md:mr-auto">
                    <Image src={ width! >= 760 ? ReminderAndAppointmentImage : ReminderAndAppointmentImageMobile} className="" alt="Lucy helps you set reminders and appointment"/>
                </div>
            </div>

        {/* Three */}
            <div className="flex flex-col items-center justify-between md:mt-12 lg:mt-0 lg:space-x-[7rem] lg:flex-row">
                <div className="relative md:top-[-90px] block ml-auto mr-auto md:mb-8 lg:mb-0 lg:top-[-16rem]">
                    <Image className='w-[547px] h-[547px]' src={ width! >= 760 ? BusinessAndCareerImage : BusinessAndCareerImageMobile } alt="Lucy helps you build your business and career"/>
                </div>
                <div className="relative md:top-[-120px] lg:top-[-18rem]">
                    <div className="flex justify-center itens-center">
                        <div>
                            <h1 className="h-10 not-italic font-bold text-3xl text-center text-indigo-500 mt-4 md:not-italic md:font-extrabold md:text-4xl md:text-indigo-500 md:pb-[32px] md:text-center md:mb-8 lg:text-left">Business and Career</h1>
                            <p className="h-40 not-italic font-light text-base leading-10 text-center text-gray-900 md:h-32 md:not-italic md:font-light md:text-lg md:leading-10 lg:text-left">Let's work together on your business, career, or personal<br></br> growth. I can help with launching/growing businesses,<br></br> career upskilling, strategic planning, and more!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Four */}
            <div className="flex flex-col items-center justify-between mt-4 md:mt-1 lg:flex-row">
                <div className="relative lg:order-1 order-2 lg:top-[-22rem]">
                    <div className="flex justify-center items-center">
                        <div>
                            <h1 className="h-24 not-italic font-bold text-3xl text-center text-black mt-4 md:not-italic md:font-extrabold md:text-4xl md:text-center md:text-black md:pb-[32px] lg:text-left">Learning and Academics</h1>
                            <p className="md:not-italic md:font-light md:text-lg md:leading-10  h-40 not-italic font-light text-base leading-10 text-center text-gray-900 lg:text-left">Whether you need help with academics, tech career<br></br> transition, essay writing, research papers, study tips, exam <br></br> prep, homework, or want to learn a new topic, i'm here for you.</p>
                        </div>
                    </div>

                </div>
                <div className="relative block ml-auto mr-auto md:block md:ml-auto md:mr-auto lg:order-2 lg:top-[-26rem] lg:left-[7rem]">
                    <Image src={ width! >= 760 ? LearningAndAcademicsImage : LearningAndAcademicsImageMobile} alt="Lucy helps you with your learning and academic needs"/>
                </div>
            </div>

            <div className="relative lg:top-[-18rem]">
                <CallToActionButton width={buttonWidth}/>
            </div>
            

        </div>
    )

}

export default AppDetails;