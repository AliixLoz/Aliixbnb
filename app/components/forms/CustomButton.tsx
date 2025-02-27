interface CustomButtonProps{
    label: string;
    className: string;
    onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({label, className, onClick}) => {
    return(
        <div onClick={onClick} className={`w-full py-4 bg-pink-500 hover:bg-pink-800 text-white text-center rounded-xl transition cursor-pointer ${className}`}>
            {label}
        </div>
    )
}
export default CustomButton