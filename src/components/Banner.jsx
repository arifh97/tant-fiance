import { Container, Col, CButton } from './CAllComponent'
import BannerRight from './BannerRight'
import b_img_1 from '../assets/img/brands/1.png'
import b_img_2 from '../assets/img/brands/2.png'
import b_img_3 from '../assets/img/brands/3.png'
import b_img_4 from '../assets/img/brands/4.png'
import b_img_5 from '../assets/img/brands/5.png'
import b_img_6 from '../assets/img/brands/6.png'

export default function Banner() {
  const brands = [b_img_1,b_img_2,b_img_3,b_img_4,b_img_5,b_img_6];
  return (
    <div className="banner pt-[164px] pb-[140px] bg-cover bg-no-repeat bg-banner relative z-1 bg-[url('../img/banner-bg.png')]">
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute banner-shape left-[var(--position)] top-[var(--position)]"></div>
      <Container rowClass="items-center">
        <Col className="w-full lg:w-6/12">
          <div className="banner-content">
            <span className="common-meta block mb-3">TANT Finance Presale!</span>
            <h1 className='mb-6 font-semibold text-4xl md:text-[54px] lg:text-[68px] leading-tight'>Make your future with <span>TANT Finance</span></h1>
            <p className='mb-5 md:mb-7 lg:mb-10 text-lg lg:text-[22px] leading-relaxed'>TANT Finance pioneers DeFi with futuristic debit cards, smart gateways, and AI lending, setting new standards in secure transactions.</p>
            <div className="flex items-center flex-wrap gap-4">
              <CButton>Buy TANT</CButton>
              <CButton className="bg-[#1F1F1F] text-white" color=''>Whitepaper</CButton>
            </div>
          </div>
        </Col>
        <Col className="w-full lg:w-6/12">
          <BannerRight />
        </Col>
        <Col className="w-full mt-8 md:mt-10">
          <span className='block text-xl mb-5 md:mb-7 uppercase text-white'>AS SEEN IN</span>
          <div className="overflow-auto">
            <div className="flex items-center gap-6 justify-between">
                {brands.map((item,index) => (
                  <div className='w-full' key={index}><img src={item} alt="" /></div>
                ))}
            </div>
          </div>
        </Col>
      </Container>
    </div>
  )
}
