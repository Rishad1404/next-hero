'use client';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search,setSearch]=useState("a");
    const [error,setError]=useState("");
    const [meals,setMeals]=useState([])
    const loadData=async ()=>{
        try{
            const res=await fetch (`www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data=await res.json();
            console.log(data.meals)
            setMeals(data.meals)
        }
        catch(error){
            setError('No Data Found')
        }
    }
    const handler=e=>{
        setSearch(e.target.value)
    }
    useEffect(()=>{
        loadData()
    },[])

    return (
        <div className='mt-5'>
        <input onChange={handler} type="text" className='p-4 outline-none border-transparent text-slate-900' placeholder='Search for meal' />
        <button onClick={()=>loadData()} className='bg-red-400 p-4'>Search</button>

        <div className='mt-12 grid grid-cols-3 gap-12'>
            {
                meals?.length > 0 && meals.map((meal)=>(
                    <div key={meal.ideMeal} className='border-2 p-4'>
                        <h6>{meal.strMeal}</h6>
                        <p>{meal.strInstructions}</p>
                    </div>
                ))
            }
            {
                error && <h6>No Data Found....</h6>
            }

            
        </div>
       </div>
    );
};

export default Meals;