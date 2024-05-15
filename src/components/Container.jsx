import React from 'react'

export default function Container({children}) {
  return (
    <div className='container mx-auto px-[15px]'>
        <div className="flex flex-wrap -mx-[15px]">
            {children}
        </div>
    </div>
  )
}
