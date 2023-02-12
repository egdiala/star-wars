interface TextInputProps {
    type: string
    label: string
    name: string
    error: string
    [x:string]: any
}

export const TextInput: React.FC<TextInputProps> = (props) => {
    return <>
        <div className="relative">
            <input {...props} type={props.type} name={props.name} placeholder={props.label} className="peer w-full rounded-md border border-grey-10 px-3 py-3 placeholder:text-transparent focus:border-primary-100 focus:outline-none" />
            <label htmlFor={props.name} className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-grey-100 font-medium transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-grey-100 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-grey-100">{props.label}</label>
            <small className="absolute bottom-0 left-0 -mb-5">{props.error}</small>
        </div>
    </>
}