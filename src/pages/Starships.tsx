import wretch from "wretch"
import { useState, useEffect } from 'react'
import DashboardLayout from "../layouts/DashboardLayout"

export const Starships = () => {
    const [starships, setStarships] = useState<Array<any>>([])
    const [isLoading, setLoading] = useState<boolean>(false)

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
        <DashboardLayout>
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
                                                <tr key={index.toString()} className="text-grey-500 text-left font-medium text-base border-b last:border-b-0 border-b-grey-200 hover:bg-white cursor-pointer bg-grey-10/5">
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
        </DashboardLayout>
    </>
}