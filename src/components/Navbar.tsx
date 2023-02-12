import { Icon } from '@iconify/react';
import ellipsisHorizontalSolid from '@iconify/icons-heroicons/ellipsis-horizontal-solid';
import bellIcon from '@iconify/icons-heroicons/bell';

export const Navbar = () => {
    return <header className="absolute top-0 left-0 right-0 z-10 shadow-sm bg-white">
        <div className="flex flex-grow items-center py-5 px-10">
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