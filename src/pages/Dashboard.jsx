import React from 'react'
import dcicon from '../assets/img/dashboard-card-icon.png'
import CandlestickChart from '../components/CandlestickChart';
export default function Dashboard() {
  return (
    <div className='dashboard-main flex gap-8'>
      <div className="dashboard-main-left w-[389px] bg-gray-200 bg-[#080B13]">
         <div className="card p-6">
            <div className='flex items-center mb-2 md:mb-[10px]'>
              <img src={dcicon} alt="" className='h-5 w-5' /> <h5 className='ml-2 text-sm md:text-base lg:text-lg font-normal text-white'>TANT Finance</h5> <span className='ml-1 mt-2 text-[10px] md-[12px] text-[#8591B1] uppercase '>TANT</span>
            </div>
            <div className='flex gap-2'>
            <h1 className='text-base md:text-lg lg:text-xl xl:text-[29px] font-medium  leading-[42px] ' >$0.01</h1>
            <p className='flex items-center'><svg className='mr-1 text-[12px] md:text-sm font-normal text-[#16C784] ' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.0535 10.5469L8.20684 10.5469L11.9468 10.5469C12.5868 10.5469 12.9068 9.77354 12.4535 9.32021L9.00017 5.86687C8.44684 5.31354 7.54683 5.31354 6.9935 5.86687L5.68017 7.18021L3.54017 9.32021C3.0935 9.77354 3.4135 10.5469 4.0535 10.5469Z" fill="#16C784"/>
              </svg>
              0.92% (1d)
            </p>

            </div>
         </div>
      </div>
      <div className="dashboard-main-right flex-1 bg-gray-100">
        <CandlestickChart />
      </div>
    </div>
  )
}
