import { Container, Col } from './CAllComponent'
import CommonTitle from './CommonTitle'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { IoIosCheckmark } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

export default function RoadMap() {
  const roadmap = [
    {
      title: 'Phase',
      des: [
        {
          isChecked: true,
          label: "Foundation of the idea",
        },
        {
          isChecked: true,
          label: "Research",
        },
        {
          isChecked: true,
          label: "Blockchain Analysis",
        },
      ]
    },
    {
      title: 'Phase',
      des: [
        {
          isChecked: true,
          label: "Develop Whitepaper",
        },
        {
          isChecked: true,
          label: "Tokenomics",
        },
        {
          isChecked: true,
          label: "Contract Development",
        },
        {
          isChecked: true,
          label: "Token Audit",
        },
      ]
    },
    {
      title: 'Phase',
      des: [
        {
          isChecked: true,
          label: "Website Go Live",
        },
        {
          isChecked: true,
          label: "Presale Launch",
        },
        {
          isChecked: false,
          label: "Sellout Stage 1-12",
        },
        {
          isChecked: false,
          label: "TGE",
        },
        {
          isChecked: false,
          label: "Uniswap Launch",
        },
      ]
    },
    {
      title: 'Phase',
      des: [
        {
          isChecked: false,
          label: "Virtual Card Launch",
        },
        {
          isChecked: false,
          label: "Token Burn",
        },
        {
          isChecked: false,
          label: "Physical Card Launch",
        },
      ]
    },
    {
      title: 'Phase',
      des: [
        {
          isChecked: false,
          label: "Dex Development",
        },
        {
          isChecked: false,
          label: "Dex Launch",
        },
        {
          isChecked: false,
          label: "Ecosystem Development",
        },
      ]
    },
  ];

  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  }, []);
  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  };
  return (
    <div className="roadmap common-padding">
      <Container>
        <Col className="w-full">
          <div className="flex items-center gap-4 mb-10 md:mb-16 lg:mb-20">
            <div className="w-full md:w-9/12 lg:w-7/12">
              <CommonTitle className="!mb-0" title="Our Roadmap" des="TANT Finance pioneers DeFi with futuristic debit cards, smart gateways, and AI lending, setting new standards in secure transactions." />
            </div>
            <div className="w-full md:w-3/12 lg:w-5/12">
              <div className="flex items-center gap-4 md:gap-5 justify-end">
                <Button onClick={prevSlide} disabled={isPrevSlide} color="" className="bg-[#181819] hover:bg-primary w-10 h-10 md:w-14 md:h-14 lg:w-[68px] lg:h-[68px] min-w-0 rounded-full p-0 text-xl md:text-2xl lg:text-3xl text-white">
                  <FaAngleLeft />
                </Button>
                <Button onClick={nextSlide} disabled={isNextSlide} color="" className="bg-[#181819] hover:bg-primary w-10 h-10 md:w-14 md:h-14 lg:w-[68px] lg:h-[68px] min-w-0 rounded-full p-0 text-xl md:text-2xl lg:text-3xl text-white">
                  <FaAngleRight />
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col className="w-full">
          <Swiper
            className=''
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              481: {
                slidesPerView: 1.3,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1.8,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2.3,
              }
            }}
            centeredSlides={false}
            pagination={false}
            grabCursor={true}
            loop={false}
            onSlideChange={handleSlideChange}
            ref={swiperRef}
            modules={[Pagination]}
          >
            {roadmap.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="roadmap-item w-full bg-contain bg-left-top bg-[url('../img/roadmap-bg.png')] bg-[#0D0D0D] border border-[transparent] rounded-xl px-6 pb-8 pt-7 md:px-8 md:pt-10 lg:px-12 lg:pt-[60px] flex gap-6">
                  <div className='circle w-6 h-6 rounded-full bg-[#8B8B8B] border-5 border-[#343435] relative top-6'>
                    <div className="absolute bottom-full left-1/2">
                      <svg width="1" height="113" viewBox="0 0 1 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500005" y2="113" stroke="url(#paint0_linear_0_478)" />
                        <defs>
                          <linearGradient id="paint0_linear_0_478" x1="0" y1="0" x2="1.01049e-05" y2="116.139" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="title mb-4 md:mb-5 inline-block p-4 md:p-5 capitalize font-normal leading-[108%] text-2xl md:text-[32px] border-[#131315] border rounded-[10px] bg-[#F1F2F6] bg-opacity-5">
                      <span className='block'>{item.title} {index + 1}</span>
                    </div>
                    <ul>
                      {item.des.map((item, index) => (
                        <li className="flex items-center gap-5 mb-2" key={index}>
                          <span className='text-base w-6 h-6 rounded-full flex items-center justify-center bg-[#18181A] text-white'>
                            {item.isChecked?(<IoIosCheckmark />):''}
                          </span>
                          <span className={`text-xl leading-[160%] capitalize text-white ${item.isChecked?'line-through':''}`}>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Container>
    </div>
  )
}
