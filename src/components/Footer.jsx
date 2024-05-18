import { Container, Col } from './CAllComponent'
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { Avatar } from "@nextui-org/react";
import { motion } from 'framer-motion'

import Logo from './Logo'
import icon_1 from '../assets/img/coins/1.png'
import icon_2 from '../assets/img/coins/2.png'
import icon_3 from '../assets/img/coins/3.png'
import icon_4 from '../assets/img/coins/4.png'
import icon_5 from '../assets/img/coins/5.png'
import icon_6 from '../assets/img/coins/6.png'
import icon_7 from '../assets/img/coins/7.png'
import icon_8 from '../assets/img/coins/8.png'
import icon_9 from '../assets/img/coins/9.png'

export default function Footer() {
  const font20 = 'text-lg md:text-xl !leading-relaxed text-white text-opacity-55';
  const acceptMethods = [icon_1, icon_2, icon_3, icon_4, icon_5, icon_6, icon_7, icon_8, icon_9];
  const social = [
    {
      icon: <FaXTwitter />,
      url: '',
      name: 'x',
    },
    {
      icon: <FaTelegram />,
      url: '',
      name: 'telegram',
    },
    {
      icon: <FaDiscord />,
      url: '',
      name: 'discord',
    }
  ];
  return (
    <div className='footer relative z-[1]'>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1]"></div>
      <div className='mt-10 md:mt-12 lg:mt-16 xl:mt-20'>
        <Container>
          <Col className="w-full">
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-wrap gap-6 md:justify-around xl:justify-between">
              <div>
                <Logo />
              </div>
              <div>
                <p className={`mb-2 md:mb-4 ${font20}`}>Support</p>
                <a href="mailto:support@tantfinance.io" className={`hover:text-primary-700 ${font20}`}>support@tantfinance.io</a>
              </div>
              <div>
                <p className={`mb-2 md:mb-4 ${font20}`}>Marketing</p>
                <a href="mailto:socials@tantfinance.io" className={`hover:text-primary-700 ${font20}`}>socials@tantfinance.io</a>
              </div>
              <div className='w-auto xl:w-[16%]'>
                <p className={`mb-2 md:mb-4 ${font20}`}>We support</p>
                <div className="flex items-center flex-wrap gap-[10px]">
                  {acceptMethods.map((item, index) => (
                    <Avatar src={item} key={index} className='w-8 h-8' />
                  ))}
                </div>
              </div>
              <div>
                <p className={`mb-3 md:mb-4 ${font20}`}>We’re Social!</p>
                <div className="flex flex-wrap items-center gap-4">
                  {social.map((item, index) => (
                    <a href="#" target='_blank' className='social-link flex items-center justify-center rounded-full relative z-[1]' key={index}>
                      <span className='w-full h-full flex items-center justify-center bg-[#060B0D] hover:bg-primary transition-all rounded-full'>
                        {item.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Container>
      </div>
      <div className="border-t border-[#fff] border-opacity-10 mt-8 md:mt-10 lg:mt-[50px] pt-6 md:pt-9 pb-10 md:pb-16 lg:pb-20 xl:pb-[104px]">
        <Container>
          <Col className="w-full">
            <motion.p
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
              viewport={{ once: true, amount: 0.8 }}
              className={`text-center mb-5 md:mb-6 lg:mb-9 tracking-[-0.8px] ${font20}`}>2024 TANT Finance - All Rights Reserved</motion.p>
            <div>
              <motion.p
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0 }}
                className='text-white mb-0 !leading-relaxed'>
                <strong className='fw-bold block text-lg md:text-xl'>Disclaimer: </strong>
                <span className='text-base'>The information provided on this website is for informational purposes only and does not constitute investment advice or an offer to purchase any securities. Participation in the crypto presale involves significant risk and may not be suitable for all investors. Please ensure you fully understand the risks involved and seek independent advice if necessary. The value of cryptocurrencies can be highly volatile, and you may lose all or part of your investment. We make no guarantees regarding the future performance of any digital asset.</span>
              </motion.p>
            </div>
          </Col>
        </Container>
      </div>
    </div >
  )
}
