import { Container, Col } from './CAllComponent'
import solana from '../assets/img/solana.png'
import bitcoin from '../assets/img/bitcoin.png'
import usd from '../assets/img/usd.png'
import howWork from '../assets/img/howToWork.png'

export default function HowToWork() {
  return (
    <div className='howTo common-padding-top'>
      <Container>
        <Col className="w-full">
          <div className="howTo-wrap gap-6 relative z-[1] text-center">
            <div className='relative z-[1] !pt-0 p-8 md:p-12 lg:p-16'>
              <div className="absolute bottom-0 -left-[var(--width)/2] icon">
                <img src={bitcoin} alt="" />
              </div>
              <div className="absolute bottom-0 -right-[var(--width)/2] icon">
                <img src={usd} alt="" />
              </div>
              <div className="text-center relative bottom-7 md:bottom-12 lg:bottom-14 xl:bottom-[70px]">
                <img src={solana} className='mx-auto' alt="" />
              </div>
              <div>
                <h3 className='mb-10 md:mb-16 lg:mb-20 xl:mb-28 !leading-[145%] text-3xl md:text-4xl lg:text-[44px] font-medium text-white text-opacity-70'>The World's 1st DeFi Platform embracing Artificial Intelligence, Debit Card Technology and a Decentralized Exchange whilst being built for the people</h3>
              </div>
            </div>

            <div>
              <h3 className='!leading-[145%] text-3xl md:text-4xl lg:text-[44px] font-medium'>How Tant Finance Works</h3>
              <img className='w-full lg:ml-4 h-auto' src={howWork} alt="" />
            </div>
          </div>
        </Col>
      </Container>
    </div>
  )
}
