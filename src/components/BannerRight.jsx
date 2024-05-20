import { FaArrowUp } from "react-icons/fa6"
import { useState, useEffect } from 'react'
import { Progress } from "@nextui-org/react"
import { Select, SelectItem } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { CButton } from './CAllComponent'
import BannerInput from "./BannerInput";
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
import amount_1 from '../assets/img/coins/3.png'
import amount_2 from '../assets/img/coins/tant.svg'

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
        className='banner-inner bg-[#101012] rounded-xl md:rounded-3xl p-5 md:p-8'>
        <h4
          className='text-lg lg:text-2xl leading-tight mb-4 lg:mb-6'>Buy TANT Token Now</h4>
        <div
          className="flex flex-wrap items-center -mx-3 mb-4">
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
        <div
          className="mb-6">
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
              aria-labelledby="progress-label"
            />
          </div>
          <p className="flex items-center fs-sm leading-relaxed justify-between mt-2">
            <span>Amount Raised</span>
            <span>$15,000,000</span>
          </p>
        </div>
        <div
          className="mb-4 md:mb-6">
          <p className="text-center mb-4">Until Price Increase</p>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div className="text-center p-3 md:p-4 rounded-xl md:rounded-[20px] bg-[#18181A]" key={index}>
                <strong className="font-medium mb-1 md:mb-2 block text-white text-xl lg:text-[28px]">{value}</strong>
                <p className="text-xs text-[#8D8C94]">{unit}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mb-3 md:mb-7">
          <p className="text-center rate">$1000 Now = $12,000 at Listing</p>
        </div>
        <div
          className="">
          <h6 className="mb-3 md:mb-4 text-center uppercase font-medium text-sm md:text-base">Connect Wallet</h6>
          <Select variant={'flat'} label="Choose Crypto" className="max-w-full custom-select mb-4" radius="md" size="md" key="" color="">
            {methods.map((methods) => (
              <SelectItem key={methods.value} value={methods.value}>
                {methods.label}
              </SelectItem>
            ))}
          </Select>
          <div className="mb-4">
            <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
              <div className="px-3 w-full md:w-1/2 mb-2 md:mb-0">
                <BannerInput placeholder="Enter amount" icon={amount_1} />
              </div>
              <div className="px-3 w-full md:w-1/2">
                <BannerInput placeholder="TANT Amount" icon={amount_2} readonly />
              </div>
            </div>
            <CButton isLink={false} className="w-full text-center">Connect Wallet</CButton>
          </div>
          <div className="flex items-center flex-wrap gap-3 justify-between">
            <div>
              <h6 className="mb-0 text-base font-medium leading-tight">Supported Coins</h6>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-[10px]">
              {acceptMethods.map((item, index) => (
                <Avatar key={index} src={item} className="w-8 h-8" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
