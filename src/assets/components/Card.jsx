import React from 'react'

export const Card = (props) => {
  const n = 3;
  return (
    <div className='relative max-w-sm h-auto overflow-hidden rounded-xl shadow-sm'>
    <div className='absolute inset-0 bg-gray-100/80 flex flex-col items-center justify-center'>
      <div className='flex flex-col -z-10'>
        {
          [...Array(n)].map((i) => <span className={`text-9xl font-bold uppercase break-normal text-${props.color}-500`} key={i}>{props.title}</span>)
          
        }
      </div>
    </div>
    <div className='z-10 relative backdrop-blur-2xl w-100 h-full p-6 text-gray-900'>
      <h1 className='text-2xl font-bold'>{props.title}</h1>
      <p className='text-gray-800 text-sm mt-3'>{props.description}</p>
    </div>
  </div>
  )
}
