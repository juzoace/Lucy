import ClickIcon from 'public/assets/icons/tick.png'
import Image from 'next/image';

interface componentProps {
    width: string;
    text: string
}

const CallToActionButton:React.FC<componentProps> = ({width, text}) => {

    const classNameValue = `hover:bg-indigo-800  m-3 ${width} bg-indigo-600 h-14 rounded-lg flex justify-center text-whiteText items-center not-italic font-semibold text-xl leading-8`;

    return (
        <div className={classNameValue}>
            <div className='mr-2'>{text}</div> <Image alt="" className='h-8' src={ClickIcon} width={30} height={16}/> 
        </div>
    )
    
}

export default CallToActionButton;