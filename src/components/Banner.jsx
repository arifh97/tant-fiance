import { Container, Col, CButton } from './CAllComponent'
import BannerRight from './BannerRight'
import b_img_1 from '../assets/img/brands/1.png'
import b_img_2 from '../assets/img/brands/2.png'
import b_img_3 from '../assets/img/brands/3.png'
import b_img_4 from '../assets/img/brands/4.png'
import b_img_5 from '../assets/img/brands/5.png'
import b_img_6 from '../assets/img/brands/6.png'
import { motion } from "framer-motion";


export default function Banner() {
  const brands = [b_img_1, b_img_2, b_img_3, b_img_4, b_img_5, b_img_6];

  return (
    <div className="banner pt-32 md:pt-[164px] bg-contain bg-right-top bg-no-repeat bg-banner relative z-1 bg-[url('../img/banner-bg.png')]">
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape left-[var(--position)] top-[var(--position)]"></div>
      <Container rowClass="">
        <Col className="w-full lg:w-6/12">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
            viewport={{ once: true, amount: 0 }}
            className="banner-content text-center mb-10 lg:mb-0 md:px-[10%] lg:p-0 lg:text-left pt-0 md:10 lg:pt-16 xl:pt-28">
            <span className="common-meta block mb-2 md:mb-3">TANT Finance Presale!</span>
            <h1 className='mb-3 md:mb-6 font-semibold text-[32px] md:text-[54px] lg:text-[62px] 2xl:text-[68px] leading-tight'>Make your future with <span>TANT Finance</span></h1>
            <p className='mb-5 md:mb-7 lg:mb-10 text-base md:text-lg lg:text-[22px] leading-relaxed'>TANT Finance pioneers DeFi with futuristic debit cards, smart gateways, and AI lending, setting new standards in secure transactions.</p>
            <div className="flex items-center flex-wrap gap-4 justify-center lg:justify-start">
              <CButton>Buy TANT</CButton>
              <CButton className="bg-[#1F1F1F] text-white" color=''>Whitepaper</CButton>
            </div>
          </motion.div>
        </Col>
        <Col className="w-full lg:w-6/12">
          <BannerRight />
        </Col>
        <Col className="w-full mt-8 md:mt-10">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: .5, delay: 0.1 } }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span
              className='block text-sm md:text-base lg:text-xl mb-4 lg:mb-7 uppercase text-white'>AS SEEN IN</span>
            <div
              className="overflow-auto">
              <div className="flex items-center gap-6 justify-between w-max lg:w-auto">
                {brands.map((item, index) => (
                  <div className='w-full' key={index}><img className='h-6 md:h-auto' src={item} alt="" /></div>
                ))}
              </div>
            </div>
          </motion.div>
        </Col>
      </Container>
    </div>
  )
}
