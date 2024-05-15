import { Container, Col, CButton } from './CAllComponent'
import BannerRight from './BannerRight'

export default function Banner() {
  return (
    <div className="banner pt-[164px] pb-[140px] bg-cover bg-no-repeat bg-banner relative z-1">
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
      </Container>
    </div>
  )
}
