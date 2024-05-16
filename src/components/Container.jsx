import React from 'react'

export default function Container({children, rowClass=""}) {
  return (
    <div className='container mx-auto px-[15px]'>
        <div className={`flex flex-wrap -mx-[15px] ${rowClass}`}>
            {children}
        </div>
    </div>
  )
}
