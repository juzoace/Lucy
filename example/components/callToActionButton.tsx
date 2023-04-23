import ClickIcon from 'public/assets/icons/envelopTick.png'
import Image from 'next/image';

interface componentProps {
    width: string;
}

const CallToActionButton:React.FC<componentProps> = ({width}) => {

    const classNameValue = `m-3 ${width} bg-indigo-600 h-14 rounded-lg flex justify-center text-whiteText items-center not-italic font-semibold text-xl leading-8`;

    return (
        <div className={classNameValue}>
            <div className='mr-2'>Get started for free</div> <Image className='h-8' src={ClickIcon} width={16} height={16}/> 
        </div>
    )
    
}

export default CallToActionButton;