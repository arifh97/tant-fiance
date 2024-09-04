import { useState } from 'react'
import { Container, Col, CButton } from './CAllComponent'
import CommonTitle from './CommonTitle'
import main_icon from '../assets/img/coins/tant.svg'
import { LuCopy, LuCopyCheck } from "react-icons/lu"
import img from '../assets/img/sponsor.png'
import { motion } from 'framer-motion'
import BuyButton from './BuyButton';
import pdf from '../assets/whitepaper.pdf'

export default function Specification() {
  const base_icon = `<svg width="159" height="58" viewBox="0 0 159 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_569)">
                    <path d="M6.57889 36.897C6.80988 36.666 7.1275 36.5312 7.46436 36.5312H38.013C38.5712 36.5312 38.8503 37.205 38.4557 37.5996L32.4211 43.6342C32.1901 43.8652 31.8724 44 31.5356 44H0.986978C0.428749 44 0.149634 43.3262 0.544244 42.9316L6.57889 36.897Z" fill="url(#paint0_linear_1_569)"/>
                    <path d="M6.57825 14.3657C6.81887 14.1347 7.13648 14 7.46372 14H38.0123C38.5706 14 38.8497 14.6737 38.4551 15.0683L32.4204 21.103C32.1894 21.334 31.8718 21.4687 31.5349 21.4687H0.986337C0.428108 21.4687 0.148993 20.795 0.543603 20.4004L6.57825 14.3657Z" fill="url(#paint1_linear_1_569)"/>
                    <path d="M32.4211 25.5592C32.1901 25.3282 31.8724 25.1934 31.5356 25.1934H0.986978C0.428749 25.1934 0.149634 25.8671 0.544244 26.2618L6.57889 32.2964C6.80988 32.5274 7.1275 32.6621 7.46436 32.6621H38.013C38.5712 32.6621 38.8503 31.9884 38.4557 31.5938L32.4211 25.5592Z" fill="url(#paint2_linear_1_569)"/>
                    </g>
                    <g filter="url(#filter0_b_1_569)">
                    <path d="M68.6626 35.836C68.6626 39.94 65.3146 43.36 59.3026 43.36C53.2906 43.36 49.7626 40.012 49.5106 35.116H52.2466C52.4986 38.788 54.8026 41.164 59.2666 41.164C62.9386 41.164 65.8186 39.292 65.8186 36.196C65.8186 33.532 64.3066 32.308 60.6346 31.552L57.3586 30.904C53.9386 30.22 50.3386 28.636 50.3386 24.136C50.3386 19.996 53.9746 16.792 59.1226 16.792C64.1626 16.792 68.0506 19.96 68.3386 24.892H65.5666C65.3866 21.472 62.8666 18.988 59.1586 18.988C55.1986 18.988 53.0746 21.4 53.0746 23.992C53.0746 27.052 55.6666 27.988 58.5466 28.564L61.8226 29.248C66.1786 30.148 68.6626 31.948 68.6626 35.836ZM81.1034 43.36C75.8834 43.36 72.1034 39.22 72.1034 33.496C72.1034 27.808 75.8834 23.704 81.1034 23.704C86.3594 23.704 90.1394 27.808 90.1394 33.496C90.1394 39.22 86.3594 43.36 81.1034 43.36ZM81.1034 41.164C84.8114 41.164 87.5834 38.212 87.5834 33.496C87.5834 28.852 84.8114 25.9 81.1034 25.9C77.4314 25.9 74.6594 28.852 74.6594 33.496C74.6594 38.212 77.4314 41.164 81.1034 41.164ZM96.7345 43H94.2145V17.152H96.7345V43ZM113.859 43V39.544C112.743 41.92 110.439 43.36 107.487 43.36C103.563 43.36 101.007 41.164 101.007 37.744C101.007 34.036 103.959 32.092 109.719 32.092C110.871 32.092 111.735 32.164 113.607 32.308V30.724C113.607 27.556 111.915 25.684 109.035 25.684C105.939 25.684 103.995 27.592 103.959 30.688H101.655C101.763 26.476 104.679 23.668 108.999 23.668C113.427 23.668 116.019 26.26 116.019 30.652V43H113.859ZM103.419 37.672C103.419 39.976 105.183 41.524 107.847 41.524C111.375 41.524 113.607 39.22 113.607 35.656V33.964C111.987 33.82 110.871 33.784 109.827 33.784C105.507 33.784 103.419 35.044 103.419 37.672ZM123.84 31.948V43H121.32V24.028H123.66V27.592C124.884 25.252 127.188 23.668 129.924 23.668C133.884 23.668 136.44 26.188 136.44 30.688V43H133.92V31.552C133.92 27.916 132.264 25.864 129.168 25.864C126.216 25.864 123.84 28.42 123.84 31.948ZM153.41 43V39.544C152.294 41.92 149.99 43.36 147.038 43.36C143.114 43.36 140.558 41.164 140.558 37.744C140.558 34.036 143.51 32.092 149.27 32.092C150.422 32.092 151.286 32.164 153.158 32.308V30.724C153.158 27.556 151.466 25.684 148.586 25.684C145.49 25.684 143.546 27.592 143.51 30.688H141.206C141.314 26.476 144.23 23.668 148.55 23.668C152.978 23.668 155.57 26.26 155.57 30.652V43H153.41ZM142.97 37.672C142.97 39.976 144.734 41.524 147.398 41.524C150.926 41.524 153.158 39.22 153.158 35.656V33.964C151.538 33.82 150.422 33.784 149.378 33.784C145.058 33.784 142.97 35.044 142.97 37.672Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_b_1_569" x="-74.7894" y="-107.508" width="354.659" height="275.168" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="62.15"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_569"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_569" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_1_569" x1="35.0947" y1="10.395" x2="13.9526" y2="50.8906" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00FFA3"/>
                    <stop offset="1" stop-color="#DC1FFF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_569" x1="25.8496" y1="5.56868" x2="4.70752" y2="46.0642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00FFA3"/>
                    <stop offset="1" stop-color="#DC1FFF"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_569" x1="30.443" y1="7.96648" x2="9.30096" y2="48.462" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00FFA3"/>
                    <stop offset="1" stop-color="#DC1FFF"/>
                    </linearGradient>
                    <clipPath id="clip0_1_569">
                    <rect width="38.2772" height="30" fill="white" transform="translate(0.361389 14)"/>
                    </clipPath>
                    </defs>
                    </svg>`;

  const token = "Coming Soon";
  const [copied, setCopied] = useState(false);
  const copyHandle = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }
  return (
    <div className='common-padding sp !pt-0 relative z-[1]'>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape three left-[var(--position)] top-0"></div>
      <Container>
        <Col className="w-full text-center">
          <CommonTitle className='mb-7 md:mb-9 lg:mb-11' title="SOLIFY Specification" />
        </Col>
        <Col className="w-full">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
            viewport={{ once: true, amount: 0 }}
            className="sp-wrap relative z-[1] overflow-hidden rounded-[20px] mb-6 md:mb-8 lg:mb-11">
            <div className="rounded-[20px] flex items-center flex-wrap md:gap-4 lg:gap-6 bg-[#0C0C0D] justify-around lg:justify-between md:p-11 lg:p-14 xl:p-[70px]">
              <div
                className='text-center border-b border-[#1C1C1D] md:border-0 p-6 md:p-0 w-full md:w-auto'>
                <h5 className="font-normal text-lg md:text-xl leading-relaxed mb-1 md:mb-3 text-white text-opacity-70 text-center uppercase">BLOCKCHAIN NETWORK</h5>
                <div className='flex items-center justify-center h-11 md:h-auto' dangerouslySetInnerHTML={{ __html: base_icon }}></div>
              </div>
              <div
                className='text-center border-b border-[#1C1C1D] md:border-0 py-6 md:pb-0 w-full md:w-auto'>
                <h5 className="font-normal text-lg md:text-xl leading-relaxed mb-1 md:mb-3 text-white text-opacity-70 text-center uppercase">TOTAL SUPPLY</h5>
                <div className='flex items-center justify-center gap-2'>
                  {/* <img src={main_icon} alt="" /> */}
                  <span className='text-white leading-relaxed font-normal text-lg md:text-2xl lg:text-4xl'>1,000,000,000</span>
                </div>
              </div>
              <div
                className='text-center py-6 md:py-0'>
                <h5 className="font-normal text-lg md:text-xl leading-relaxed mb-1 md:mb-3 text-white text-opacity-70 text-center uppercase">CONTRACT ADDRESS</h5>
                <div className='flex items-center justify-center gap-2'>
                  {/* <span className='text-white leading-relaxed font-normal text-lg md:text-2xl lg:text-4xl'>{token.substring(0, 6)}.....{token.substring(token.length - 8)}</span> */}
                  <span className='text-white leading-relaxed font-normal text-lg md:text-2xl lg:text-4xl'>{token}</span>
                  <button onClick={() => copyHandle()} className='cursor-pointer p-0 border-0 bg-transparent text-2xl text-white'>{!copied ? (<LuCopy />) : (<LuCopyCheck />)}</button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
            viewport={{ once: true, amount: 0 }}
            className="flex items-center justify-center gap-4 md:gap-6 mb-6 lg:mb-16">
            <p className='text-xl md:text-2xl text-white leading-relaxed'>Audited by</p>
            <img src={img} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
            viewport={{ once: true, amount: 0 }}
            className="flex items-center flex-wrap gap-4 justify-center">
            <BuyButton />
            <CButton className="bg-[#1F1F1F] text-white" target="_blank" url={"https://t.me/solifysolana"} color=''>Whitepaper</CButton>
          </motion.div>
        </Col>
      </Container>
    </div>
  )
}
