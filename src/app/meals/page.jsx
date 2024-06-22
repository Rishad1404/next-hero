import Meals from '@/components/Meals';
import React from 'react';

export const metadata = {
    title: "Meals | Next Hero",
    description: "Meals Page",
  };

const MealsPage = () => {
    return (
        <div className='p-12 h-screen'>
           <h1 className='text-3xl font-semibold text-red-400'>Choose Your Meals</h1>
           <p>Choose meals of you by Searching......</p>
           <Meals/>
        </div>
    );
};

export default MealsPage;