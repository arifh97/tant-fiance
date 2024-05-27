import { FaArrowUp } from "react-icons/fa6"
import { Progress } from "@nextui-org/react"
import { Select, SelectItem } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { CButton } from './CAllComponent'
import { motion } from 'framer-motion'

import icon_1 from '../assets/img/coins/1.png'
import icon_2 from '../assets/img/coins/2.png'
import icon_3 from '../assets/img/coins/3.png'
import icon_4 from '../assets/img/coins/4.png'
import icon_5 from '../assets/img/coins/5.png'
import icon_6 from '../assets/img/coins/6.png'
import icon_7 from '../assets/img/coins/7.png'
import icon_8 from '../assets/img/coins/8.png'
import icon_9 from '../assets/img/coins/9.png'
import tant from '../assets/img/coins/tant.svg'
import sponsor from '../assets/img/sponsor.png'

export default function BannerRight() {
  // const endDate = "2024-06-18";
  // const calculateTimeLeft = () => {
  //   const difference = +new Date(endDate) - +new Date();
  //   let timeLeft = {};
  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60)
  //     };
  //   }
  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // });

  // accent methods
  const methods = [
    {
      value: 0,
      label: 'Crypto'
    },
    {
      value: 1,
      label: 'BitCoin'
    },
    {
      value: 2,
      label: 'Crypto'
    }
  ]
  const acceptMethods = [icon_1, icon_2, icon_3, icon_4, icon_5, icon_6, icon_7, icon_8, icon_9]
  return (
    <div className='pl-0 lg:pl-6 xl:pl-8'>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0, transition: { duration: .5, delay: 0.1 } }}
        viewport={{ once: true, amount: 0.2 }}
        className="banner-wrap">
        <div className='banner-inner bg-[#101012] rounded-xl md:rounded-3xl p-[18px] md:p-8'>
          <h4 className='text-lg lg:text-2xl leading-tight mb-4 lg:mb-6 text-center font-semibold'>Buy Now before next price increase</h4>
          <div className="flex flex-wrap items-center -mx-3 mb-4">
            <div className="px-3 w-full mb-3 md:mb-0 md:w-1/2">
              <div className="p-4 bg-[#18181A] rounded-2xl md:rounded-3xl">
                <p className="uppercase mb-2 text-[#8E8C94]">STAGE 1 PRICE</p>
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  <strong className='text-white font-medium leading-tight text-lg lg:text-[28px]'>$ 0.01</strong>
                  <div className="rounded-full text-center bg-[#00EEB5] bg-opacity-10 px-2 py-1 md:px-3 md:py-2 flex items-center gap-2 text-sm lg:text-xl leading-tight text-[#00EEB5]">
                    <div className='w-3 h-3 md:w-5 md:h-5 flex-auto bg-[#00EEB5] rounded-full border-3 md:border-5 border-[#125345]'></div>
                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 w-full md:w-1/2">
              <div className="p-4 bg-[#18181A] rounded-2xl md:rounded-3xl">
                <p className="uppercase mb-2 text-[#8E8C94]">NEXT STAGE PRICE</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <strong className='text-white font-medium leading-tight text-lg lg:text-[28px]'>$ 0.02</strong>
                  <p className="text-base flex items-center gap-1 text-[#00EEB5] md:min-h-[44px]">
                    <FaArrowUp /> 26%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-progress rounded-md lg:rounded-[10px] mb-6 p-[10px] md:p-4 lg:px-4 lg:py-5">
            <div className="progress relative" style={{ '--position': '53%' }}>
              <Progress
                size="sm"
                radius="full"
                color="main"
                classNames={{
                  base: "",
                  track: "h-4 md:h-5 lg:h-7 bg-white bg-opacity-[.24] border-[.5px] border-white border-opacity-[.28]",
                  indicator: "progress-bar",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-sm",
                }}
                value={53}
                showValueLabel={true}
                aria-labelledby="progress-label"
              />
            </div>
          </div>
          <div className="mb-4 lg:mb-6 flex items-center justify-center gap-2">
            <h4 className='text-lg lg:text-2xl leading-tight text-center font-semibold'>Listing Price - 0.12</h4>
            <div className="flex items-center gap-1 text-[#00EEB5] text-xs md:text-base lg:text-lg xl:text-xl">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.19609 10.7109C5.01175 10.5263 4.9082 10.2761 4.9082 10.0152C4.9082 9.75439 5.01175 9.50419 5.19609 9.31962L10.7742 3.7415C10.9588 3.55716 11.209 3.45361 11.4698 3.45361C11.7307 3.45361 11.9809 3.55716 12.1655 3.7415L17.7436 9.31962C17.9177 9.50619 18.0125 9.75307 18.0081 10.0082C18.0037 10.2633 17.9004 10.5068 17.72 10.6872C17.5395 10.8677 17.2961 10.971 17.0409 10.9754C16.7858 10.9798 16.5389 10.885 16.3523 10.7109L12.4542 6.81275V16.5777C12.4542 16.8388 12.3505 17.0892 12.1659 17.2738C11.9813 17.4584 11.7309 17.5621 11.4698 17.5621C11.2088 17.5621 10.9584 17.4584 10.7738 17.2738C10.5892 17.0892 10.4855 16.8388 10.4855 16.5777V6.81275L6.58734 10.7109C6.40277 10.8952 6.15257 10.9988 5.89171 10.9988C5.63085 10.9988 5.38066 10.8952 5.19609 10.7109Z" fill="#00EEB5" />
              </svg>
              712%
            </div>
          </div>
          {/* <div className="mb-4 md:mb-6">
            <p className="text-center mb-4">Until Price Increase</p>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div className="text-center p-3 md:p-4 rounded-xl md:rounded-[20px] bg-[#18181A]" key={index}>
                  <strong className="font-medium mb-1 md:mb-2 block text-white text-xl lg:text-[28px]">{value}</strong>
                  <p className="text-xs text-[#8D8C94]">{unit}</p>
                </div>
              ))}
            </div>
          </div> */}
          {/* <div className="mb-3 md:mb-7">
            <p className="text-center rate">$1000 Now = $12,000 at Listing</p>
          </div> */}
          <div className="">
            {/* <h6 className="mb-3 md:mb-4 text-center uppercase font-medium text-sm md:text-base">Connect Wallet</h6>
            <Select variant={'flat'} label="Choose Crypto" className="max-w-full custom-select mb-4" radius="md" size="md" key="" color="">
              {methods.map((methods) => (
                <SelectItem key={methods.value} value={methods.value}>
                  {methods.label}
                </SelectItem>
              ))}
            </Select> */}
            <div className="mb-4 md:mb-6">
              {/* <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
                <div className="px-3 w-full md:w-1/2 mb-2 md:mb-0">
                  <BannerInput placeholder="Enter amount" icon={amount_1} />
                </div>
                <div className="px-3 w-full md:w-1/2">
                  <BannerInput placeholder="TANT Amount" icon={amount_2} readonly />
                </div>
              </div> */}
              <div className="method-card relative z-[1] border-both mb-2 md:mb-4 flex items-center justify-between rounded-md p-3 md:p-5 border-[.6px] md:border border-[#222225]">
                <div className="flex-grow">
                  <p className="text-[10px] md:text-base leading-relaxed mb-2">You Pay</p>
                  <input type="text" id="amount" className="bg-transparent w-28 border-none outline-none text-white text-lg leading-relaxed" defaultValue={0} placeholder={0} />
                </div>
                <div className="flex-grow md:min-w-[180px]">
                  <Select variant={'flat'} label="Select Payment" className="max-w-full custom-select" key="" color="">
                    {methods.map((methods) => (
                      <SelectItem key={methods.value} value={methods.value}>
                        {methods.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="method-card relative z-[1] mb-2 md:mb-4 flex items-center justify-between rounded-md p-3 md:p-5 border-[.6px] md:border border-[#222225]">
                <div>
                  <p className="text-[10px] md:text-base leading-relaxed mb-2">You receive</p>
                  <input type="text" id="amount" className="bg-transparent border-none outline-none text-white text-lg leading-relaxed" defaultValue={0} placeholder={0} readOnly />
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 rounded-full bg-[#19191B] p-1 md:p-2">
                    <img className="h-4" src={tant} alt="" />
                    <span className="uppercase text-white text-[10px] md:text-sm leading-normal">tant</span>
                  </div>
                </div>
              </div>
              <CButton isLink={false} className="w-full text-center">Connect Wallet</CButton>
            </div>
            <div className="mb-3 md:h-6 lg:mb-8 flex items-center justify-center mt-5 md:mt-10 gap-3 md:gap-4 lg:gap-6">
              <p className="text-base md:text-xl lg:text-2xl leading-relaxed">Audited by</p>
              <img className="h-7 md:h-10 lg:h-auto" src={sponsor} alt="" />
            </div>
            <div className="flex items-center flex-wrap gap-3 justify-between">
              <div className="text-center md:text-start w-full md:w-auto">
                <h6 className="mb-0 text-base font-medium leading-tight">Supported Coins</h6>
              </div>
              <div className="flex flex-wrap justify-center mx-auto md:mx-auto md:justify-start md:flex-nowrap gap-[10px]">
                {acceptMethods.map((item, index) => (
                  <Avatar key={index} src={item} className="h-6 w-6 md:w-8 md:h-8" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
