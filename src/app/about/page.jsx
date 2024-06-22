import React from 'react';
import { Headland_One } from 'next/font/google';

const headland=Headland_One({weight:['400'],subsets:['latin']})

const getTime=async () =>{
    const res = await fetch("http://localhost:3000/time",{cache:'no-store'});
    const data=await res.json();
    return data.currentTime;
}

export const metadata = {
    title: {
        absolute:"About"
    },
    description: "About Page",
    keywords:['about','about page']
  };
const About = async() => {
    const currentTime=await getTime();
    return (
        <div className={`${headland.className} min-h-screen px-13 py-10`}>
            <h6 className='text-3xl'>About Page</h6>
            <h6>Time: {currentTime}</h6>
        </div>
    );
};

export default About;