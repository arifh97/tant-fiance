import { Container, Col, CButton } from './CAllComponent'
import CommonTitle from './CommonTitle'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function Cta() {
  return (
    <div className='cta common-padding-top relative z-[1]'>
      <Container>
        <Col className="w-full">
          <div className="cta-wrap px-4 lg:px-0 py-6 md:py-14 lg:py-16 xl:py-[90px] relative z-[1] rounded-3xl md:rounded-[32px] lg:rounded-[40px] xl:rounded-[64px] before:rounded-3xl before:md:rounded-[32px] before:lg:rounded-[40px] before:xl:rounded-[64px]">
            <div className="mx-auto w-full md:w-8/12 lg:w-6/12">
              <CommonTitle className='text-center !mb-4 md:!mb-8' subTitle="our journey has begun" title="Have Questions?" des="Join the conversation, as your feedback plays a crucial role in shaping our future" />
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0 }}
                className="text-center">
                <CButton target="_blank">Contact us <BsArrowRight /></CButton>
              </motion.div>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  )
}