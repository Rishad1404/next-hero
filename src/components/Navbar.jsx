"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName=usePathname();
    const router=useRouter()
    const links=[
        {
            title:"About",
            path:'/about'
        },
        {
            title:"Posts",
            path:'/posts'
        },
        {
            title:"Meals",
            path:'/meals'
        },
    ]
    const handler=()=>{
        router.push('/login')
    }
    if(pathName.includes('dashboard')) return (
        <div className='bg-green-400'>
            Dashboard Layout
        </div>
    )
    return (
        <div>
            <nav className="bg-red-400 px-5 py-3 flex justify-between items-center">
                <h6 className='text-3xl'>Next <span className='text-cyan-400'>Meal</span></h6>
                <ul className='flex justify-between items-center space-x-4'>
                   {
                    links?.map((link) => <Link className={`${pathName === link.path && "text-blue-700"}`} key={link.path} href={link.path} >{link.title}</Link>)
                   }
                </ul>
                <button onClick={handler} className='bg-white text-cyan-400 p-3'>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;