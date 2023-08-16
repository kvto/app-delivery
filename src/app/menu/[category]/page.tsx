import { pizzas } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className="flex text-red-500">
      {pizzas.map((item) => (
        <Link className='w-full h-[600vh] border-r-2 border-b-2 border-red-500' href={`/product/${item.id}`} key={item.id}>

           {item.img && (
            <div className='relative'>
              <Image src={item.img} alt="" fill/>
            </div>
           )}
        </Link> 
      ))}
    </div>
  )
}

export default CategoryPage