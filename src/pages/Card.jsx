
import card from "../assets/img/card.png"
export default function Card() {
  return (
    <div className='card bg-[#080B13] '>
      <div className=' mb-[32px] w-full'>
        <div className=' flex items-center gap-10 md:gap-[60px] lg:gap-[80px] p-8 md:p-10  lg:p-[50px] w-full '>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[160px]">
             
          </div>
          </div>
        </div>
      </div> 
      <div>
        
      </div>
    </div>
  )
}
