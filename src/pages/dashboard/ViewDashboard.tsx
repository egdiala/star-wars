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
                    : <ViewContent title={film.title} text={[film.director, film.producer, film.release_date]} />
            }
            </div>
    </>
}