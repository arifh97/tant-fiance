
import logo from '../../assets/img/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { Avatar } from "@nextui-org/react";
import avatar from '../../assets/img/avatar.png'

export default function Header() {
  const location = useLocation();
  const title = location.pathname.split('/').join('');

  return (
    <div className='bg-[#090B12] px-5 md:px-7 lg:px-9 py-5 md:py-6 lg:py-7 flex items-center justify-between'>
      <h5 className='text-2xl font-medium text-white hidden md:block capitalize'>{title == "card" || title == "Card" || title == "CARD" ? "Card overview" : title}</h5>
      <Link className='d-block cursor-pointer md:hidden'>
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center ml-auto gap-3">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="50" rx="25" fill="#0D121B" />
          <g clipPath="url(#clip0_131_1128)">
            <path d="M20.7234 18.562L30.0568 19.7325L35.3386 15.4409L29.7867 13.1001L19.9732 13.3402L14.9014 16.0411L20.7234 18.562Z" fill="#7CFFF9" />
            <path d="M20.7236 18.562L18.3828 25.0744L31.8877 25.5245L29.3967 18.562H20.7236Z" fill="#00A5EC" />
            <path d="M29.3965 18.562L35.3385 15.4409L38.9999 19.3423L31.5572 25.1644L29.3965 18.562Z" fill="#00DBFF" />
            <path d="M14.9014 16.041L11 20.6327L18.3826 25.0743L20.7235 18.5619L14.9014 16.041Z" fill="#00DCFF" />
            <path d="M18.3828 25.0742L25.4353 37.2286L31.5575 25.1642L18.3828 25.0742Z" fill="#105BC4" />
            <path d="M11 20.6328L25.4352 37.2288L18.3826 25.0744L11 20.6328Z" fill="#2181E5" />
            <path d="M39 19.3423L25.4351 37.2287L31.5573 25.1643L39 19.3423Z" fill="#00AFFF" />
            <path d="M14.9014 16.0411L35.3386 15.4409L29.7867 13.1001L19.9732 13.3402L14.9014 16.0411Z" fill="#B6FFF9" />
            <path d="M18.3828 25.0744C18.3828 25.0744 18.893 21.8032 20.7237 18.562C20.2735 21.293 18.3828 25.0744 18.3828 25.0744Z" fill="#7CFFF9" />
            <path d="M29.3965 18.562C29.1264 20.2726 31.2272 24.8042 31.5572 25.1643C31.4673 22.9136 29.3965 18.562 29.3965 18.562Z" fill="#7CFFF9" />
          </g>
          <defs>
            <clipPath id="clip0_131_1128">
              <rect width="28" height="28" fill="white" transform="translate(11 11)" />
            </clipPath>
          </defs>
        </svg>
        <button>
          <Avatar radius="full"  className="border-2 border-[#272F43] outline-none rounded-full w-10 h-10 lg:w-[50px] lg:h-[50px]" src={avatar} />
        </button>
      </div>
    </div>
  )
}
