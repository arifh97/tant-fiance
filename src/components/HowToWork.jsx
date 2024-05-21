import { motion } from 'framer-motion'
import { Container, Col } from './CAllComponent'
import solana from '../assets/img/solana.png'
import bitcoin from '../assets/img/bitcoin.png'
import usd from '../assets/img/usd.png'
import icon_1 from '../assets/img/coins/1.png'
import icon_2 from '../assets/img/coins/3.png'
import { Avatar } from "@nextui-org/react";
import btc from '../assets/img/btc.png'
import { CButton } from "./CAllComponent"

export default function HowToWork() {
  const workItem = [
    {
      user: {
        icon: `<svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8327 18.1664V20.8331H0.166016V18.1664C0.166016 18.1664 0.166016 12.8331 9.49935 12.8331C18.8327 12.8331 18.8327 18.1664 18.8327 18.1664ZM14.166 5.49972C14.166 4.57674 13.8923 3.67449 13.3795 2.90706C12.8668 2.13963 12.1379 1.54149 11.2852 1.18829C10.4325 0.835077 9.49417 0.742661 8.58893 0.922726C7.68368 1.10279 6.85216 1.54725 6.19952 2.19989C5.54687 2.85254 5.10242 3.68406 4.92235 4.5893C4.74229 5.49455 4.8347 6.43286 5.18791 7.28558C5.54112 8.1383 6.13926 8.86714 6.90669 9.37992C7.67412 9.8927 8.57637 10.1664 9.49935 10.1664C10.737 10.1664 11.924 9.67473 12.7992 8.79956C13.6744 7.92439 14.166 6.7374 14.166 5.49972ZM18.7527 12.8331C19.5723 13.4674 20.243 14.2736 20.7176 15.1951C21.1921 16.1165 21.459 17.1307 21.4994 18.1664V20.8331H26.8327V18.1664C26.8327 18.1664 26.8327 13.3264 18.7527 12.8331ZM17.4994 0.833057C16.5817 0.828789 15.6844 1.1031 14.926 1.61972C15.7359 2.75137 16.1714 4.10811 16.1714 5.49972C16.1714 6.89134 15.7359 8.24808 14.926 9.37972C15.6844 9.89635 16.5817 10.1707 17.4994 10.1664C18.737 10.1664 19.924 9.67473 20.7992 8.79956C21.6744 7.92439 22.166 6.7374 22.166 5.49972C22.166 4.26205 21.6744 3.07506 20.7992 2.19989C19.924 1.32472 18.737 0.833057 17.4994 0.833057Z" fill="white"/>
        </svg>`,
        text: 'Users'
      },
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.5" d="M13.3339 26.6663H18.6672C23.6952 26.6663 26.2099 26.6663 27.7712 25.1037C29.3339 23.5423 29.3339 21.0277 29.3339 15.9997C29.3339 15.4103 29.3312 13.8557 29.3285 13.333H2.6672C2.66453 13.8557 2.6672 15.4103 2.6672 15.9997C2.6672 21.0277 2.6672 23.5423 4.22853 25.1037C5.7912 26.6663 8.3072 26.6663 13.3339 26.6663Z" fill="white"/>
      <path d="M13.326 5.33301H18.6727C23.714 5.33301 26.2353 5.33301 27.8007 6.82101C28.9287 7.89167 29.2447 9.43434 29.3327 11.9997V13.333H2.66602V11.9997C2.75402 9.43301 3.07002 7.89301 4.19802 6.82101C5.76335 5.33301 8.28468 5.33301 13.326 5.33301ZM16.666 20.333C16.4008 20.333 16.1464 20.4384 15.9589 20.6259C15.7714 20.8134 15.666 21.0678 15.666 21.333C15.666 21.5982 15.7714 21.8526 15.9589 22.0401C16.1464 22.2277 16.4008 22.333 16.666 22.333H18.666C18.9312 22.333 19.1856 22.2277 19.3731 22.0401C19.5607 21.8526 19.666 21.5982 19.666 21.333C19.666 21.0678 19.5607 20.8134 19.3731 20.6259C19.1856 20.4384 18.9312 20.333 18.666 20.333H16.666ZM7.99935 20.333C7.73413 20.333 7.47978 20.4384 7.29224 20.6259C7.10471 20.8134 6.99935 21.0678 6.99935 21.333C6.99935 21.5982 7.10471 21.8526 7.29224 22.0401C7.47978 22.2277 7.73413 22.333 7.99935 22.333H13.3327C13.5979 22.333 13.8523 22.2277 14.0398 22.0401C14.2273 21.8526 14.3327 21.5982 14.3327 21.333C14.3327 21.0678 14.2273 20.8134 14.0398 20.6259C13.8523 20.4384 13.5979 20.333 13.3327 20.333H7.99935Z" fill="white"/>
      </svg>`,
      title: 'CARD',
      des: 'Utilizing cutting-edge technology, transactions are processed in real-time, ensuring swift.',
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0007 5.33301C17.4151 5.33301 18.7717 5.89491 19.7719 6.8951C20.7721 7.8953 21.334 9.25185 21.334 10.6663C21.334 12.0808 20.7721 13.4374 19.7719 14.4376C18.7717 15.4378 17.4151 15.9997 16.0007 15.9997C14.5862 15.9997 13.2296 15.4378 12.2294 14.4376C11.2292 13.4374 10.6673 12.0808 10.6673 10.6663C10.6673 9.25185 11.2292 7.8953 12.2294 6.8951C13.2296 5.89491 14.5862 5.33301 16.0007 5.33301ZM16.0007 18.6663C21.894 18.6663 26.6673 21.053 26.6673 23.9997V26.6663H5.33398V23.9997C5.33398 21.053 10.1073 18.6663 16.0007 18.6663Z" fill="white"/>
      </svg>`,
      title: 'Holders',
      des: 'Utilizing cutting-edge technology, transactions are processed in real-time, ensuring swift.',
    },
    {
      user: {
        icon: `<svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8327 18.1664V20.8331H0.166016V18.1664C0.166016 18.1664 0.166016 12.8331 9.49935 12.8331C18.8327 12.8331 18.8327 18.1664 18.8327 18.1664ZM14.166 5.49972C14.166 4.57674 13.8923 3.67449 13.3795 2.90706C12.8668 2.13963 12.1379 1.54149 11.2852 1.18829C10.4325 0.835077 9.49417 0.742661 8.58893 0.922726C7.68368 1.10279 6.85216 1.54725 6.19952 2.19989C5.54687 2.85254 5.10242 3.68406 4.92235 4.5893C4.74229 5.49455 4.8347 6.43286 5.18791 7.28558C5.54112 8.1383 6.13926 8.86714 6.90669 9.37992C7.67412 9.8927 8.57637 10.1664 9.49935 10.1664C10.737 10.1664 11.924 9.67473 12.7992 8.79956C13.6744 7.92439 14.166 6.7374 14.166 5.49972ZM18.7527 12.8331C19.5723 13.4674 20.243 14.2736 20.7176 15.1951C21.1921 16.1165 21.459 17.1307 21.4994 18.1664V20.8331H26.8327V18.1664C26.8327 18.1664 26.8327 13.3264 18.7527 12.8331ZM17.4994 0.833057C16.5817 0.828789 15.6844 1.1031 14.926 1.61972C15.7359 2.75137 16.1714 4.10811 16.1714 5.49972C16.1714 6.89134 15.7359 8.24808 14.926 9.37972C15.6844 9.89635 16.5817 10.1707 17.4994 10.1664C18.737 10.1664 19.924 9.67473 20.7992 8.79956C21.6744 7.92439 22.166 6.7374 22.166 5.49972C22.166 4.26205 21.6744 3.07506 20.7992 2.19989C19.924 1.32472 18.737 0.833057 17.4994 0.833057Z" fill="white"/>
        </svg>`,
        text: 'Users'
      },
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0072 29.3376C8.64316 29.3376 2.67383 23.3682 2.67383 16.0042C2.67383 8.64023 8.64316 2.6709 16.0072 2.6709C23.3712 2.6709 29.3405 8.64023 29.3405 16.0042C29.3405 23.3682 23.3712 29.3376 16.0072 29.3376ZM16.0072 12.0042H10.6738V14.6709H22.6738L16.0072 8.00423V12.0042ZM9.34049 17.3376L16.0072 24.0042V20.0042H21.3405V17.3376H9.34049Z" fill="white"/>
      </svg>`,
      title: 'DEX',
      des: 'Utilizing cutting-edge technology, transactions are processed in real-time, ensuring swift.',
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.6673 12.0003C28.6675 13.7117 28.1611 15.3849 27.212 16.809C26.263 18.2331 24.9136 19.3444 23.334 20.003V20.0003C23.334 16.9945 22.1399 14.1119 20.0145 11.9864C17.8891 9.86103 15.0064 8.66698 12.0007 8.66698H11.998C12.7697 6.81863 14.1577 5.29454 15.926 4.35373C17.6943 3.41292 19.7338 3.11344 21.6979 3.5062C23.662 3.89896 25.4295 4.95972 26.7001 6.5082C27.9706 8.05667 28.6657 9.99732 28.6673 12.0003ZM9.33398 4.00032C7.9195 4.00032 6.56294 4.56222 5.56275 5.56241C4.56255 6.56261 4.00065 7.91916 4.00065 9.33365V11.3337H6.66732V9.33365C6.66732 8.62641 6.94827 7.94813 7.44837 7.44803C7.94846 6.94793 8.62674 6.66698 9.33398 6.66698H11.334V4.00032H9.33398ZM25.334 20.667V22.667C25.334 23.3742 25.053 24.0525 24.5529 24.5526C24.0528 25.0527 23.3746 25.3337 22.6673 25.3337H20.6673V28.0003H22.6673C24.0818 28.0003 25.4384 27.4384 26.4386 26.4382C27.4387 25.438 28.0007 24.0815 28.0007 22.667V20.667H25.334ZM12.0007 28.667C14.2992 28.667 16.5036 27.7539 18.1289 26.1286C19.7542 24.5033 20.6673 22.2989 20.6673 20.0003C20.6673 17.7018 19.7542 15.4974 18.1289 13.8721C16.5036 12.2467 14.2992 11.3337 12.0007 11.3337C9.70211 11.3337 7.49771 12.2467 5.87239 13.8721C4.24708 15.4974 3.33398 17.7018 3.33398 20.0003C3.33398 22.2989 4.24708 24.5033 5.87239 26.1286C7.49771 27.7539 9.70211 28.667 12.0007 28.667ZM12.0007 16.667L15.334 20.0003L12.0007 23.3337L8.66732 20.0003L12.0007 16.667Z" fill="white"/>
      </svg>`,
      title: 'Token Burn',
      des: 'Utilizing cutting-edge technology, transactions are processed in real-time, ensuring swift.',
    },

  ];
  return (
    <div className='howTo common-padding-top'>
      <div className="shape w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape three left-[var(--position)] bottom-[42%]"></div>
      <Container>
        <Col className="w-full">
          <div className="howTo-wrap gap-6 relative z-[1]">
            <div className='relative z-[1] !pt-0 p-6 md:p-12 lg:p-16 text-center'>
              <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0 }}
                className="absolute hidden md:block top-full -left-[var(--width)/2] icon -mt-5">
                <img src={bitcoin} alt="" />
              </motion.div>
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0 }}
                className="absolute hidden md:block top-full -right-[var(--width)/2] icon -mt-5">
                <img src={usd} alt="" />
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0 }}
                className="text-center relative bottom-7 md:bottom-12 lg:bottom-14 xl:bottom-[70px] w-16 h-16 md:w-36 md:h-36 lg:w-auto lg:h-auto mx-auto">
                <img src={solana} className='mx-auto' alt="" />
              </motion.div>
              <div>
                <motion.h3
                  initial={{ y: 100 }}
                  whileInView={{ y: 0, transition: { duration: .5, delay: 0.1 } }}
                  viewport={{ once: true, amount: 0 }}
                  className='!leading-[145%] text-lg md:text-[26px] lg:text-[44px] font-medium text-white text-opacity-70'>
                  The world's first DeFi platform integrating AI, debit card technology, and a decentralized exchange, designed for the people.
                </motion.h3>
              </div>
            </div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
              viewport={{ once: true, amount: 0 }}>
              <h3 className='text-center mt-4 md:mt-5 lg:mt-7 !leading-[145%] text-xl md:text-4xl lg:text-[44px] font-medium'>How Tant Finance Works</h3>
              <div className='howTo-inner flex flex-wrap items-center mt-14 md:mt-20 lg:mt-24 xl:mt-[160px]'>
                {workItem.map((item, index) => (
                  <>
                    <div className={`w-full lg:w-1/2 ${index != workItem.length - 1 ? 'mb-6 md:mb-8 lg:mb-0' : ''}`} key={index}>
                      <div className={`howTo-card flex items-center ${index % 2 != 0 ? 'ms-auto' : ''}`} key={index}>
                        {item.user ? (
                          <>
                            <div className="howTo-user bg-gradient p-[1px] rounded-3 md:rounded-[20px] overflow-hidden flex-auto flex-grow-0 flex-shrink-0">
                              <div className="p-4 md:py-8 md:px-8 xl:py-11 xl:px-14 bg-[#121415] text-center">
                                <span className='flex items-center justify-center' dangerouslySetInnerHTML={{ __html: item.user.icon }}></span>
                                <h4 className='mb-0 text-white font-medium mt-2 md:mt-3 lg:mt-4'>{item.user.text}</h4>
                              </div>
                            </div>
                            <div className='mr-3'>
                              <Avatar className='w-5 h-5 md:w-8 md:h-8 ml-3 mb-1' src={icon_1} />
                              <svg className='w-9 md:w-14' width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M53.7071 8.70711C54.0976 8.31659 54.0976 7.68342 53.7071 7.2929L47.3431 0.928936C46.9526 0.538412 46.3195 0.538412 45.9289 0.928936C45.5384 1.31946 45.5384 1.95263 45.9289 2.34315L51.5858 8L45.9289 13.6569C45.5384 14.0474 45.5384 14.6805 45.9289 15.0711C46.3195 15.4616 46.9526 15.4616 47.3431 15.0711L53.7071 8.70711ZM-8.74228e-08 9L53 9L53 7L8.74228e-08 7L-8.74228e-08 9Z" fill="url(#paint0_linear_0_431)" />
                                <defs>
                                  <linearGradient id="paint0_linear_0_431" x1="76.5813" y1="9.11313" x2="76.3894" y2="4.99357" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00FFFF" />
                                    <stop offset="1" stopColor="#0152FF" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <Avatar className='w-5 h-5 md:w-8 md:h-8 ml-3 mt-1' src={icon_2} />
                            </div>
                          </>
                        ) : ""}
                        <div className={`bg-gradient p-[1px] rounded-3 md:rounded-[20px] max-w-[350px] relative z-[1] ${index % 2 != 0 ? 'ml-auto' : ''}`}>
                          {index == 0 ? (
                            <div className="hidden lg:block shape absolute top-full lg:left-[30%] xxl:left-1/2 -mt-5">
                              <svg width="215" height="127" viewBox="0 0 215 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M214.207 119.707C214.598 119.317 214.598 118.683 214.207 118.293L207.843 111.929C207.453 111.538 206.819 111.538 206.429 111.929C206.038 112.319 206.038 112.953 206.429 113.343L212.086 119L206.429 124.657C206.038 125.047 206.038 125.681 206.429 126.071C206.819 126.462 207.453 126.462 207.843 126.071L214.207 119.707ZM25.5 119L25.5 118L25.5 119ZM0.5 0L0.5 95L2.5 95L2.5 0L0.5 0ZM25.5 120L213.5 120L213.5 118L25.5 118L25.5 120ZM0.5 95C0.5 108.807 11.6929 120 25.5 120L25.5 118C12.7975 118 2.5 107.703 2.5 95L0.5 95Z" fill="url(#paint0_linear_0_407)" />
                                <defs>
                                  <linearGradient id="paint0_linear_0_407" x1="207.5" y1="123.5" x2="54.1565" y2="-28.6458" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00FFFF" />
                                    <stop offset="1" stopColor="#0152FF" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          ) : ''}
                          {index == 1 ? (
                            <div className='hidden lg:block'>
                              <div className="shape absolute top-full left-1/2 -translate-x-1/2">
                                <svg width="220" height="86" viewBox="0 0 220 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M211.293 0.292893C211.683 -0.0976311 212.317 -0.0976311 212.707 0.292893L219.071 6.65685C219.462 7.04738 219.462 7.68054 219.071 8.07107C218.681 8.46159 218.047 8.46159 217.657 8.07107L212 2.41421L206.343 8.07107C205.953 8.46159 205.319 8.46159 204.929 8.07107C204.538 7.68054 204.538 7.04738 204.929 6.65685L211.293 0.292893ZM188 85L188 84L188 85ZM213 1L213 61L211 61L211 1L213 1ZM188 86L-7.82786e-06 86L-8.0027e-06 84L188 84L188 86ZM213 61C213 74.8071 201.807 86 188 86L188 84C200.703 84 211 73.7025 211 61L213 61Z" fill="url(#paint0_linear_0_408)" />
                                  <defs>
                                    <linearGradient id="paint0_linear_0_408" x1="5.99994" y1="89.5" x2="159.343" y2="-62.6458" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#0152FF" />
                                      <stop offset="1" stopColor="#00FFFF" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="icon2 absolute top-full left-[55%] xl:left-[62%] mt-6">
                                <img src={btc} alt="" />
                              </div>
                              <CButton isLink={false} className="md:!text-base xl:!text-xl !min-w-14 xl:!min-w-[70px] !px-0 !py-1 xl:!py-[6px] xl:!px-3 !rounded-full absolute top-full mt-[16%] xl:mt-[19%] ml-[34%]">50%</CButton>
                            </div>
                          ) : ''}
                          {index == 2 ? (
                            <div className="hidden lg:block shape absolute bottom-full lg:left-[30%] xxl:left-1/2 -mb-5">
                              <svg width="215" height="127" viewBox="0 0 215 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M214.207 7.2929C214.598 7.68342 214.598 8.31659 214.207 8.70711L207.843 15.0711C207.453 15.4616 206.819 15.4616 206.429 15.0711C206.038 14.6805 206.038 14.0474 206.429 13.6569L212.086 8L206.429 2.34315C206.038 1.95263 206.038 1.31946 206.429 0.928937C206.819 0.538411 207.453 0.538411 207.843 0.928937L214.207 7.2929ZM25.5 8.00001L25.5 9.00001L25.5 8.00001ZM0.5 127L0.5 32L2.5 32L2.5 127L0.5 127ZM25.5 7.00001L213.5 7L213.5 9L25.5 9.00001L25.5 7.00001ZM0.5 32C0.5 18.1929 11.6929 7.00001 25.5 7.00001L25.5 9.00001C12.7975 9.00001 2.5 19.2975 2.5 32L0.5 32Z" fill="url(#paint0_linear_0_410)" />
                                <defs>
                                  <linearGradient id="paint0_linear_0_410" x1="207.5" y1="3.5" x2="54.1565" y2="155.646" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00FFFF" />
                                    <stop offset="1" stopColor="#0152FF" />
                                  </linearGradient>
                                </defs>
                              </svg>

                            </div>
                          ) : ''}
                          {index == 3 ? (
                            <div className='hidden lg:block'>
                              <div className="shape absolute bottom-full left-1/2 -translate-x-1/2">
                                <svg width="220" height="86" viewBox="0 0 220 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M211.293 85.7071C211.683 86.0976 212.317 86.0976 212.707 85.7071L219.071 79.3431C219.462 78.9526 219.462 78.3195 219.071 77.9289C218.681 77.5384 218.047 77.5384 217.657 77.9289L212 83.5858L206.343 77.9289C205.953 77.5384 205.319 77.5384 204.929 77.9289C204.538 78.3195 204.538 78.9526 204.929 79.3431L211.293 85.7071ZM188 1.00001L188 2.00001L188 1.00001ZM213 85L213 25L211 25L211 85L213 85ZM188 5.53125e-06L-7.82786e-06 4.35455e-06L-8.0027e-06 2L188 2.00001L188 5.53125e-06ZM213 25C213 11.1929 201.807 6.7383e-06 188 5.53125e-06L188 2.00001C200.703 2.00001 211 12.2975 211 25L213 25Z" fill="url(#paint0_linear_0_409)" />
                                  <defs>
                                    <linearGradient id="paint0_linear_0_409" x1="5.99994" y1="-3.5" x2="159.343" y2="148.646" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#0152FF" />
                                      <stop offset="1" stopColor="#00FFFF" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="icon2 absolute bottom-full left-[55%] xl:left-[62%] mb-6">
                                <img src={btc} alt="" />
                              </div>
                              <CButton isLink={false} className="md:!text-base xl:!text-xl !min-w-14 xl:!min-w-[70px] !px-0 !py-1 xl:!py-[6px] xl:!px-3 !rounded-full absolute bottom-full mb-[16%] xl:mb-[19%] ml-[34%]">50%</CButton>
                            </div>
                          ) : ''}
                          <div className="py-4 px-5 md:py-4 md:px-6 xl:py-6 xl:px-10 bg-[#121415]">
                            <h4 className="flex items-center gap-2 md:gap-4">
                              <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                              <span className='uppercase font-medium leading-[130%]'>{item.title}</span>
                            </h4>
                            <p className='mt-2 lg:mt-3 pGradient'>{item.des}</p>
                          </div>
                        </div>
                      </div>
                    </div >


                    {index == 1 ? (
                      <div className='hidden lg:flex howTo-btn w-full items-center justify-center h-[250px] pl-[19%]'>
                        <a href="#" className="btn rounded-full text-center block">
                          <span className='text-base md:text-lg lg:text-xl xl:text-2xl text-white block w-full h-full rounded-full'>Profit Generated</span>
                        </a>
                      </div>
                    ) : ''}
                  </>
                ))}
              </div>
            </motion.div>
          </div>
        </Col >
      </Container >
    </div >
  )
}
