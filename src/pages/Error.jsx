import React from 'react'
import CButton from '../components/CButton'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
        <h1 className='text-6xl fw-bold text-white text-center uppercase mb-10'>Opps Page not found</h1>
        <CButton><Link to="/">Back To Home</Link></CButton>
    </div>
  )
}
