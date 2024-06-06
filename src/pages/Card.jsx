
import card from "../assets/img/card.png"
import ChartTwo from '../components/ChartTwo'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export default function Card() {
  const data = {
    labels: ['jan', 'Reb', 'Mar', 'Apr', 'May',"Jun",'Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: '#',
        data: ['0', '1','2','3','4','5','6','7','8','9','10','0'],
        borderWidth: 1,
        backgroundColor: [
          '#0257FF',
        
        ],
     
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  
  return (
    <div className='card  '>
      <div className=' mb-[32px] w-full '>
        <div className=' flex items-center gap-10 md:gap-[60px] lg:gap-[80px] p-8 md:p-10  lg:p-[50px] w-full bg-[#080B13] rounded-[20px] '>
         <div className='1/3'><img className='w-[415px] h-[261px]' src={card} alt="" /></div>
          <div className="2/3">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-12  lg:gap-x-[163px] gap-y-8 md:gap-y-10 lg:gap-y-[58px]  '>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >USD Load Volume Today</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold text-[#D9DCE4]'>$74,097,895,234</p>
              </div>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >Registrations</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold text-[#D9DCE4]'>100000</p>
              </div>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >Cards Issued</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold text-[#D9DCE4]'>105</p>
              </div>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >USD Load Volume Today</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold text-[#D9DCE4]'>$74,097,895,234</p>
              </div>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >Token Redistributed</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold text-[#D9DCE4]'>1.22%</p>
              </div>
              <div className="nnc">
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >Token Burnt</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold text-[#D9DCE4]'>20</p>
              </div>
          </div>
          </div>
        </div>
        <div className=' flex gap-[10px] md:gap-[20px] lg:gap-[30px] py-[18px] md:py-[20px]  lg:py-[30px] w-full'>
          <div className='w-6/12  p-3 md:p-5 lg:p-[30px] bg-[#080B13] rounded-[20px]'>
            <div className="line-chart">
              <h4 className="text-base md:text-lg lg:text-[23px] leading-[37px] font-medium text-[#A8ABB3]">Load Volume</h4>
              <div>
              <Bar data={data} options={options} />
              </div>
              
            </div>
          </div>
          <div className='w-6/12 p-3 md:p-5 lg:p-[30px] bg-[#080B13] rounded-[20px]'>
            <div className="chart-issu-chart">
              <h4>Card Issued</h4>
              <ChartTwo />
            </div>
          </div>
        </div>
      </div> 
      <div>
        
      </div>
    </div>
  )
}
