import CallToActionButton from "./callToActionButton";
import TestimonialCard from "./testimonialCard";

function Testimonials() {

    const buttonWidth: string = `w-[300px]`;

    interface testimonial {
        id: number,
        name: string,
        occupation: string,
        opinion: string,
        imgPath: string
    }

    const data: testimonial[] = [
        {
           id: 0,
           name: "Erica Adebowale",
           occupation: "Content Creator",
           opinion: "I love how my AI assistant remembers my schedule preferences and can even make recommendations based on my habits. It's like having a personal concierge." ,
           imgPath: "/assets/images/erica.png"
        },
        {
           id: 1,
           name: "Kayode Adebayo",
           occupation: "Student, University of Lagos",
           opinion: "This AI assistant has been a game changer for my productivity. With it's ability to handle repetitive tasks, i can focus on the more important aspects of my job." ,
           imgPath: "/assets/images/kayode.png"
        },
        {
           id: 2,
           name: "Sandra John",
           occupation: "Product Designer",
           opinion: "I love how this AI integrates with all my devices seamlessly. It has become an essential part of my daily routine." ,
           imgPath: "/assets/images/sandra.png"
        },
        {
           id: 3,
           name: "Betty cooper",
           occupation: "Startup Founder",
           opinion: "I love how my AI assistant remembers my schedule, preferences and can even make recommendations based on my habits. It's like having a personal concierge. This AI assistant has been a game changer for my productivity. I can focus on the more important aspects of my job.",
           imgPath: "/assets/images/betty.png"
        }
    ];

    const testimonialButtonText: string = 'Get started for free'
    
    return (
        
        <div className="flex flex-col items-center justify-center">
            
            <h1 className="not-italic font-bold text-5xl text-black leading-[79px] mb-[30px]">Testimonials</h1>
            
            <p className="h-6 not-italic font-light text-lg leading-7 mb-[80px]">What users say about Lucy</p>
            
            <div className="flex flex-col md:flex-wrap lg:flex-row lg:justify-around ">
                <TestimonialCard testimonials={data}/>
            </div>

            <div className="flex flex-col justify-center items-center bg-gray-900 rounded-[12px] m-4 w-[90%] h-[25rem] md:w-[95%]">
                <h1 className="not-italic font-bold text-3xl text-center text-white leading-8 mb-[2rem] md:leading-10 lg:w-[35rem]">Experience the power of AI with our personal assistant</h1>
                <p className="h-20 not-italic font-light text-sm text-center text-white pl-5 pr-5">Our AI technology is designed to make your life easier by handling tasks, managing schedules and providing intelligent insights</p>
                <a target="_blank" href="https://t.me/lucy_one_bot">
                    <CallToActionButton text={testimonialButtonText} width={buttonWidth}/>
                </a> 
            </div>

        </div>
    )

}

export default Testimonials;