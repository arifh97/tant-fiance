import { Container, Col } from './CAllComponent'
import a_img from '../assets/img/about-img.png'
import about_img from '../assets/img/about-card.svg'
import card_shape from '../assets/img/card-bg-shape.png'
import { motion } from 'framer-motion'

export default function About() {
  const about_card = [
    {
      icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_0_885" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="42" height="42">
      <path d="M0 0H42V42H0V0Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7689 11.9909C19.4229 11.9909 17.1729 12.9229 15.514 14.5818C13.855 16.2407 12.9231 18.4907 12.9231 20.8367C12.9231 23.1828 13.855 25.4328 15.514 27.0917C17.1729 28.7506 19.4229 29.6826 21.7689 29.6826C24.115 29.6826 26.365 28.7506 28.0239 27.0917C29.6828 25.4328 30.6148 23.1828 30.6148 20.8367C30.6148 18.4907 29.6828 16.2407 28.0239 14.5818C26.365 12.9229 24.115 11.9909 21.7689 11.9909ZM9.69231 20.8384C9.67383 19.2408 9.97253 17.6554 10.5711 16.1741C11.1697 14.6928 12.0562 13.345 13.1794 12.2088C14.3026 11.0725 15.6401 10.1704 17.1144 9.55476C18.5886 8.93909 20.1704 8.62207 21.7681 8.62207C23.3658 8.62207 24.9476 8.93909 26.4219 9.55476C27.8962 10.1704 29.2336 11.0725 30.3568 12.2088C31.48 13.345 32.3665 14.6928 32.9651 16.1741C33.5637 17.6554 33.8624 19.2408 33.8439 20.8384C33.8072 24.0169 32.5187 27.0527 30.258 29.2874C27.9974 31.522 24.9468 32.7753 21.7681 32.7753C18.5894 32.7753 15.5388 31.522 13.2782 29.2874C11.0175 27.0527 9.72907 24.0169 9.69231 20.8384Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51138 27.9881C9.53077 27.8427 9.60023 27.552 9.84738 27.0625C10.3078 26.153 11.1882 24.969 12.4772 23.6104L10.1349 21.3844C8.74085 22.8528 7.62623 24.297 6.96554 25.6054C6.37269 26.775 5.83961 28.4566 6.79108 29.8474C7.61977 31.059 9.07038 31.2916 10.2044 31.2625C11.4224 31.2318 12.8585 30.899 14.3802 30.374C17.4445 29.316 21.2245 27.35 25.0272 24.7509C28.8556 22.134 31.8425 19.3103 33.7131 16.8129C34.6419 15.5723 35.3462 14.3413 35.7113 13.2057C36.0602 12.117 36.1992 10.7665 35.4335 9.64703C34.8972 8.86195 34.0927 8.55342 33.3674 8.47911C32.6922 8.40965 31.9846 8.52757 31.3417 8.68588C30.1592 8.97988 28.7022 9.55495 27.1869 10.151L26.7928 10.3061L27.9752 13.3123C28.077 13.2736 28.1788 13.2316 28.2789 13.1944C29.8943 12.558 31.1575 12.062 32.1219 11.8213C32.3933 11.7535 32.6017 11.718 32.7535 11.7018C32.7309 11.8776 32.6908 12.0508 32.634 12.2187C32.4192 12.8891 31.9362 13.7937 31.1268 14.876C29.5163 17.0277 26.8138 19.6156 23.2034 22.0839C19.5688 24.5683 16.0472 26.3808 13.3253 27.3193C11.9522 27.7943 10.8732 28.014 10.1236 28.0333C9.91845 28.0443 9.71272 28.0291 9.51138 27.9881Z" fill="black"/>
      </mask>
      <g mask="url(#mask0_0_885)">
      <path d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="url(#paint0_linear_0_885)"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_0_885" x1="60.6871" y1="46.7512" x2="0.356776" y2="22.3173" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      </defs>
      </svg>`,
      title: `Our Vision`,
      des: `We envision a future where financial freedom is within reach for everyone, regardless of background or location. Through our commitment to innovation and inclusivity, we're paving the way for a more accessible and equitable financial ecosystem.`,
    },
    {
      icon: `<svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.25 9.5C22.0348 9.5 24.7055 10.6062 26.6746 12.5754C28.6438 14.5445 29.75 17.2152 29.75 20C29.75 23.885 27.6325 27.28 24.5 29.1V32.25C24.5 32.7141 24.3156 33.1592 23.9874 33.4874C23.6592 33.8156 23.2141 34 22.75 34H15.75C15.2859 34 14.8408 33.8156 14.5126 33.4874C14.1844 33.1592 14 32.7141 14 32.25V29.1C10.8675 27.28 8.75 23.885 8.75 20C8.75 17.2152 9.85625 14.5445 11.8254 12.5754C13.7945 10.6062 16.4652 9.5 19.25 9.5ZM22.75 35.75V37.5C22.75 37.9641 22.5656 38.4092 22.2374 38.7374C21.9092 39.0656 21.4641 39.25 21 39.25H17.5C17.0359 39.25 16.5908 39.0656 16.2626 38.7374C15.9344 38.4092 15.75 37.9641 15.75 37.5V35.75H22.75ZM33.25 18.25H38.5V21.75H33.25V18.25ZM0 18.25H5.25V21.75H0V18.25ZM21 0.75V6H17.5V0.75H21ZM6.86 5.125L10.5875 8.87L8.1025 11.3375L4.375 7.6275L6.86 5.125ZM27.9125 8.8525L31.6225 5.125L34.125 7.6275L30.3975 11.3375L27.9125 8.8525Z" fill="url(#paint0_linear_0_900)"/>
      <defs>
      <linearGradient id="paint0_linear_0_900" x1="55.6298" y1="43.6053" x2="0.327045" y2="21.2076" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      </defs>
      </svg>`,
      title: `Our Mission`,
      des: `Our mission is simple yet ambitious – to democratize finance and unlock the full potential of blockchain technology. By leveraging the power of DeFi and AI in lending, we're creating a world where individuals have access to efficient and reliable lending solutions, empowering them to achieve their financial goals.`,
    },
    {
      icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.4062 35.7C16.462 35.7497 16.5325 35.7798 16.607 35.7858C16.6815 35.7917 16.7559 35.7732 16.8189 35.733C16.8819 35.6927 16.93 35.6331 16.956 35.563C16.9819 35.4929 16.9843 35.4163 16.9627 35.3447L12.5527 20.2282C12.5127 20.0907 12.4316 19.9687 12.3202 19.8786C12.2089 19.7885 12.0726 19.7346 11.9297 19.7242C11.2157 19.6717 10.5035 19.614 9.79121 19.5492L3.89371 19.012C3.83136 19.0059 3.76853 19.0169 3.71191 19.0437C3.6553 19.0705 3.607 19.1121 3.57217 19.1642C3.53734 19.2163 3.51728 19.2768 3.51411 19.3394C3.51095 19.4019 3.52481 19.4642 3.55421 19.5195C6.74446 25.487 11.3382 31.1745 16.4062 35.7ZM20.7322 38.8955C20.7672 39.018 20.8722 39.109 21 39.109C21.0617 39.1072 21.1212 39.0854 21.1694 39.0469C21.2177 39.0084 21.2522 38.9553 21.2677 38.8955L26.6647 20.3927C26.6808 20.339 26.6837 20.2822 26.6732 20.2271C26.6627 20.1721 26.6392 20.1203 26.6045 20.0762C26.5699 20.0321 26.5252 19.997 26.4741 19.9738C26.4231 19.9507 26.3672 19.9401 26.3112 19.943C22.772 20.0948 19.2279 20.0948 15.6887 19.943C15.6329 19.9402 15.5773 19.9507 15.5264 19.9738C15.4755 19.9969 15.4309 20.0319 15.3963 20.0757C15.3617 20.1196 15.3381 20.1711 15.3275 20.2259C15.3168 20.2808 15.3195 20.3374 15.3352 20.391L20.7322 38.8955ZM25.0372 35.3447C24.9392 35.6772 25.3347 35.931 25.5937 35.7C30.6617 31.1727 35.2555 25.487 38.4457 19.5195C38.475 19.4643 38.4888 19.4022 38.4857 19.3398C38.4826 19.2774 38.4627 19.2171 38.4281 19.1651C38.3935 19.113 38.3455 19.0714 38.2891 19.0444C38.2328 19.0175 38.1702 19.0063 38.108 19.012L32.2105 19.5492C31.4965 19.614 30.7842 19.6717 30.0702 19.7242C29.9273 19.7346 29.7911 19.7885 29.6797 19.8786C29.5683 19.9687 29.4872 20.0907 29.4472 20.2282L25.0372 35.3447ZM38.1517 16.373C38.2127 16.3676 38.2713 16.3463 38.3215 16.3113C38.3717 16.2762 38.4119 16.2285 38.4379 16.1731C38.4639 16.1177 38.475 16.0563 38.4699 15.9953C38.4648 15.9343 38.4438 15.8756 38.409 15.8252L32.7425 7.60898C32.501 7.25907 32.1781 6.97305 31.8016 6.77552C31.4252 6.57798 31.0064 6.47485 30.5812 6.47498H26.2237C26.1662 6.47498 26.1096 6.48913 26.0589 6.51618C26.0082 6.54324 25.965 6.58236 25.933 6.6301C25.901 6.67784 25.8812 6.73273 25.8755 6.78991C25.8697 6.84709 25.8781 6.90482 25.9 6.95798L29.8497 16.6232C29.9058 16.7599 30.0038 16.8754 30.1295 16.953C30.2552 17.0307 30.4023 17.0665 30.5497 17.0555C31.0222 17.0187 31.4982 16.9785 31.9725 16.933L38.1517 16.373ZM23.0387 6.90548C22.9854 6.77775 22.8955 6.66868 22.7802 6.59206C22.665 6.51543 22.5296 6.47469 22.3912 6.47498H19.6087C19.4703 6.47469 19.3349 6.51543 19.2197 6.59206C19.1044 6.66868 19.0145 6.77775 18.9612 6.90548L14.8347 16.807C14.8133 16.8588 14.8047 16.915 14.8096 16.9708C14.8145 17.0266 14.8327 17.0805 14.8627 17.1278C14.8927 17.1752 14.9336 17.2146 14.9821 17.2428C15.0305 17.271 15.085 17.2872 15.141 17.29C19.0435 17.479 22.9565 17.479 26.8607 17.29C26.9165 17.2869 26.9708 17.2706 27.019 17.2422C27.0672 17.2139 27.1079 17.1744 27.1377 17.1272C27.1676 17.0799 27.1856 17.0261 27.1904 16.9704C27.1952 16.9147 27.1865 16.8587 27.1652 16.807L23.0387 6.90548ZM16.1 6.95798C16.1218 6.90482 16.1302 6.84709 16.1245 6.78991C16.1187 6.73273 16.0989 6.67784 16.0669 6.6301C16.0349 6.58236 15.9917 6.54324 15.941 6.51618C15.8903 6.48913 15.8337 6.47498 15.7762 6.47498H11.4187C10.9936 6.47485 10.5747 6.57798 10.1983 6.77552C9.8218 6.97305 9.49894 7.25907 9.25746 7.60898L3.59096 15.8252C3.55611 15.8756 3.5351 15.9343 3.53002 15.9953C3.52494 16.0563 3.53597 16.1177 3.56201 16.1731C3.58806 16.2285 3.62819 16.2762 3.67841 16.3113C3.72864 16.3463 3.78718 16.3676 3.84821 16.373L10.0275 16.933C10.5017 16.9785 10.976 17.0187 11.4502 17.0555C11.5976 17.0668 11.7448 17.0311 11.8706 16.9534C11.9964 16.8757 12.0943 16.7601 12.1502 16.6232L16.1 6.95798Z" fill="url(#paint0_linear_0_898)"/>
      <defs>
      <linearGradient id="paint0_linear_0_898" x1="54.0465" y1="42.8007" x2="4.84008" y2="21.444" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      </defs>
      </svg>`,
      title: `Our Values`,
      des: `At TANT Finance, we are driven by integrity, transparency, and a commitment to empowering our community. We believe in fostering collaboration, embracing diversity, and continuously striving for excellence in everything we do. Join us on our journey to redefine the future of finance and unlock new possibilities for prosperity.`,
    },
  ]
  const cardDes = [
    {
      title: 'Virtual Card',
      des: `Instant Use Online`
    },
    {
      title: 'Physical Card',
      des: `Spend Crypto Everywhere you go`
    },
    {
      title: 'No KYC Card',
      des: `The Ultimate Privacy Option`
    },
  ]
  return (
    <div className='about !pb-4 md:!pb-5 lg:!pb-7 common-padding relative z-[1]'>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape one left-[var(--position)] top-0"></div>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape two sm right-[var(--position)] top-[10%]"></div>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape three left-[var(--position)] bottom-[42%]"></div>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape four sm right-[var(--position)] bottom-[10%]"></div>

      <Container>
        <Col className="w-full text-center">
          <div className="about-wrap !pt-0 p-8 md:p-12 lg:p-[60px] flex flex-wrap items-center gap-6 relative z-[1]">
            <div className="absolute top-0 left-0 w-full h-auto -z-[1]">
              <img src={card_shape} alt="" className='w-full h-auto' />
            </div>
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0, transition: { duration: .5, delay: 0 } }}
              viewport={{ once: true, amount: 0.8 }}
              className="about-img relative -top-12">
              <img src={about_img} alt="" />
            </motion.div>
            <div className="about-des ps-1">
              {cardDes.map((item, index) => (
                <motion.div
                  initial={{ x: 100 }}
                  whileInView={{ x: 0, transition: { duration: .5, delay: `0.${index + 1}` } }}
                  viewport={{ once: true, amount: 0.8 }}
                  className={`text-left mt-[34px] ${index == cardDes.length - 1 ? "" : 'mb-6 md:mb-10 lg:mb-14'}`} key={index}>
                  <h4 className="font-medium text-xl lg:text-2xl text-white mb-2">{item.title}</h4>
                  <p className='font-regular text-lg md:text-xl text-white text-opacity-70'>{item.des}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Col>
      </Container>
      <Container className='relative z-[2]' rowClass='items-center'>
        <Col className="w-full md:w-6/12">
          <div className="about-content lg:pr-[8%]">
            <motion.span
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
              viewport={{ once: true, amount: 0.8 }}
              className="common-meta mb-2 block uppercase">ABOUT TANT FINANCE</motion.span>
            <motion.h3
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: 0.1 } }}
              viewport={{ once: true, amount: 0.8 }}
              className='!leading-[145%] text-3xl md:text-4xl lg:text-[44px] font-semibold'>About TANT Finance</motion.h3>
            <motion.p
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: 0.15 } }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-lg md:text-xl lg:text-[22px] !leading-[160%] mt-4 md:mt-5 text-[#B2B0B9]">At TANT Finance, we're dedicated to revolutionizing the world of decentralized finance (DeFi) by combining innovative technologies with unparalleled opportunities for growth and prosperity.</motion.p>
            <motion.p
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: 0.2 } }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-lg md:text-xl lg:text-[22px] !leading-[160%] mt-6 md:mt-7 lg:mt-10 text-[#B2B0B9]">Our platform harnesses the power of artificial intelligence (AI), primarily focused on lending, to optimize lending processes, improve risk assessment, and enhance overall user experience.</motion.p>
          </div>
        </Col>
        <Col className="w-full md:w-6/12 text-center">
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0, transition: { duration: .5, delay: 0 } }}
            viewport={{ once: true, amount: 0.8 }}
            className="w-full">
            <img src={a_img} alt="" />
          </motion.div>
        </Col>
      </Container>
      <Container rowClass='common-row mt-12 md:mt-16 lg:mt-20'>
        {about_card.map((item, index) => (
          <Col className="w-full lg:w-4/12" key={index}>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: `0.${index+1}` } }}
              viewport={{ once: true, amount: 0.8 }}
              className="about-card">
              <div className='mb-5 md:mb-6 lg:mb-8' dangerouslySetInnerHTML={{ __html: item.icon }}></div>
              <h4 className='text-white font-semibold text-xl md:text-2xl mb-5 md:mb-7'>{item.title}</h4>
              <p className='pGradient !leading-relaxed'>{item.des}</p>
            </motion.div>
          </Col>
        ))}
      </Container>
    </div>
  )
}