import wretch from "wretch"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ViewContent } from "../../components/ViewContent";

export const ViewSpecies = () => {
    const { id } = useParams()
    const [specie, setSpecie] = useState<any>({ })
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getSpecie = () => {
            setLoading(true)
            wretch(`${import.meta.env.VITE_BASE_URL}/species/${id}`)
            .get()
            .json(json => {
                setSpecie(json)
                setLoading(false)
            });
        }
        getSpecie()
    }, []);

    return <>
        <div className="grid gap-20">
            {
                isLoading
                    ? <div className="w-full mx-auto text-center">Loading...</div>
                    : <ViewContent>
                        <div className="grid gap-7">
                            <h2 className="font-bold text-5xl text-black">{specie.name}</h2>
                            <div className="grid gap-1 content-start">
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Designation: {specie.designation}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Language: {specie.language}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Eye Colors: {specie.eye_colors}
                                </span>
                                <span className="font-medium text-base text-grey-500 capitalize">
                                    Average Lifespan: {specie.average_lifespan}
                                </span>
                            </div>
                        </div>
                    </ViewContent>
            }
            </div>
    </>
}