import { Container, Col } from './CAllComponent'
import a_img from '../assets/img/about-img.png'
// import about_img from '../assets/img/about-card.svg'
// import about_img_2 from '../assets/img/about-card-2.png'
// import card_shape from '../assets/img/card-bg-shape.png'
import { motion } from 'framer-motion'

export default function About() {
  const about_card = [
    {
      icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1_866" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="42" height="42">
            <path d="M0 0H42V42H0V0Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7689 11.9909C19.4229 11.9909 17.1729 12.9229 15.514 14.5818C13.855 16.2407 12.9231 18.4907 12.9231 20.8367C12.9231 23.1828 13.855 25.4328 15.514 27.0917C17.1729 28.7506 19.4229 29.6826 21.7689 29.6826C24.115 29.6826 26.365 28.7506 28.0239 27.0917C29.6828 25.4328 30.6148 23.1828 30.6148 20.8367C30.6148 18.4907 29.6828 16.2407 28.0239 14.5818C26.365 12.9229 24.115 11.9909 21.7689 11.9909ZM9.69231 20.8384C9.67383 19.2408 9.97253 17.6554 10.5711 16.1741C11.1697 14.6928 12.0562 13.345 13.1794 12.2088C14.3026 11.0725 15.6401 10.1704 17.1144 9.55476C18.5886 8.93909 20.1704 8.62207 21.7681 8.62207C23.3658 8.62207 24.9476 8.93909 26.4219 9.55476C27.8962 10.1704 29.2336 11.0725 30.3568 12.2088C31.48 13.345 32.3665 14.6928 32.9651 16.1741C33.5637 17.6554 33.8624 19.2408 33.8439 20.8384C33.8072 24.0169 32.5187 27.0527 30.258 29.2874C27.9974 31.522 24.9468 32.7753 21.7681 32.7753C18.5894 32.7753 15.5388 31.522 13.2782 29.2874C11.0175 27.0527 9.72907 24.0169 9.69231 20.8384Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51138 27.9881C9.53077 27.8427 9.60023 27.552 9.84738 27.0625C10.3078 26.153 11.1882 24.969 12.4772 23.6104L10.1349 21.3844C8.74085 22.8528 7.62623 24.297 6.96554 25.6054C6.37269 26.775 5.83961 28.4566 6.79108 29.8474C7.61977 31.059 9.07038 31.2916 10.2044 31.2625C11.4224 31.2318 12.8585 30.899 14.3802 30.374C17.4445 29.316 21.2245 27.35 25.0272 24.7509C28.8556 22.134 31.8425 19.3103 33.7131 16.8129C34.6419 15.5723 35.3462 14.3413 35.7113 13.2057C36.0602 12.117 36.1992 10.7665 35.4335 9.64703C34.8972 8.86195 34.0927 8.55342 33.3674 8.47911C32.6922 8.40965 31.9846 8.52757 31.3417 8.68588C30.1592 8.97988 28.7022 9.55495 27.1869 10.151L26.7928 10.3061L27.9752 13.3123C28.077 13.2736 28.1788 13.2316 28.2789 13.1944C29.8943 12.558 31.1575 12.062 32.1219 11.8213C32.3933 11.7535 32.6017 11.718 32.7535 11.7018C32.7309 11.8776 32.6908 12.0508 32.634 12.2187C32.4192 12.8891 31.9362 13.7937 31.1268 14.876C29.5163 17.0277 26.8138 19.6156 23.2034 22.0839C19.5688 24.5683 16.0472 26.3808 13.3253 27.3193C11.9522 27.7943 10.8732 28.014 10.1236 28.0333C9.91845 28.0443 9.71272 28.0291 9.51138 27.9881Z" fill="black"/>
            </mask>
            <g mask="url(#mask0_1_866)">
            <path d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="url(#paint0_linear_1_866)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_1_866" x1="-0.413793" y1="2.25" x2="46.7065" y2="8.38892" gradientUnits="userSpaceOnUse">
            <stop stop-color="#161BBE"/>
            <stop offset="1" stop-color="#BD09E0"/>
            </linearGradient>
            </defs>
            </svg>`,
      title: `Our Vision`,
      des: `We envision a future where financial freedom is within reach for everyone, regardless of background or location. Through our commitment to innovation and inclusivity, we're paving the way for a more accessible and equitable financial ecosystem.`,
    },
    {
      icon: `<svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.25 9.5C22.0348 9.5 24.7055 10.6062 26.6746 12.5754C28.6438 14.5445 29.75 17.2152 29.75 20C29.75 23.885 27.6325 27.28 24.5 29.1V32.25C24.5 32.7141 24.3156 33.1592 23.9874 33.4874C23.6592 33.8156 23.2141 34 22.75 34H15.75C15.2859 34 14.8408 33.8156 14.5126 33.4874C14.1844 33.1592 14 32.7141 14 32.25V29.1C10.8675 27.28 8.75 23.885 8.75 20C8.75 17.2152 9.85625 14.5445 11.8254 12.5754C13.7945 10.6062 16.4652 9.5 19.25 9.5ZM22.75 35.75V37.5C22.75 37.9641 22.5656 38.4092 22.2374 38.7374C21.9092 39.0656 21.4641 39.25 21 39.25H17.5C17.0359 39.25 16.5908 39.0656 16.2626 38.7374C15.9344 38.4092 15.75 37.9641 15.75 37.5V35.75H22.75ZM33.25 18.25H38.5V21.75H33.25V18.25ZM0 18.25H5.25V21.75H0V18.25ZM21 0.75V6H17.5V0.75H21ZM6.86 5.125L10.5875 8.87L8.1025 11.3375L4.375 7.6275L6.86 5.125ZM27.9125 8.8525L31.6225 5.125L34.125 7.6275L30.3975 11.3375L27.9125 8.8525Z" fill="url(#paint0_linear_1_881)"/>
            <defs>
            <linearGradient id="paint0_linear_1_881" x1="-0.37931" y1="2.8125" x2="42.8143" y2="8.43985" gradientUnits="userSpaceOnUse">
            <stop stop-color="#161BBE"/>
            <stop offset="1" stop-color="#BD09E0"/>
            </linearGradient>
            </defs>
            </svg>`,
      title: `Our Mission`,
      des: `Our mission is simple yet ambitious – to democratize finance and unlock the full potential of blockchain technology. By leveraging the power of DeFi and AI in lending, we're creating a world where individuals have access to efficient and reliable lending solutions, empowering them to achieve their financial goals.`,
    },
    {
      icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4062 35.7001C16.462 35.7498 16.5325 35.7799 16.607 35.7859C16.6815 35.7918 16.7559 35.7733 16.8189 35.7331C16.8819 35.6929 16.93 35.6332 16.956 35.5631C16.9819 35.493 16.9843 35.4164 16.9627 35.3449L12.5527 20.2283C12.5127 20.0908 12.4316 19.9688 12.3202 19.8787C12.2089 19.7886 12.0726 19.7347 11.9297 19.7243C11.2157 19.6718 10.5035 19.6141 9.79121 19.5493L3.89371 19.0121C3.83136 19.006 3.76853 19.017 3.71191 19.0438C3.6553 19.0706 3.607 19.1122 3.57217 19.1643C3.53734 19.2164 3.51728 19.2769 3.51411 19.3395C3.51095 19.402 3.52481 19.4643 3.55421 19.5196C6.74446 25.4871 11.3382 31.1746 16.4062 35.7001ZM20.7322 38.8956C20.7672 39.0181 20.8722 39.1091 21 39.1091C21.0617 39.1073 21.1212 39.0855 21.1694 39.047C21.2177 39.0085 21.2522 38.9554 21.2677 38.8956L26.6647 20.3928C26.6808 20.3391 26.6837 20.2823 26.6732 20.2273C26.6627 20.1722 26.6392 20.1204 26.6045 20.0763C26.5699 20.0323 26.5252 19.9972 26.4741 19.974C26.4231 19.9508 26.3672 19.9402 26.3112 19.9431C22.772 20.095 19.2279 20.095 15.6887 19.9431C15.6329 19.9403 15.5773 19.9509 15.5264 19.974C15.4755 19.9971 15.4309 20.032 15.3963 20.0758C15.3617 20.1197 15.3381 20.1712 15.3275 20.2261C15.3168 20.2809 15.3195 20.3375 15.3352 20.3911L20.7322 38.8956ZM25.0372 35.3449C24.9392 35.6774 25.3347 35.9311 25.5937 35.7001C30.6617 31.1729 35.2555 25.4871 38.4457 19.5196C38.475 19.4644 38.4888 19.4024 38.4857 19.34C38.4826 19.2776 38.4627 19.2172 38.4281 19.1652C38.3935 19.1132 38.3455 19.0715 38.2891 19.0445C38.2328 19.0176 38.1702 19.0064 38.108 19.0121L32.2105 19.5493C31.4965 19.6141 30.7842 19.6718 30.0702 19.7243C29.9273 19.7347 29.7911 19.7886 29.6797 19.8787C29.5683 19.9688 29.4872 20.0908 29.4472 20.2283L25.0372 35.3449ZM38.1517 16.3731C38.2127 16.3677 38.2713 16.3465 38.3215 16.3114C38.3717 16.2763 38.4119 16.2287 38.4379 16.1732C38.4639 16.1178 38.475 16.0565 38.4699 15.9954C38.4648 15.9344 38.4438 15.8757 38.409 15.8253L32.7425 7.6091C32.501 7.25919 32.1781 6.97317 31.8016 6.77564C31.4252 6.57811 31.0064 6.47497 30.5812 6.4751H26.2237C26.1662 6.4751 26.1096 6.48925 26.0589 6.51631C26.0082 6.54336 25.965 6.58249 25.933 6.63023C25.901 6.67797 25.8812 6.73285 25.8755 6.79003C25.8697 6.84722 25.8781 6.90494 25.9 6.9581L29.8497 16.6233C29.9058 16.7601 30.0038 16.8755 30.1295 16.9532C30.2552 17.0308 30.4023 17.0667 30.5497 17.0556C31.0222 17.0189 31.4982 16.9786 31.9725 16.9331L38.1517 16.3731ZM23.0387 6.9056C22.9854 6.77787 22.8955 6.6688 22.7802 6.59218C22.665 6.51555 22.5296 6.47481 22.3912 6.4751H19.6087C19.4703 6.47481 19.3349 6.51555 19.2197 6.59218C19.1044 6.6688 19.0145 6.77787 18.9612 6.9056L14.8347 16.8071C14.8133 16.8589 14.8047 16.9151 14.8096 16.9709C14.8145 17.0268 14.8327 17.0806 14.8627 17.1279C14.8927 17.1753 14.9336 17.2147 14.9821 17.2429C15.0305 17.2712 15.085 17.2873 15.141 17.2901C19.0435 17.4791 22.9565 17.4791 26.8607 17.2901C26.9165 17.2871 26.9708 17.2707 27.019 17.2424C27.0672 17.214 27.1079 17.1746 27.1377 17.1273C27.1676 17.08 27.1856 17.0262 27.1904 16.9705C27.1952 16.9148 27.1865 16.8588 27.1652 16.8071L23.0387 6.9056ZM16.1 6.9581C16.1218 6.90494 16.1302 6.84722 16.1245 6.79003C16.1187 6.73285 16.0989 6.67797 16.0669 6.63023C16.0349 6.58249 15.9917 6.54336 15.941 6.51631C15.8903 6.48925 15.8337 6.4751 15.7762 6.4751H11.4187C10.9936 6.47497 10.5747 6.57811 10.1983 6.77564C9.8218 6.97317 9.49894 7.25919 9.25746 7.6091L3.59096 15.8253C3.55611 15.8757 3.5351 15.9344 3.53002 15.9954C3.52494 16.0565 3.53597 16.1178 3.56201 16.1732C3.58806 16.2287 3.62819 16.2763 3.67841 16.3114C3.72864 16.3465 3.78718 16.3677 3.84821 16.3731L10.0275 16.9331C10.5017 16.9786 10.976 17.0189 11.4502 17.0556C11.5976 17.0669 11.7448 17.0312 11.8706 16.9535C11.9964 16.8758 12.0943 16.7602 12.1502 16.6233L16.1 6.9581Z" fill="url(#paint0_linear_1_879)"/>
            <defs>
            <linearGradient id="paint0_linear_1_879" x1="3.16912" y1="8.22335" x2="42.3082" y2="13.6878" gradientUnits="userSpaceOnUse">
            <stop stop-color="#161BBE"/>
            <stop offset="1" stop-color="#BD09E0"/>
            </linearGradient>
            </defs>
            </svg>`,
      title: `Our Values`,
      des: `At SOLIFY, we are driven by integrity, transparency, and a commitment to empowering our community. We believe in fostering collaboration, embracing diversity, and continuously striving for excellence in everything we do. Join us on our journey to redefine the future of finance and unlock new possibilities for prosperity.`,
    },
  ]
  // const cardDes = [
  //   {
  //     title: 'Virtual Card',
  //     des: `Instant Use Online`
  //   },
  //   {
  //     title: 'Physical Card',
  //     des: `Spend Crypto Everywhere you go`
  //   },
  //   {
  //     title: 'No KYC Card',
  //     des: `The Ultimate Privacy Option`
  //   },
  // ]
  return (
    <div className='about !pb-4 md:!pb-5 lg:!pb-7 common-padding relative z-[1]'>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape one left-[var(--position)] top-0"></div>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape two sm right-[var(--position)] top-[10%]"></div>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape three left-[var(--position)] bottom-[42%]"></div>
      <div className="w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape four sm right-[var(--position)] bottom-[10%]"></div>
      {/* <Container>
        <Col className="w-full text-center">
          <div className="about-wrap !pt-0 p-6 md:p-7 lg:p-[54px] xl:p-[60px] flex flex-wrap items-center relative z-[1]">
            <div className="absolute top-0 left-0 w-full h-auto -z-[1]">
              <img src={card_shape} alt="" className='w-full h-auto' />
            </div>
            <div
              className="about-img relative -top-6 md:-top-12 w-full lg:w-7/12 xl:w-8/12 2xl:w-auto">
              <img src={about_img} className='hidden md:block' alt="" />
              <img src={about_img_2} alt="" className='md:hidden mx-auto w-full' />
            </div>
            <div className="about-des flex flex-wrap lg:block md:pl-1 lg:pl-5 lg:w-5/12 xl:pl-3 w-full xl:w-4/12 2xl:w-auto">
              {cardDes.map((item, index) => (
                <div
                  className={`rounded-[10px] p-4 bg-white bg-opacity-5 md:rounded-none md:bg-transparent md:p-0 text-left xl:mt-[34px] w-full md:w-1/3 lg:w-auto ${index == cardDes.length - 1 ? "md:mb-6 lg:mb-0" : 'mb-8 md:mb-6 lg:mb-4 xl:mb-14'}`} key={index}>
                  <h4 className="font-medium text-xl lg:text-2xl text-white mb-1 md:mb-2">{item.title}</h4>
                  <p className='font-regular text-base md:text-lg lg:text-xl text-white text-opacity-70'>{item.des}</p>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Container> */}
      <Container className='relative z-[2]' rowClass='items-center'>
        <Col className="w-full md:w-5/12 xl:w-6/12 text-center">
          <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0, transition: { duration: .5, delay: 0 } }}
              viewport={{ once: true, amount: 0 }}
            className="w-[80%] mx-auto mt-6 md:mt-0 md:w-full">
            <img src={a_img} alt="" />
          </motion.div>
        </Col>
        <Col className="w-full md:w-7/12 xl:w-6/12">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
            viewport={{ once: true, amount: 0 }}
            className="about-content lg:pr-[8%] mt-10 md:mt-0 text-center md:text-start">
            <span
              className="common-meta mb-2 block uppercase">ABOUT Solify</span>
            <h3
              className='!leading-[145%] text-3xl md:text-4xl lg:text-[44px] font-semibold'>About Solify</h3>
            <p
              className="text-sm md:text-xl lg:text-[22px] !leading-[160%] mt-5 text-[#B2B0B9]">Our platform harnesses the power of artificial intelligence (Al), primarily focused on snipers which are presumed to be the best public sniper in solana , to optimize trading processes, improve risk assessment, and enhance overall user experience.</p>
            {/* <p className="text-sm md:text-xl lg:text-[22px] !leading-[160%] mt-5 md:mt-7 lg:mt-10 text-[#B2B0B9]">Our platform harnesses the power of artificial intelligence (AI), primarily focused on lending, to optimize lending processes, improve risk assessment, and enhance overall user experience.</p> */}
          </motion.div>
        </Col>
      </Container>
      <Container rowClass='common-row mt-12 md:mt-16 lg:mt-20'>
        {about_card.map((item, index) => (
          <Col className="w-full md:w-4/12" key={index}>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: `0.${index + 1}` } }}
              viewport={{ once: true, amount: 0 }}
              className="about-card text-center md:text-left">
              <div className='mb-6 mx-auto md:mx-0 lg:mb-8' dangerouslySetInnerHTML={{ __html: item.icon }}></div>
              <h4 className='text-white font-semibold text-xl md:text-2xl mb-4 md:mb-7'>{item.title}</h4>
              <p className='pGradient !leading-relaxed'>{item.des}</p>
            </motion.div>
          </Col>
        ))}
      </Container>
    </div>
  )
}