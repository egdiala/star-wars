interface ViewContentProps {
    title: string
    image?: string
    [x:string]: any
}

export const ViewContent: React.FC<ViewContentProps> = (props) => {
    return <>
        <div className="flex items-start gap-7">
            <img src="https://static.wikia.nocookie.net/herofanon/images/f/f3/3f80bb41847ae380ee21d797ddfc0823.jpg" className="w-80 max-w-xs" />
            <div className="grid gap-7">
                <h2 className="font-bold text-5xl text-black">{props.title}</h2>
                <div className="grid gap-1 content-start">
                    {
                        props.text.map((text: string, index: number) => <span key={index.toString()} className="text-grey-500 text-base font-medium">{text}</span>)
                    }
                </div>
            </div>
        </div>
    </>
}