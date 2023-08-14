import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl'>Pizzas kevin</Link>
      <p> TODOS LOS DERECHOS RESERVADOS</p>
    </div>
  )
}

export default Footer