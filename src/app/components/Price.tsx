import React from 'react'

type Props = {
    id: number;
    price: number;
    options?: {title: string; additionalPrice: number}[];
}

function Price({price, id, options}: Props) {
  return (
    <div>
        <h2>{price.toFixed(2)}</h2>

        <div className=''>
            {options?.map(option=>(
                <button key={option.title}> {option.title}</button>
            ))}
        </div>
        <div>
            <div>
                <span>Quantity</span>
                <div>
                    <button>{'<'}</button>
                    <span>1</span>
                    <button>{'>'}</button>
                </div>
            </div>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Price