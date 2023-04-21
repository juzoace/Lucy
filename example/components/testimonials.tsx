import Image from "next/image";
import CallToActionButton from "./callToActionButton";

function Testimonials() {

    const buttonWidth: string = `w-[300px]`;

    const data = [

    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="not-italic font-bold text-5xl text-black leading-[79px] mb-[30px]">Testimonials</h1>
            <p className="w-56 h-6 not-italic font-light text-lg leading-7 mb-[80px]">What users say about Lucy</p>
            <div className="flex flex-col justify-center items-center bg-gray-900 rounded-[12px]">
                <h1>Experience the power of AI with our personal assistant</h1>
                <p>Our AI technology is designed to make your life easier by handling tasks, managing schedules and providing intelligent insights</p>
                <CallToActionButton width={buttonWidth}/>
            </div>
        </div>
    )

}

export default Testimonials;