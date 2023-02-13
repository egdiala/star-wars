import { Icon } from '@iconify/react';
import bellIcon from '@iconify/icons-heroicons/bell';
import chevronLeft from '@iconify/icons-heroicons/chevron-left';
import { useNavigate, useLocation } from 'react-router-dom';
import ellipsisHorizontalSolid from '@iconify/icons-heroicons/ellipsis-horizontal-solid';

export const Navbar = () => {
    const route = useLocation()
    const navigate = useNavigate()
    
    return <header className="absolute top-0 left-0 right-0 z-10 shadow-sm bg-white">
        <div className="flex flex-grow items-center py-5 px-10">
            {
                !route.pathname.split('/').includes('view')
                    ? <></>
                    :
                        <button type='button' className='flex gap-2 items-center text-base text-grey-10' onClick={() => navigate(-1)}>
                            <Icon icon={chevronLeft} />
                            Back
                        </button>
            }
            <div className="flex flex-wrap gap-6 w-fit items-center justify-end ml-auto">
                <Icon icon={bellIcon} className='text-grey-700 font-bold text-2xl' />
                <hr className='w-6 rotate-90 border-grey-200' />
                <div className="flex items-center gap-6">
                    <img src='/assets/account.svg'/>
                    <span className="font-normal text-base text-grey-400">John Doe</span>
                </div>
                <Icon icon={ellipsisHorizontalSolid} className='text-grey-300 font-bold text-2xl' />
            </div>
        </div>
    </header>
}