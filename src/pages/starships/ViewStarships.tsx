import wretch from "wretch"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ViewContent } from "../../components/ViewContent";

export const ViewStarships = () => {
    const { id } = useParams()
    const [starship, setStarship] = useState<any>({ pilots: [] })
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getStarship = () => {
            setLoading(true)
            wretch(`${import.meta.env.VITE_BASE_URL}/starships/${id}`)
            .get()
            .json(json => {
                setStarship(json)
                setLoading(false)
            });
        }
        getStarship()
    }, []);

    return <>
        <div className="grid gap-20">
            {
                isLoading
                    ? <div className="w-full mx-auto text-center">Loading...</div>
                    : <ViewContent>
                        <div className="grid gap-7">
                            <h2 className="font-bold text-5xl text-black">{starship.name}</h2>
                            <div className="grid gap-1 content-start">
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Model: {starship.model}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Passengers: {starship.passengers}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Pilots: {starship.pilots.length}
                                </span>
                            </div>
                        </div>
                    </ViewContent>
            }
            </div>
    </>
}