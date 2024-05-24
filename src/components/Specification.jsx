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
  const base_icon = `<svg class="h-full" width="131" height="58" viewBox="0 0 131 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_0_586)">
                      <path d="M20.4648 49C31.5304 49 40.5 40.0464 40.5 29C40.5 17.9536 31.5304 9 20.4648 9C9.9672 9 1.356 17.0608 0.5 27.3184H26.9816V30.6816H0.5C1.356 40.9392 9.9672 49 20.4648 49Z" fill="#0052FF"/>
                      </g>
                      <g filter="url(#filter0_b_0_586)">
                      <path d="M69.804 35.764C69.804 40.372 66.42 43 61.344 43H52.416V17.152H60.804C65.808 17.152 68.76 19.564 68.76 23.812C68.76 26.368 67.14 28.564 64.512 29.536C68.004 30.4 69.804 32.668 69.804 35.764ZM60.66 19.348H54.936V28.564H60.66C64.152 28.564 66.132 26.836 66.132 23.956C66.132 21.076 64.152 19.348 60.66 19.348ZM61.2 30.76H54.936V40.804H61.2C64.98 40.804 67.212 38.932 67.212 35.692C67.212 32.596 64.98 30.76 61.2 30.76ZM86.3648 43V39.544C85.2488 41.92 82.9448 43.36 79.9928 43.36C76.0688 43.36 73.5128 41.164 73.5128 37.744C73.5128 34.036 76.4648 32.092 82.2248 32.092C83.3768 32.092 84.2408 32.164 86.1128 32.308V30.724C86.1128 27.556 84.4208 25.684 81.5408 25.684C78.4448 25.684 76.5008 27.592 76.4648 30.688H74.1608C74.2688 26.476 77.1848 23.668 81.5048 23.668C85.9328 23.668 88.5248 26.26 88.5248 30.652V43H86.3648ZM75.9248 37.672C75.9248 39.976 77.6888 41.524 80.3528 41.524C83.8808 41.524 86.1128 39.22 86.1128 35.656V33.964C84.4928 33.82 83.3768 33.784 82.3328 33.784C78.0128 33.784 75.9248 35.044 75.9248 37.672ZM108.01 37.708C108.01 41.2 105.202 43.36 100.522 43.36C95.8058 43.36 92.9258 40.984 92.5658 37.06H94.9778C95.1578 39.76 97.2818 41.452 100.522 41.452C103.618 41.452 105.49 40.264 105.49 38.104C105.49 36.232 104.41 35.368 101.53 34.792L98.7938 34.252C95.1938 33.568 93.2858 31.804 93.2858 29.068C93.2858 25.9 96.0938 23.668 100.234 23.668C104.59 23.668 107.47 26.008 107.758 29.788H105.382C105.13 27.16 103.222 25.612 100.234 25.612C97.5698 25.612 95.7338 26.872 95.7338 28.852C95.7338 30.724 96.8858 31.624 99.6938 32.164L102.538 32.704C106.318 33.424 108.01 35.008 108.01 37.708ZM119.84 43.36C114.512 43.36 110.984 39.364 110.984 33.352C110.984 27.808 114.656 23.668 119.696 23.668C125.096 23.668 128.624 28.024 128.192 34.108H113.504C113.72 38.608 116.096 41.38 119.804 41.38C122.972 41.38 125.168 39.616 125.78 36.592H128.264C127.4 40.804 124.196 43.36 119.84 43.36ZM119.66 25.612C116.24 25.612 113.828 28.24 113.504 32.38H125.564C125.348 28.132 123.152 25.612 119.66 25.612Z" fill="white"/>
                      </g>
                      <defs>
                      <filter id="filter0_b_0_586" x="-71.884" y="-107.148" width="324.808" height="274.808" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="62.15"/>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_586"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_586" result="shape"/>
                      </filter>
                      <clipPath id="clip0_0_586">
                      <rect width="40" height="40" fill="white" transform="translate(0.5 9)"/>
                      </clipPath>
                      </defs>
                      </svg>`;

  const token = "0x83351e3812las42fs3asfbdA02913";
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
          <CommonTitle className='mb-7 md:mb-9 lg:mb-11' title="TANT Finance Specification" />
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
                  <img src={main_icon} alt="" />
                  <span className='text-white leading-relaxed font-normal text-lg md:text-2xl lg:text-4xl'>502,000,000</span>
                </div>
              </div>
              <div
                className='text-center py-6 md:py-0'>
                <h5 className="font-normal text-lg md:text-xl leading-relaxed mb-1 md:mb-3 text-white text-opacity-70 text-center uppercase">CONTRACT ADDRESS</h5>
                <div className='flex items-center justify-center gap-2'>
                  <span className='text-white leading-relaxed font-normal text-lg md:text-2xl lg:text-4xl'>{token.substring(0, 6)}.....{token.substring(token.length - 8)}</span>
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
            <CButton className="bg-[#1F1F1F] text-white" target="_blank" url={pdf} color=''>Whitepaper</CButton>
          </motion.div>
        </Col>
      </Container>
    </div>
  )
}
