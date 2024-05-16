import React from 'react'

export default function Container({children, rowClass="", className=""}) {
  return (
    <div className={`container mx-auto px-[15px] ${className}`}>
        <div className={`flex flex-wrap -mx-[15px] ${rowClass}`}>
            {children}
        </div>
    </div>
  )
}
