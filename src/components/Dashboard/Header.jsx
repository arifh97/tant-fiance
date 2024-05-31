import React from 'react'
import logo from '../../assets/img/logo.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const title = location.pathname.split('/').join('');

  return (
    <div className='bg-[#090B12] px-5 md:px-7 lg:px-9 py-5 md:py-6 lg:py-7 flex items-center justify-between'>
      <h5 className='text-2xl font-medium text-white hidden md:block capitalize'>{title == "card" || title == "Card"  || title == "CARD" ? "Card overview" : title}</h5>
      <Link className='d-block cursor-pointer md:hidden'>
        <img src={logo} alt="" />
      </Link>
    </div>
  )
}
