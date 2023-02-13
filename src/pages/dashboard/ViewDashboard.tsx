import wretch from "wretch"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ViewContent } from "../../components/ViewContent";

export const ViewDashboard = () => {
    const { id } = useParams()
    const [film, setFilm] = useState<any>({})
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getFilm = () => {
            setLoading(true)
            wretch(`${import.meta.env.VITE_BASE_URL}/films/${id}`)
            .get()
            .json(json => {
                setFilm(json)
                setLoading(false)
            });
        }
        getFilm()
    }, []);

    return <>
        <div className="grid gap-20">
            {
                isLoading
                    ? <div className="w-full mx-auto text-center">Loading...</div>
                    : <ViewContent>
                        <div className="grid gap-7">
                            <h2 className="font-bold text-5xl text-black">{film.title}</h2>
                            <div className="grid gap-1 content-start">
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Director: {film.director}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Producer: {film.producer}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Release Date: {film.release_date}
                                </span>
                            </div>
                        </div>
                    </ViewContent>
            }
            </div>
    </>
}