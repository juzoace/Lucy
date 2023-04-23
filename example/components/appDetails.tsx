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
    const buttonWidth: string = `w-[380px]`;

    return (
        <div className="flex flex-col gap-[3.5rem] items-center justify-center mb-[0px] mr-2 ml-2"> 
            
            <h1 className="h-24 not-italic font-semibold text-3xl text-center text-black md:mb-4 md:not-italic md:font-bold md:text-5xl md:text-black md:text-center md:leading-[79px] ">Empower your life with AI technology</h1>
            
        {/* One */}
            <div className="flex flex-col items-center justify-between lg:space-x-[2rem] lg:flex-row xl:space-x-[7rem]">
                <div className="relative block ml-auto mr-auto md:block md:ml-auto md:mr-auto">
                    <Image className='' width={ width! >= 769 ? 459: 350} height={width! >= 769 ? 459: 350} src={ width! >= 760 ? EnquiryImage : EnquiryImageMobile} alt="Ask Lucy anything"/>
                </div>
                <div className="relative lg:top-[-50px]">
                    <div className="flex justify-center items-center">
                        <div className="md:text-center mt-4">
                            <h1 className="not-italic font-semibold text-3xl text-center text-indigo-500 md:not-italic md:font-extrabold md:text-4xl md:text-indigo-500 md:pb-[32px] lg:text-center xl:text-left">Ask Lucy anything</h1>
                            <p className="not-italic font-light text-base leading-10 text-center text-gray-900 mr-2 ml-2 md:not-italic md:font-light md:text-lg md:leading-10 md:h-40  lg:text-center xl:text-left">Lucy can provide instant answers to your questions, and <br></br>even compose professional emails and personalised <br></br> messages that leave a lasting impressions on the recipent.</p>
                        </div>
                    </div>
                </div>
            </div>

        {/* Two */}
            <div className="flex flex-col items-center justify-between lg:space-x-[2rem] lg:flex-row xl:space-x-[7rem]">
                <div className="relative order-2 mt-4 md:block md:ml-auto md:mr-auto lg:order-1 xl:top-[-8rem] ">
                    <div className="flex justify-center items-center">
                        <div className="">
                            <h1 className="h-24 not-italic font-bold text-3xl text-center text-black md:not-italic md:font-extrabold md:text-4xl md:mt-4 md:text-black md:pb-[32px] lg:mb-4 lg:text-center xl:text-left">Set reminders and <br className="lg:block hidden"></br> appointment</h1>
                            <p className="not-italic font-light text-base leading-10 text-center text-gray-900 mr-2 ml-2  md:not-italic md:font-light md:text-lg md:leading-10 md:h-40 lg:text-center xl:text-left">Lucy can provide instant answers to your questions, and <br></br> even compose professional emails and personalised <br></br> messages that leave a lasting impression on the recipent</p>
                        </div>
                    </div>

                </div>
                <div className="relative order-1 block ml-auto mr-auto md:block md:ml-auto md:mr-auto lg:left-[0rem] lg:order-2 xl:left-[0rem] xl:top-[-8rem]">
                    <Image width={ width! >= 769 ? 459: 350} height={width! >= 769 ? 459: 350} src={ width! >= 760 ? ReminderAndAppointmentImage : ReminderAndAppointmentImageMobile} className="" alt="Lucy helps you set reminders and appointment"/>
                </div>
            </div>

        {/* Three */}
            <div className="flex flex-col items-center justify-between md:mt-12 lg:mt-0 lg:space-x-[2rem] lg:flex-row xl:space-x-[7rem]">
                <div className="relative block ml-auto mr-auto md:top-[-90px] md:mb-8 lg:mb-0 lg:top-[0rem] xl:top-[-16rem]">
                    <Image width={ width! >= 769 ? 459: 350} height={width! >= 769 ? 459: 350} className=''  src={ width! >= 760 ? BusinessAndCareerImage : BusinessAndCareerImageMobile } alt="Lucy helps you build your business and career"/>
                </div>
                <div className="relative md:top-[-120px] lg:top-[-0rem] xl:top-[-18rem] ">
                    <div className="flex justify-center itens-center">
                        <div>
                            <h1 className="h-10 not-italic font-bold text-3xl text-center text-indigo-500 mt-4 md:not-italic md:font-extrabold md:text-4xl md:text-indigo-500 md:pb-[32px] md:text-center md:mb-8 lg:text-center xl:text-left ">Business and Career</h1>
                            <p className="h-40 not-italic font-light text-base leading-10 text-center text-gray-900 md:h-32 md:not-italic md:font-light md:text-lg md:leading-10 lg:text-center xl:text-left">Let's work together on your business, career, or personal<br></br> growth. I can help with launching/growing businesses,<br></br> career upskilling, strategic planning, and more!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Four */}
            <div className="flex flex-col items-center justify-between mt-4 md:mt-[-6rem] lg:mt-[0] lg:flex-row">
                <div className="relative lg:order-1 order-2 lg:top-[0rem] xl:top-[-22rem]">
                    <div className="flex justify-center items-center">
                        <div>
                            <h1 className="h-24 not-italic font-bold text-3xl text-center text-black mt-4 md:not-italic md:font-extrabold md:text-4xl md:text-center md:text-black md:pb-[32px] md:mt-[1rem] lg:text-center xl:text-left">Learning and Academics</h1>
                            <p className="h-40 not-italic font-light text-base leading-10 text-center text-gray-900 md:not-italic md:font-light md:text-lg md:leading-10 md:text-left lg:text-left xl:text-left lg:pl-[0rem] lg:pr-[2rem]">Whether you need help with academics, tech career<br></br> transition, essay writing, research papers, study tips, exam <br></br> prep, homework, or want to learn a new topic, i'm here for you.</p>
                        </div>
                    </div>

                </div>
                <div className="relative block top-[rem] ml-auto mr-auto md:block md:ml-auto md:mr-auto md:top-[0rem] lg:order-2 lg:top-[-1rem] lg:left-[-1rem] xl:top-[-25rem] xl:left-[2rem]">
                    <Image width={ width! >= 769 ? 459: 350} height={width! >= 769 ? 459: 350} src={ width! >= 760 ? LearningAndAcademicsImage : LearningAndAcademicsImageMobile} alt="Lucy helps you with your learning and academic needs"/>
                </div>
            </div>

            <div className="relative md:top-[-1rem] md:mb-[5rem] lg:top-[-2rem] xl:top-[-10rem]">
                <a href="https://t.me/lucy_one_bot">
                    <CallToActionButton width={buttonWidth}/>
                </a>  
            </div>
            

        </div>
    )

}

export default AppDetails;