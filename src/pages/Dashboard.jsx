import React from 'react'
import dcicon from '../assets/img/dashboard-card-icon.png'
import CandlestickChart from '../components/CandlestickChart';
export default function Dashboard() {
  return (
    <div className='dashboard-main flex gap-8'>
      <div className="dashboard-main-left w-[389px] bg-gray-200">
         <div className="card">
            <div className='flex'>
              <img src={dcicon} alt="" /> <h5 className='ml-2'>TANT Finance</h5> <span className='ml-1'>TANT</span>
            </div>
         </div>
      </div>
      <div className="dashboard-main-right flex-1 bg-gray-100">
        <CandlestickChart />
      </div>
    </div>
  )
}
