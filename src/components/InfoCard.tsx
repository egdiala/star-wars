export interface InfoCardProps {
    title: string
    number: string
    description: string
    color: string
}

export const InfoCard: React.FC<InfoCardProps> = (props) => {
    return <>
        <div className="grid gap-6 h-fit px-5 py-6 bg-white drop-shadow-lg rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-28">
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