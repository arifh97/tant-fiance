import React from 'react'

export default function Col({className,children}) {
  return (
    <div className={`${className} px-[15px]`}>
        {children}
    </div>
  )
}
