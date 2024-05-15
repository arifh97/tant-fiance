import { FaArrowUp } from "react-icons/fa6"
import { useState, useEffect } from 'react'
import { Progress } from "@nextui-org/react"

export default function BannerRight() {
  const endDate = "2024-06-18";
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className='pl-0 md:pl-6 lg:pl-8 xl:pl-14'>
      <div className='banner-inner bg-[#101012] rounded-3xl p-6 md:p-8'>
        <h4 className='text-xl lg:text-2xl leading-tight mb-4 lg:mb-6'>Buy TANT Token Now</h4>
        <div className="flex items-center -mx-3 mb-4">
          <div className="px-3 w-1/2">
            <div className="p-4 bg-[#18181A] rounded-3xl">
              <p className="uppercase mb-2 text-[#8E8C94]">STAGE 1 PRICE</p>
              <div className="flex items-center gap-2 flex-wrap justify-between">
                <strong className='text-white font-medium leading-tight text-lg lg:text-[28px]'>$ 0.01</strong>
                <div className="rounded-full text-center bg-[#00EEB5] bg-opacity-10 px-3 py-2 flex items-center gap-2 text-xl leading-tight text-[#00EEB5]">
                  <div className='w-5 h-5 flex-auto bg-[#00EEB5] rounded-full border-[5px] border-[#125345]'></div>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 w-1/2">
            <div className="p-4 bg-[#18181A] rounded-3xl">
              <p className="uppercase mb-2 text-[#8E8C94]">STAGE 1 PRICE</p>
              <div className="flex items-center gap-2 flex-wrap">
                <strong className='text-white font-medium leading-tight text-lg lg:text-[28px]'>$ 0.02</strong>
                <p className="text-base flex items-center gap-1 text-[#00EEB5]">
                  <FaArrowUp /> 26%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="progress relative" style={{ '--position': '53%' }}>
            <Progress
              size="sm"
              radius="full"
              color="main"
              classNames={{
                base: "",
                track: "h-7",
                indicator: "progress-bar",
                label: "tracking-wider font-medium text-default-600",
                value: "text-sm",
              }}
              value={53}
              showValueLabel={true}
            />
          </div>
          <p className="flex items-center fs-sm leading-relaxed justify-between mt-2">
            <span>Amount Raised</span>
            <span>$15,000,000</span>
          </p>
        </div>
        <div className="mb-6">
          <p className="text-center mb-4">Until Price Increase</p>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(timeLeft).map(([unit,value], index) => (
              <div className="text-center p-4 rounded-[20px] bg-[#18181A]" key={index}>
                <strong className="font-medium mb-2 block text-white text-[18px] md:text-xl lg:text-[28px]">{value}</strong>
                <p className="text-xs text-[#8D8C94]">{unit}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <p className="text-center rate">$1000 Now = $12,000 at Listing</p>
        </div>
      </div>
    </div>
  )
}
