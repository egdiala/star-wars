import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import squares2x2Solid from '@iconify/icons-heroicons/squares-2x2-solid';

type Route = { path: string; name: string; color: string }

export const Sidebar = () => {
    const routes = [
        {
            path: '/starships',
            name: 'Starships',
            color: 'bg-primary-10'
        },
        {
            path: '/people',
            name: 'People',
            color: 'bg-pink'
        },
        {
            path: '/species',
            name: 'Species',
            color: 'bg-warning'
        },
    ] satisfies Route[]

    return <>
        <nav className="bg-primary-200 text-center flex flex-col h-screen overflow-y-hidden w-72 py-8 inset-y-0 items-center left-0 bottom-0 top-0 relative translate-x-0 break-all">
            <div className='grid w-full justify-items-center gap-8'>
                <img src='/assets/star-wars.png' className='w-28' />
                <div className="flex flex-col flex-grow items-center w-full gap-y-14 px-6">
                    <NavLink to={'/dashboard'} className='text-white font-semibold text-base flex items-center gap-4 w-full py-3 pl-6 rounded-md'>
                        <Icon icon={squares2x2Solid} className='text-2xl' />
                        Overview
                    </NavLink>
                    <div className='grid gap-2.5 w-full'>
                        {
                            routes.map((route, index) =>
                                <NavLink to={route.path} key={index.toString()} className='text-white font-semibold text-base flex items-center gap-4 w-full py-3 pl-6 rounded-md'>
                                    <div className={`w-4 h-4 rounded ${route.color}`} />
                                    {route.name}
                                </NavLink>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
}