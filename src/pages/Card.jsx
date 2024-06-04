
import card from "../assets/img/card.png"


export default function Card() {
  return (
    <div className='card bg-[#080B13] '>
      <div className='max-w-[1490px] mb-[32px]'>
        <div className=' flex gap-10 md:gap-[60px] lg:gap-[80px] p-8 md:p-10  lg:p-[50px] '>
         <div className='w-4/12'><img className='w-[415px] h-[261px]' src={card} alt="" /></div>
          <div className='w-8/12'>
            <div className='flex items-center flex-wrap justify-between gap-[78px]'>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >USD Load Volume Today</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold'>$74,097,895,234</p>
              </div>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >Registrations</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold'>100000</p>
              </div>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >Cards Issued</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold'>105</p>
              </div>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >USD Load Volume Today</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold'>$74,097,895,234</p>
              </div>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >Token Redistributed</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold'>1.22%</p>
              </div>
              <div>
                <p className='text-sm md:text-base lg:text-lg text-[#6B7280] font-medium leading-6 mb-4' >Token Burnt</p>
                <p className='text-lg md:text-xl lg:text-[30px] leading-10 font-semibold'>20</p>
              </div>
              
            </div>
          </div>
        </div>
      </div> 
      <div>
        
      </div>
    </div>
  )
}
