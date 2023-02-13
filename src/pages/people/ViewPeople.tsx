import wretch from "wretch"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ViewContent } from "../../components/ViewContent";

export const ViewPeople = () => {
    const { id } = useParams()
    const [person, setPerson] = useState<any>({})
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getPerson = () => {
            setLoading(true)
            wretch(`${import.meta.env.VITE_BASE_URL}/people/${id}`)
            .get()
            .json(json => {
                setPerson(json)
                setLoading(false)
            });
        }
        getPerson()
    }, []);

    return <>
        <div className="grid gap-20">
            {
                isLoading
                    ? <div className="w-full mx-auto text-center">Loading...</div>
                    : <ViewContent title={person.name} image="" />
            }
            </div>
    </>
}