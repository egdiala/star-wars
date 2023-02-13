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
                    : <ViewContent>
                        <div className="grid gap-7">
                            <h2 className="font-bold text-5xl text-black">{person.name}</h2>
                            <div className="grid gap-1 content-start">
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Gender: {person.gender}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Year of Birth: {person.birth_year}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Skin color: {person.skin_color}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Height: {person.height}CM
                                </span>
                            </div>
                        </div>
                    </ViewContent>
            }
            </div>
    </>
}