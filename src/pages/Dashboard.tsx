import wretch from "wretch"
import { useState, useEffect } from 'react'
import { InfoCard, InfoCardProps } from "../components/InfoCard"
import DashboardLayout from "../layouts/DashboardLayout"

export const Dashboard = () => {
    const [films, setFilms] = useState<Array<any>>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getFilms = () => {
            setLoading(true)
            wretch(`${import.meta.env.VITE_BASE_URL}/films/`)
            .get()
            .json(json => {
                setFilms(json.results)
                setLoading(false)
            });
        }
        getFilms()
    }, []);
    
    const cards = [
        {
            title: 'Films',
            number: '200',
            description: '20 More than than yesterday',
            color: 'bg-success-50'
        },
        {
            title: 'Starship',
            number: '200',
            description: '20 More than than yesterday',
            color: 'bg-primary-10'
        },
        {
            title: 'People',
            number: '200',
            description: '20 More than than yesterday',
            color: 'bg-pink'
        },
        {
            title: 'Species',
            number: '200',
            description: '20 More than than yesterday',
            color: 'bg-warning'
        },
    ] satisfies InfoCardProps[]

    return <>
        <DashboardLayout>
            <div className="grid gap-20">
                <div className="flex items-center gap-14">
                    {
                        cards.map((card, index) =>
                            <InfoCard key={index.toString()} title={card.title} number={card.number} description={card.description} color={card.color} />
                        )
                    }
                </div>
                <div className="grid gap-8">
                    <h1 className="text-grey-10 text-base">Films</h1>
                    {
                        isLoading ?
                            <div className="w-full mx-auto text-center">Loading...</div>
                            :
                            <div className="w-full h-full left-auto relative right-auto border border-[#EAECF0] rounded shadow-none">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className="text-grey-10 text-left font-medium text-base border-b border-b-grey-200">
                                            <th className="px-6 py-3">Film Title</th>
                                            <th className="px-6 py-3">Release Date</th>
                                            <th className="px-6 py-3">Director</th>
                                            <th className="px-6 py-3">Producer</th>
                                            <th className="px-6 py-3">Episode ID</th>
                                            <th className="px-6 py-3">Character</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            !films.length ?
                                                <tr><td>No films found</td></tr>
                                                : 
                                                films.map((film, index) => 
                                                    <tr key={index.toString()} className="text-grey-500 text-left font-medium text-base border-b last:border-b-0 border-b-grey-200 hover:bg-white cursor-pointer bg-grey-10/5 rounded-md">
                                                        <td className="pl-6 py-6">{film.title}</td>
                                                        <td className="pl-6 py-6">{film.release_date}</td>
                                                        <td className="pl-6 py-6">{film.director}</td>
                                                        <td className="pl-6 py-6">{film.producer}</td>
                                                        <td className="pl-6 py-6">{film.episode_id}</td>
                                                        <td className="pl-6 py-6">{film.characters[0]}</td>
                                                    </tr>
                                                )
                                        }
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>
        </DashboardLayout>
    </>
}