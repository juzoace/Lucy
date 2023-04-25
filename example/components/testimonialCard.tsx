import Image from "next/image";
import Star from "public/assets/icons/star.png";

interface Testimonial {
    id: number,
    name: string;
    occupation: string;
    opinion: string;
    imgPath: string;
}

interface componentProps {
    testimonials: Testimonial[];
}

const TestimonialCard = ({testimonials}: componentProps) => {
    return (
        <>

            {testimonials.map((testimonial) => (
                
            
                    <div className="items-center m-4 md:w-[35rem] md:h-[20rem] md:mb-[6rem] lg:w-[20rem] lg:h-[22rem] lg:pl-2 bg-blue-100 " key={testimonial.id}>
                        
                        {/* Image, name and title container */}
                        <div className="flex flex-col mt-4 items-center md:flex-col md:justify-center md:text-center lg:text-left lg:flex-row lg:mt-8  lg:p-3 lg:justify-start">
                            <div className="block m-auto md:block md:m-auto grow-2 lg:m-0 lg:mr-3">
                                <Image src={testimonial.imgPath} width={50} height={50}/>
                            </div>
                            <div className="text-center lg:text-left grow-8">
                                <h1 className="text-base leading-6 text-black">{testimonial.name}</h1>
                                <p className="text-gray-500 font-normal text-base leading-6">{testimonial.occupation}</p>
                            </div>
                        </div>
 
                        {/* Star images container */}
                        <div className="flex align-center justify-center m-6 md:flex md:align-middle md:justify-center lg:m-0 lg:justify-start">
                            <div className="mr-2 lg:pl-[.5rem]">
                                <Image src={Star} width={15} height={15} />
                            </div>
                            <div className="mr-2">
                                <Image src={Star} width={15} height={15} />
                            </div>
                            <div className="mr-2">
                                <Image src={Star} width={15} height={15} />
                            </div>
                            <div className="mr-2">
                                <Image src={Star} width={15} height={15} />
                            </div>
                            <div>
                                <Image src={Star} width={15} height={15} />
                            </div>
                        </div>

                        <p className="not-italic font-light text-sm text-gray-900 block m-auto mb-4 text-center md:p-2 md:text-center lg:text-left" >
                            {testimonial.opinion}
                        </p>

                    </div>
               
            
            ))}

        </>
    )
}

export default TestimonialCard;