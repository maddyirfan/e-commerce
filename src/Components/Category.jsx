import React from 'react'
import Men from '../assets/Images/men.jpg'
import Women from '../assets/Images/women.jpg'
import Kids from '../assets/Images/kids.jpg'

const Category = () => {
    const Categories =[
    {
    title:'Men',
    imageUrl: Men,
    },
    {
    title:'Women',
    imageUrl:Women,
    },
    {
     title:'Kids',
    imageUrl:Kids,
    }
];
  return (
    <div className='container mx-auto flex justify-center grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
        {Categories.map((Category,index) =>(
         <div key={index} className='relative h-70 transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={Category.imageUrl} alt=""  className=' h-60 w-120 object-cover rounded-lg shadow-md'/>
             <div className='absolute top-20 left-12'>
                <p className='text-xl font-bold'>{Category.title}</p>
                <p className='text-gray-600'>view All</p>
             </div>
         </div>
    ))}
    </div>
  )
}

export default Category