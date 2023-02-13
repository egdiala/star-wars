interface ViewContentProps {
    title: string
    image: string
    [x:string]: any
}

export const ViewContent: React.FC<ViewContentProps> = (props) => {
    return <>
        <div className="flex items-start gap-7">
            <img src="https://static.wikia.nocookie.net/herofanon/images/f/f3/3f80bb41847ae380ee21d797ddfc0823.jpg" className="w-80 max-w-xs" />
            <div className="grid gap-7">
                <h2 className="font-bold text-5xl text-black">{props.title}</h2>
                <div></div>
                <span className="text-success-100 text-xs">{props.description}</span>
            </div>
        </div>
    </>
}