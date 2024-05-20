import { Container, Col } from './CAllComponent'
import solana from '../assets/img/solana.png'
import bitcoin from '../assets/img/bitcoin.png'
import usd from '../assets/img/usd.png'
import howWork from '../assets/img/howToWork.png'
import { motion } from 'framer-motion'

export default function HowToWork() {
  return (
    <div className='howTo common-padding-top'>
      <Container>
        <Col className="w-full">
          <div className="howTo-wrap gap-6 relative z-[1] text-center">
            <div className='relative z-[1] !pt-0 p-6 md:p-12 lg:p-16'>
              <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0.8 }}
                className="absolute hidden md:block bottom-0 -left-[var(--width)/2] icon">
                <img src={bitcoin} alt="" />
              </motion.div>
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0.8 }}
                className="absolute hidden md:block bottom-0 -right-[var(--width)/2] icon">
                <img src={usd} alt="" />
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0.8 }}
                className="text-center relative bottom-7 md:bottom-12 lg:bottom-14 xl:bottom-[70px] w-16 h-16 md:w-36 md:h-36 lg:w-auto lg:h-auto mx-auto">
                <img src={solana} className='mx-auto' alt="" />
              </motion.div>
              <div>
                <motion.h3
                  initial={{ y: 100 }}
                  whileInView={{ y: 0, transition: { duration: .5, delay: 0.1 } }}
                  viewport={{ once: true, amount: 0.8 }}
                  className='!leading-[145%] text-lg md:text-[26px] lg:text-[44px] font-medium text-white text-opacity-70'>The World's 1st DeFi Platform embracing Artificial Intelligence, Debit Card Technology and a Decentralized Exchange whilst being built for the people</motion.h3>
              </div>
            </div>

            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <h3
                className='mt-4 md:mt-5 lg:mt-7 !leading-[145%] text-xl md:text-4xl lg:text-[44px] font-medium'>How Tant Finance Works</h3>
              <img
                className='w-full lg:ml-4 h-auto' src={howWork} alt="" />
            </motion.div>
          </div>
        </Col>
      </Container>
    </div>
  )
}
