interface ButtonProps {
    label: string
    onClick?: () => void
    [x:string]: any
}

export const Button: React.FC<ButtonProps> = (props) => {
    return <button {...props} onClick={props.onClick} className="bg-primary-100 text-white py-3 w-full rounded-md disabled:cursor-not-allowed">
        {props.label}
    </button>
}