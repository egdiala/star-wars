interface InfoCardProps {
    title: string
    number: string
    description: string
    color: string
}

export const InfoCard: React.FC<InfoCardProps> = (props) => {
    return <>
        <div className="grid gap-6 px-5 py-6 bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-10">
                <h1 className="font-bold text-base text-grey-500">{props.title}</h1>
                <div className={`w-7 h-7 rounded ${props.color}`} />
            </div>
            <div className="grid gap-2">
                <h2 className="font-bold text-base text-grey-500">{props.number}</h2>
                <span className="text-success-100 text-xs">{props.description}</span>
            </div>
        </div>
    </>
}