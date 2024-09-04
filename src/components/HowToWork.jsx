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
      des: 'Allows seamless spending of digital assets in everyday transactions.',
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0007 5.33301C17.4151 5.33301 18.7717 5.89491 19.7719 6.8951C20.7721 7.8953 21.334 9.25185 21.334 10.6663C21.334 12.0808 20.7721 13.4374 19.7719 14.4376C18.7717 15.4378 17.4151 15.9997 16.0007 15.9997C14.5862 15.9997 13.2296 15.4378 12.2294 14.4376C11.2292 13.4374 10.6673 12.0808 10.6673 10.6663C10.6673 9.25185 11.2292 7.8953 12.2294 6.8951C13.2296 5.89491 14.5862 5.33301 16.0007 5.33301ZM16.0007 18.6663C21.894 18.6663 26.6673 21.053 26.6673 23.9997V26.6663H5.33398V23.9997C5.33398 21.053 10.1073 18.6663 16.0007 18.6663Z" fill="white"/>
      </svg>`,
      title: 'Holders',
      des: 'Enjoy exclusive benefits including staking rewards, governance rights and early access to new features and services.',
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
      des: 'Offering a secure user-friendly platform for trading a wide range of crypto currency with fast and transparent transactions.',
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.6673 12.0003C28.6675 13.7117 28.1611 15.3849 27.212 16.809C26.263 18.2331 24.9136 19.3444 23.334 20.003V20.0003C23.334 16.9945 22.1399 14.1119 20.0145 11.9864C17.8891 9.86103 15.0064 8.66698 12.0007 8.66698H11.998C12.7697 6.81863 14.1577 5.29454 15.926 4.35373C17.6943 3.41292 19.7338 3.11344 21.6979 3.5062C23.662 3.89896 25.4295 4.95972 26.7001 6.5082C27.9706 8.05667 28.6657 9.99732 28.6673 12.0003ZM9.33398 4.00032C7.9195 4.00032 6.56294 4.56222 5.56275 5.56241C4.56255 6.56261 4.00065 7.91916 4.00065 9.33365V11.3337H6.66732V9.33365C6.66732 8.62641 6.94827 7.94813 7.44837 7.44803C7.94846 6.94793 8.62674 6.66698 9.33398 6.66698H11.334V4.00032H9.33398ZM25.334 20.667V22.667C25.334 23.3742 25.053 24.0525 24.5529 24.5526C24.0528 25.0527 23.3746 25.3337 22.6673 25.3337H20.6673V28.0003H22.6673C24.0818 28.0003 25.4384 27.4384 26.4386 26.4382C27.4387 25.438 28.0007 24.0815 28.0007 22.667V20.667H25.334ZM12.0007 28.667C14.2992 28.667 16.5036 27.7539 18.1289 26.1286C19.7542 24.5033 20.6673 22.2989 20.6673 20.0003C20.6673 17.7018 19.7542 15.4974 18.1289 13.8721C16.5036 12.2467 14.2992 11.3337 12.0007 11.3337C9.70211 11.3337 7.49771 12.2467 5.87239 13.8721C4.24708 15.4974 3.33398 17.7018 3.33398 20.0003C3.33398 22.2989 4.24708 24.5033 5.87239 26.1286C7.49771 27.7539 9.70211 28.667 12.0007 28.667ZM12.0007 16.667L15.334 20.0003L12.0007 23.3337L8.66732 20.0003L12.0007 16.667Z" fill="white"/>
      </svg>`,
      title: 'Token Burn',
      des: 'Reducing supply increase scarcity and enhance the value of remaining tokens.',
    },

  ];
  return (
    <div className='howTo common-padding-top relative'>
      <div className="shape w-[var(--width)] h-[var(--width)] rounded-full absolute common-shape three left-[var(--position)] bottom-[42%]"></div>
      <Container>
        <Col className="w-full">
          <div className="howTo-wrap gap-6 relative z-[1]">
            <div className='relative z-[1] !pt-0 p-6 md:p-12 lg:p-16 text-center'>
              <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0 }}
                className="absolute top-full -left-[var(--width)/2] icon -mt-[100px]">
                <img src={bitcoin} alt="" />
              </motion.div>
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0 }}
                className="absolute top-full -right-[var(--width)/2] icon -mt-[100px]">
                <img src={usd} alt="" />
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
                viewport={{ once: true, amount: 0 }}
                className="text-center relative bottom-7 md:bottom-12 lg:bottom-14 xl:bottom-[70px] w-20 h-20 md:w-36 md:h-36 lg:w-auto lg:h-auto mx-auto">
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
              <h3 className='text-center mt-16 md:mt-5 lg:mt-7 px-[25%] md:px-0 !leading-[145%] text-2xl md:text-4xl lg:text-[44px] font-medium opacity-0'>How SOLIFY Works</h3>
              {/* for mobile */}
              {/* <div className='mt-10 md:hidden px-4 opacity-0'>
                <div className="flex items-center justify-between">
                  <div className="howTo-card">
                    <div className="w-[96px] h-[94px] mx-auto bg-gradient p-[1px] rounded-3 md:rounded-[20px] overflow-hidden flex-auto flex-grow-0 flex-shrink-0">
                      <div className="bg-[#121415] w-full h-full mx-auto flex flex-col justify-center text-center">
                        <span className='flex items-center justify-center'>
                          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4174 12.7875V14.2807H1.96539V12.7875C1.96539 12.7875 1.96539 9.80124 7.19142 9.80124C12.4174 9.80124 12.4174 12.7875 12.4174 12.7875ZM9.80443 5.69507C9.80443 5.17827 9.65118 4.67307 9.36406 4.24336C9.07694 3.81365 8.66884 3.47874 8.19138 3.28096C7.71391 3.08319 7.18852 3.03144 6.68165 3.13227C6.17477 3.23309 5.70918 3.48196 5.34374 3.84739C4.9783 4.21283 4.72944 4.67842 4.62862 5.1853C4.52779 5.69217 4.57954 6.21756 4.77731 6.69503C4.97508 7.17249 5.31 7.58059 5.73971 7.86771C6.16942 8.15484 6.67461 8.30809 7.19142 8.30809C7.88443 8.30809 8.54906 8.03279 9.0391 7.54275C9.52913 7.05272 9.80443 6.38809 9.80443 5.69507ZM12.3727 9.80124C12.8316 10.1564 13.2072 10.6079 13.4729 11.1238C13.7386 11.6397 13.888 12.2076 13.9106 12.7875V14.2807H16.8969V12.7875C16.8969 12.7875 16.8969 10.0775 12.3727 9.80124ZM11.6709 3.08206C11.1571 3.07967 10.6546 3.23326 10.23 3.52254C10.6835 4.15618 10.9273 4.91586 10.9273 5.69507C10.9273 6.47428 10.6835 7.23396 10.23 7.86761C10.6546 8.15688 11.1571 8.31048 11.6709 8.30809C12.3639 8.30809 13.0285 8.03279 13.5186 7.54275C14.0086 7.05272 14.2839 6.38809 14.2839 5.69507C14.2839 5.00206 14.0086 4.33743 13.5186 3.84739C13.0285 3.35736 12.3639 3.08206 11.6709 3.08206Z" fill="white" />
                          </svg>
                        </span>
                        <h4 className='mb-0 text-white font-medium mt-2 md:mt-3 lg:mt-4'>Users</h4>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-[6px]">
                      <Avatar className='w-3 h-3 mt-[6px]' src={icon_1} />
                      <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.60407 19.3959C4.82273 19.6146 5.17726 19.6146 5.39593 19.3959L8.95931 15.8326C9.17798 15.6139 9.17798 15.2594 8.95931 15.0407C8.74065 14.822 8.38612 14.822 8.16745 15.0407L5 18.2081L1.83255 15.0407C1.61388 14.822 1.25935 14.822 1.04069 15.0407C0.82202 15.2594 0.82202 15.6139 1.04069 15.8326L4.60407 19.3959ZM4.44007 -2.44754e-08L4.44007 19L5.55993 19L5.55993 2.44754e-08L4.44007 -2.44754e-08Z" fill="url(#paint0_linear_0_289)" />
                        <defs>
                          <linearGradient id="paint0_linear_0_289" x1="3.88688" y1="27.4537" x2="7.94681" y2="26.9261" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FFFF" />
                            <stop offset="1" stopColor="#0152FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <Avatar className='w-3 h-3 mt-[6px]' src={icon_2} />
                    </div>
                    <div className='bg-gradient p-[1px] rounded-3 md:rounded-[20px] min-w-[150px] flex items-center justify-center'>
                      <div className="py-4 md:py-4 xl:py-6 w-full bg-[#121415]">
                        <h4 className="flex items-center gap-2 justify-center">
                          <span>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.5" d="M8.0271 15.3697H11.0134C13.8287 15.3697 15.2368 15.3697 16.111 14.4947C16.986 13.6205 16.986 12.2124 16.986 9.39708C16.986 9.06709 16.9845 8.19659 16.983 7.90393H2.0545C2.053 8.19659 2.0545 9.06709 2.0545 9.39708C2.0545 12.2124 2.0545 13.6205 2.92874 14.4947C3.80372 15.3697 5.21251 15.3697 8.0271 15.3697Z" fill="white" />
                              <path d="M8.0227 3.4245H11.0165C13.8393 3.4245 15.251 3.4245 16.1275 4.25768C16.7591 4.85718 16.9361 5.72096 16.9853 7.15738V7.90395H2.05383V7.15738C2.10311 5.72022 2.28005 4.85792 2.91165 4.25768C3.78813 3.4245 5.1999 3.4245 8.0227 3.4245ZM9.89287 11.8235C9.74437 11.8235 9.60195 11.8825 9.49694 11.9875C9.39193 12.0925 9.33294 12.2349 9.33294 12.3834C9.33294 12.5319 9.39193 12.6743 9.49694 12.7793C9.60195 12.8843 9.74437 12.9433 9.89287 12.9433H11.0127C11.1612 12.9433 11.3037 12.8843 11.4087 12.7793C11.5137 12.6743 11.5727 12.5319 11.5727 12.3834C11.5727 12.2349 11.5137 12.0925 11.4087 11.9875C11.3037 11.8825 11.1612 11.8235 11.0127 11.8235H9.89287ZM5.04013 11.8235C4.89163 11.8235 4.74921 11.8825 4.6442 11.9875C4.53919 12.0925 4.4802 12.2349 4.4802 12.3834C4.4802 12.5319 4.53919 12.6743 4.6442 12.7793C4.74921 12.8843 4.89163 12.9433 5.04013 12.9433H8.02643C8.17494 12.9433 8.31736 12.8843 8.42237 12.7793C8.52737 12.6743 8.58637 12.5319 8.58637 12.3834C8.58637 12.2349 8.52737 12.0925 8.42237 11.9875C8.31736 11.8825 8.17494 11.8235 8.02643 11.8235H5.04013Z" fill="white" />
                            </svg>
                          </span>
                          <span className='uppercase font-medium leading-[130%]'>CARD</span>
                        </h4>
                      </div>
                    </div>
                    <div className="text-center pl-[50%]">
                      <svg className='mx-auto' width="88" height="50" viewBox="0 0 88 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M83.3959 48.8959C83.1773 49.1146 82.8227 49.1146 82.6041 48.8959L79.0407 45.3325C78.822 45.1139 78.822 44.7594 79.0407 44.5407C79.2594 44.322 79.6139 44.322 79.8326 44.5407L83 47.7081L86.1675 44.5407C86.3861 44.322 86.7406 44.322 86.9593 44.5407C87.178 44.7593 87.178 45.1139 86.9593 45.3325L83.3959 48.8959ZM83.5599 29.25L83.5599 48.5L82.4401 48.5L82.4401 29.25L83.5599 29.25ZM1.55993 0L1.55993 19.25L0.440069 19.25L0.440069 0L1.55993 0ZM6 23.6901L78 23.6901L78 24.8099L6 24.8099L6 23.6901ZM1.55993 19.25C1.55993 21.7022 3.54782 23.6901 6 23.6901L6 24.8099C2.92934 24.8099 0.440069 22.3207 0.440069 19.25L1.55993 19.25ZM82.4401 29.25C82.4401 26.7978 80.4522 24.8099 78 24.8099L78 23.6901C81.0707 23.6901 83.5599 26.1793 83.5599 29.25L82.4401 29.25Z" fill="url(#paint0_linear_0_291)" />
                        <defs>
                          <linearGradient id="paint0_linear_0_291" x1="92.2762" y1="70.0791" x2="73.9047" y2="-6.61448" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FFFF" />
                            <stop offset="1" stopColor="#0152FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="howTo-card">
                    <div className="w-[96px] h-[94px] mx-auto bg-gradient p-[1px] rounded-3 md:rounded-[20px] overflow-hidden flex-auto flex-grow-0 flex-shrink-0">
                      <div className="bg-[#121415] w-full h-full mx-auto flex flex-col justify-center text-center">
                        <span className='flex items-center justify-center'>
                          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4174 12.7875V14.2807H1.96539V12.7875C1.96539 12.7875 1.96539 9.80124 7.19142 9.80124C12.4174 9.80124 12.4174 12.7875 12.4174 12.7875ZM9.80443 5.69507C9.80443 5.17827 9.65118 4.67307 9.36406 4.24336C9.07694 3.81365 8.66884 3.47874 8.19138 3.28096C7.71391 3.08319 7.18852 3.03144 6.68165 3.13227C6.17477 3.23309 5.70918 3.48196 5.34374 3.84739C4.9783 4.21283 4.72944 4.67842 4.62862 5.1853C4.52779 5.69217 4.57954 6.21756 4.77731 6.69503C4.97508 7.17249 5.31 7.58059 5.73971 7.86771C6.16942 8.15484 6.67461 8.30809 7.19142 8.30809C7.88443 8.30809 8.54906 8.03279 9.0391 7.54275C9.52913 7.05272 9.80443 6.38809 9.80443 5.69507ZM12.3727 9.80124C12.8316 10.1564 13.2072 10.6079 13.4729 11.1238C13.7386 11.6397 13.888 12.2076 13.9106 12.7875V14.2807H16.8969V12.7875C16.8969 12.7875 16.8969 10.0775 12.3727 9.80124ZM11.6709 3.08206C11.1571 3.07967 10.6546 3.23326 10.23 3.52254C10.6835 4.15618 10.9273 4.91586 10.9273 5.69507C10.9273 6.47428 10.6835 7.23396 10.23 7.86761C10.6546 8.15688 11.1571 8.31048 11.6709 8.30809C12.3639 8.30809 13.0285 8.03279 13.5186 7.54275C14.0086 7.05272 14.2839 6.38809 14.2839 5.69507C14.2839 5.00206 14.0086 4.33743 13.5186 3.84739C13.0285 3.35736 12.3639 3.08206 11.6709 3.08206Z" fill="white" />
                          </svg>
                        </span>
                        <h4 className='mb-0 text-white font-medium mt-2 md:mt-3 lg:mt-4'>Users</h4>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-[6px]">
                      <Avatar className='w-3 h-3 mt-[6px]' src={icon_1} />
                      <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.60407 19.3959C4.82273 19.6146 5.17726 19.6146 5.39593 19.3959L8.95931 15.8326C9.17798 15.6139 9.17798 15.2594 8.95931 15.0407C8.74065 14.822 8.38612 14.822 8.16745 15.0407L5 18.2081L1.83255 15.0407C1.61388 14.822 1.25935 14.822 1.04069 15.0407C0.82202 15.2594 0.82202 15.6139 1.04069 15.8326L4.60407 19.3959ZM4.44007 -2.44754e-08L4.44007 19L5.55993 19L5.55993 2.44754e-08L4.44007 -2.44754e-08Z" fill="url(#paint0_linear_0_289)" />
                        <defs>
                          <linearGradient id="paint0_linear_0_289" x1="3.88688" y1="27.4537" x2="7.94681" y2="26.9261" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FFFF" />
                            <stop offset="1" stopColor="#0152FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <Avatar className='w-3 h-3 mt-[6px]' src={icon_2} />
                    </div>
                    <div className='bg-gradient p-[1px] rounded-3 md:rounded-[20px] min-w-[150px] flex items-center justify-center'>
                      <div className="py-4 md:py-4 xl:py-6 w-full bg-[#121415]">
                        <h4 className="flex items-center gap-2 justify-center">
                          <span>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.52382 15.024C3.6117 15.024 0.440491 11.8528 0.440491 7.94063C0.440491 4.02851 3.6117 0.8573 7.52382 0.8573C11.4359 0.8573 14.6072 4.02851 14.6072 7.94063C14.6072 11.8528 11.4359 15.024 7.52382 15.024ZM7.52382 5.81563H4.69049V7.2323H11.0655L7.52382 3.69063V5.81563ZM3.98216 8.64897L7.52382 12.1906V10.0656H10.3572V8.64897H3.98216Z" fill="white" />
                            </svg>
                          </span>
                          <span className='uppercase font-medium leading-[130%]'>DEX</span>
                        </h4>
                      </div>
                    </div>
                    <div className="text-center  pr-[50%]">
                      <svg className='mx-auto' width="88" height="50" viewBox="0 0 88 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.60406 48.8959C4.82274 49.1146 5.17726 49.1146 5.39593 48.8959L8.95931 45.3325C9.17798 45.1139 9.17798 44.7594 8.95931 44.5407C8.74064 44.322 8.38611 44.322 8.16745 44.5407L5 47.7081L1.83255 44.5407C1.61388 44.322 1.25935 44.322 1.04069 44.5407C0.82202 44.7593 0.82202 45.1139 1.04069 45.3325L4.60406 48.8959ZM4.44007 29.25L4.44007 48.5L5.55993 48.5L5.55993 29.25L4.44007 29.25ZM86.4401 0L86.4401 19.25L87.5599 19.25L87.5599 0L86.4401 0ZM82 23.6901L10 23.6901L10 24.8099L82 24.8099L82 23.6901ZM86.4401 19.25C86.4401 21.7022 84.4522 23.6901 82 23.6901L82 24.8099C85.0707 24.8099 87.5599 22.3207 87.5599 19.25L86.4401 19.25ZM5.55993 29.25C5.55993 26.7978 7.54782 24.8099 10 24.8099L10 23.6901C6.92934 23.6901 4.44007 26.1793 4.44007 29.25L5.55993 29.25Z" fill="url(#paint0_linear_0_293)" />
                        <defs>
                          <linearGradient id="paint0_linear_0_293" x1="-4.27615" y1="70.0791" x2="14.0953" y2="-6.61448" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FFFF" />
                            <stop offset="1" stopColor="#0152FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='flex howTo-btn w-full items-center justify-center'>
                  <a href="#" className="btn rounded-full text-center block">
                    <span className='text-base md:text-lg lg:text-xl xl:text-2xl text-white block w-full h-full rounded-full'>Profit Generated</span>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <div className="howTo-card">
                    <div className="pl-[50%] relative z-[1]">
                      <div className="icon2 absolute bottom-[10px] right-11 w-4 h-4">
                        <img src={btc} alt="" />
                      </div>
                      <CButton isLink={false} className="!text-[8px] !min-w-8 !px-0 !py-0 !rounded-full absolute top-3 right-0">50%</CButton>
                      <svg width="88" height="58" viewBox="0 0 88 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.60406 57.3959C4.82274 57.6146 5.17726 57.6146 5.39593 57.3959L8.95931 53.8326C9.17798 53.6139 9.17798 53.2594 8.95931 53.0407C8.74064 52.822 8.38611 52.822 8.16745 53.0407L5 56.2081L1.83255 53.0407C1.61388 52.822 1.25935 52.822 1.04069 53.0407C0.822019 53.2594 0.822019 53.6139 1.04069 53.8326L4.60406 57.3959ZM10 24.75L10 24.1901L10 24.75ZM4.44007 29.75L4.44007 57L5.55993 57L5.55993 29.75L4.44007 29.75ZM86.4401 0.5L86.4401 19.75L87.5599 19.75L87.5599 0.5L86.4401 0.5ZM82 24.1901L10 24.1901L10 25.3099L82 25.3099L82 24.1901ZM86.4401 19.75C86.4401 22.2022 84.4522 24.1901 82 24.1901L82 25.3099C85.0707 25.3099 87.5599 22.8207 87.5599 19.75L86.4401 19.75ZM5.55993 29.75C5.55993 27.2978 7.54782 25.3099 10 25.3099L10 24.1901C6.92934 24.1901 4.44007 26.6793 4.44007 29.75L5.55993 29.75Z" fill="url(#paint0_linear_0_290)" />
                        <defs>
                          <linearGradient id="paint0_linear_0_290" x1="-4.27615" y1="82.1385" x2="20.1819" y2="-5.50704" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FFFF" />
                            <stop offset="1" stopColor="#0152FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className='bg-gradient p-[1px] rounded-3 md:rounded-[20px] min-w-[150px] flex items-center justify-center'>
                      <div className="py-4 md:py-4 xl:py-6 w-full bg-[#121415]">
                        <h4 className="flex items-center gap-2 justify-center">
                          <span>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.51075 3.48315C10.3046 3.48315 11.066 3.79852 11.6274 4.35989C12.1887 4.92125 12.5041 5.68262 12.5041 6.47651C12.5041 7.27039 12.1887 8.03176 11.6274 8.59313C11.066 9.15449 10.3046 9.46986 9.51075 9.46986C8.71687 9.46986 7.9555 9.15449 7.39413 8.59313C6.83277 8.03176 6.5174 7.27039 6.5174 6.47651C6.5174 5.68262 6.83277 4.92125 7.39413 4.35989C7.9555 3.79852 8.71687 3.48315 9.51075 3.48315ZM9.51075 10.9665C12.8184 10.9665 15.4975 12.3061 15.4975 13.9599V15.4566H3.52405V13.9599C3.52405 12.3061 6.2031 10.9665 9.51075 10.9665Z" fill="white" />
                            </svg>
                          </span>
                          <span className='uppercase font-medium leading-[130%]'>Holders</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="howTo-card">
                    <div className="pr-[50%] relative z-[1]">
                      <div className="icon2 absolute bottom-[10px] left-14 w-4 h-4">
                        <img src={btc} alt="" />
                      </div>
                      <CButton isLink={false} className="!text-[8px] !min-w-8 !px-0 !py-0 !rounded-full absolute top-3 left-4">50%</CButton>
                      <svg width="88" height="58" viewBox="0 0 88 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M83.3959 57.3959C83.1773 57.6146 82.8227 57.6146 82.6041 57.3959L79.0407 53.8326C78.822 53.6139 78.822 53.2594 79.0407 53.0407C79.2594 52.822 79.6139 52.822 79.8326 53.0407L83 56.2081L86.1675 53.0407C86.3861 52.822 86.7406 52.822 86.9593 53.0407C87.178 53.2594 87.178 53.6139 86.9593 53.8326L83.3959 57.3959ZM78 24.75L78 24.1901L78 24.75ZM83.5599 29.75L83.5599 57L82.4401 57L82.4401 29.75L83.5599 29.75ZM1.55993 0.5L1.55993 19.75L0.44007 19.75L0.44007 0.5L1.55993 0.5ZM6 24.1901L78 24.1901L78 25.3099L6 25.3099L6 24.1901ZM1.55993 19.75C1.55993 22.2022 3.54782 24.1901 6 24.1901L6 25.3099C2.92934 25.3099 0.44007 22.8207 0.44007 19.75L1.55993 19.75ZM82.4401 29.75C82.4401 27.2978 80.4522 25.3099 78 25.3099L78 24.1901C81.0707 24.1901 83.5599 26.6793 83.5599 29.75L82.4401 29.75Z" fill="url(#paint0_linear_0_292)" />
                        <defs>
                          <linearGradient id="paint0_linear_0_292" x1="92.2762" y1="82.1385" x2="67.8181" y2="-5.50704" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FFFF" />
                            <stop offset="1" stopColor="#0152FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className='bg-gradient p-[1px] rounded-3 md:rounded-[20px] min-w-[150px] flex items-center justify-center'>
                      <div className="py-4 md:py-4 xl:py-6 w-full bg-[#121415]">
                        <h4 className="flex items-center gap-2 justify-center">
                          <span>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.125 7.25018C16.1251 8.21284 15.8403 9.15399 15.3064 9.95505C14.7725 10.7561 14.0135 11.3812 13.125 11.7517V11.7502C13.125 10.0594 12.4534 8.43792 11.2578 7.24237C10.0623 6.04683 8.44076 5.37518 6.75 5.37518H6.7485C7.18261 4.33548 7.96334 3.47818 8.95801 2.94897C9.95267 2.41977 11.0999 2.25131 12.2047 2.47224C13.3095 2.69317 14.3038 3.28984 15.0184 4.16086C15.7331 5.03188 16.1241 6.12349 16.125 7.25018ZM5.25 2.75018C4.45435 2.75018 3.69129 3.06625 3.12868 3.62886C2.56607 4.19147 2.25 4.95453 2.25 5.75018V6.87518H3.75V5.75018C3.75 5.35235 3.90804 4.97082 4.18934 4.68952C4.47064 4.40821 4.85218 4.25018 5.25 4.25018H6.375V2.75018H5.25ZM14.25 12.1252V13.2502C14.25 13.648 14.092 14.0295 13.8107 14.3108C13.5294 14.5921 13.1478 14.7502 12.75 14.7502H11.625V16.2502H12.75C13.5457 16.2502 14.3087 15.9341 14.8713 15.3715C15.4339 14.8089 15.75 14.0458 15.75 13.2502V12.1252H14.25ZM6.75 16.6252C8.04293 16.6252 9.28291 16.1116 10.1971 15.1973C11.1114 14.2831 11.625 13.0431 11.625 11.7502C11.625 10.4572 11.1114 9.21727 10.1971 8.30303C9.28291 7.38879 8.04293 6.87518 6.75 6.87518C5.45707 6.87518 4.21709 7.38879 3.30285 8.30303C2.38861 9.21727 1.875 10.4572 1.875 11.7502C1.875 13.0431 2.38861 14.2831 3.30285 15.1973C4.21709 16.1116 5.45707 16.6252 6.75 16.6252ZM6.75 9.87518L8.625 11.7502L6.75 13.6252L4.875 11.7502L6.75 9.87518Z" fill="white" />
                            </svg>
                          </span>
                          <span className='uppercase font-medium leading-[130%]'>Token Burn</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* for mobile */}
              {/* <div className='howTo-inner opacity-0 hidden md:flex flex-wrap items-center mt-14 md:mt-20 lg:mt-24 xl:mt-[160px]'>
                {workItem.map((item, index) => (
                  <>
                    <div className={`w-full lg:w-1/2 ${index != workItem.length - 1 ? 'mb-6 md:mb-8 lg:mb-0' : ''}`} key={index}>
                      <div className={`howTo-card md:flex items-center ${index % 2 != 0 ? 'ms-auto' : ''}`}>
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
              </div> */}
            </motion.div>
          </div>
        </Col >
      </Container >
    </div >
  )
}
