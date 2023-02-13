import wretch from "wretch"
import { useState, useEffect } from 'react'
import DashboardLayout from "../layouts/DashboardLayout"

export const People = () => {
    const [people, setPeople] = useState<Array<any>>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getPeople = () => {
            setLoading(true)
            wretch(`${import.meta.env.VITE_BASE_URL}/people/`)
            .get()
            .json(json => {
                setPeople(json.results)
                setLoading(false)
                console.log(json)
            });
        }
        getPeople()
    }, []);

    return <>
        <DashboardLayout>
            <div className="grid gap-8">
                <h1 className="text-grey-10 text-base">People</h1>
                {
                    isLoading ?
                        <div className="w-full mx-auto text-center">Loading...</div>
                        :
                        <div className="w-full h-full left-auto relative right-auto border border-[#EAECF0] rounded shadow-none">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="text-grey-10 text-left font-medium text-base border-b border-b-grey-200">
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Birth year</th>
                                        <th className="px-6 py-3">Gender</th>
                                        <th className="px-6 py-3">Hair Color</th>
                                        <th className="px-6 py-3">Height</th>
                                        <th className="px-6 py-3">Created</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !people.length ?
                                            <tr><td>No films found</td></tr>
                                            : 
                                            people.map((person, index) => 
                                                <tr key={index.toString()} className="text-grey-500 text-left font-medium text-base border-b last:border-b-0 border-b-grey-200 last:border-b-grey-200">
                                                    <td className="pl-6 py-6">{person.name}</td>
                                                    <td className="pl-6 py-6">{person.birth_year}</td>
                                                    <td className="pl-6 py-6">{person.gender}</td>
                                                    <td className="pl-6 py-6">{person.hair_color}</td>
                                                    <td className="pl-6 py-6">{person.height} CM</td>
                                                    <td className="pl-6 py-6">{person.created.split('T')[0]}</td>
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