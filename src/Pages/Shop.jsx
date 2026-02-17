import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard  from '../Components/ProductCard'

const Shop = () => {
  const products = useSelector(state => state.product)
  return (
    <div>
        <div className='container mx-auto py-12 md:px-16 lg:px-24'>
            <h2 className='text-2xl font-bond mb-6 text-center'>shop</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'></div>  
            {products.products.map(((product)=>(
              <productcard product={product}/>
             )))}
            </div>
    </div>
  )
}

export default Shop