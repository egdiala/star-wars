import wretch from "wretch"
import { useState, useEffect } from 'react'

export const Species = () => {
    const [species, setSpecies] = useState<Array<any>>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getSpecies = () => {
            setLoading(true)
            wretch(`${import.meta.env.VITE_BASE_URL}/species/`)
            .get()
            .json(json => {
                setSpecies(json.results)
                setLoading(false)
            });
        }
        getSpecies()
    }, []);

    return <>
            <div className="grid gap-8">
                <h1 className="text-grey-10 text-base">Species</h1>
                {
                    isLoading ?
                        <div className="w-full mx-auto text-center">Loading...</div>
                        :
                        <div className="w-full h-full left-auto relative right-auto border border-[#EAECF0] rounded shadow-none">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="text-grey-10 text-left font-medium text-base border-b border-b-grey-200">
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Classification</th>
                                        <th className="px-6 py-3">Eye colors</th>
                                        <th className="px-6 py-3">Hair Color</th>
                                        <th className="px-6 py-3">Height</th>
                                        <th className="px-6 py-3">Created</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !species.length ?
                                            <tr><td>No films found</td></tr>
                                            : 
                                            species.map((specie, index) => 
                                                <tr key={index.toString()} className="text-grey-500 text-left font-medium text-base border-b last:border-b-0 border-b-grey-200 hover:bg-white cursor-pointer bg-grey-10/5">
                                                    <td className="pl-6 py-6">{specie.name}</td>
                                                    <td className="pl-6 py-6">{specie.classification}</td>
                                                    <td className="pl-6 py-6">{specie.eye_colors}</td>
                                                    <td className="pl-6 py-6">{specie.hair_colors}</td>
                                                    <td className="pl-6 py-6">{specie.average_height} CM</td>
                                                    <td className="pl-6 py-6">{specie.created.split('T')[0]}</td>
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