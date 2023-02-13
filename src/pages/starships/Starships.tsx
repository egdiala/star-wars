import wretch from "wretch"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

export const Starships = () => {
    const navigate = useNavigate()
    const [starships, setStarships] = useState<Array<any>>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    const goToView = (url: string) => {
        let splitUrl = url.split('/')
        navigate(`/starships/view/${splitUrl[splitUrl.length - 2]}`)
    }

    useEffect(() => {
        const getStarships = () => {
            setLoading(true)
            wretch(`${import.meta.env.VITE_BASE_URL}/starships/`)
            .get()
            .json(json => {
                setStarships(json.results)
                setLoading(false)
            });
        }
        getStarships()
    }, []);

    return <>
            <div className="grid gap-8">
                <h1 className="text-grey-10 text-base">Starships</h1>
                {
                    isLoading ?
                        <div className="w-full mx-auto text-center">Loading...</div>
                        :
                        <div className="w-full h-full left-auto relative right-auto border border-[#EAECF0] rounded shadow-none">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="text-grey-10 text-left font-medium text-base border-b border-b-grey-200">
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Model</th>
                                        <th className="px-6 py-3">Class</th>
                                        <th className="px-6 py-3">Passenger</th>
                                        <th className="px-6 py-3">Length</th>
                                        <th className="px-6 py-3">Character</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !starships.length ?
                                            <tr><td>No films found</td></tr>
                                            : 
                                            starships.map((starship, index) => 
                                                <tr key={index.toString()} className="text-grey-500 text-left font-medium text-base border-b last:border-b-0 border-b-grey-200 hover:bg-white cursor-pointer bg-grey-10/5" onClick={() => goToView(starship.url)}>
                                                    <td className="pl-6 py-6">{starship.name}</td>
                                                    <td className="pl-6 py-6">{starship.model}</td>
                                                    <td className="pl-6 py-6">{starship.starship_class}</td>
                                                    <td className="pl-6 py-6">{starship.passengers}</td>
                                                    <td className="pl-6 py-6">{starship.length} Meters</td>
                                                    <td className="pl-6 py-6">{starship.pilots.length ? starship.pilots[0] : `No Pilot`}</td>
                                                </tr>
                                            )
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
    </>
}