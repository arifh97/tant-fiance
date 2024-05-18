import { Button } from "@nextui-org/react";
import { Container, Col } from './CAllComponent'
import CommonTitle from './CommonTitle'
import shape from '../assets/img/why-shape.svg'
import { motion } from "framer-motion";

export default function WhyUs() {
  const why = [
    {
      icon: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 0C38.8075 0 50 11.1925 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25L0.00999987 24.3C0.38 10.8175 11.425 0 25 0ZM32.5 30.3C31.837 30.3 31.2011 30.5634 30.7322 31.0322C30.2634 31.5011 30 32.137 30 32.8V32.8375C30 33.5005 30.2634 34.1364 30.7322 34.6053C31.2011 35.0741 31.837 35.3375 32.5 35.3375C33.163 35.3375 33.7989 35.0741 34.2678 34.6053C34.7366 34.1364 35 33.5005 35 32.8375V32.8C35 32.137 34.7366 31.5011 34.2678 31.0322C33.7989 30.5634 33.163 30.3 32.5 30.3ZM34.2675 15.92C33.7987 15.4513 33.1629 15.188 32.5 15.188C31.8371 15.188 31.2013 15.4513 30.7325 15.92L15.7325 30.92C15.2771 31.3915 15.0251 32.023 15.0308 32.6785C15.0365 33.334 15.2994 33.961 15.763 34.4245C16.2265 34.8881 16.8535 35.151 17.509 35.1567C18.1645 35.1624 18.796 34.9104 19.2675 34.455L34.2675 19.455C34.7362 18.9862 34.9995 18.3504 34.9995 17.6875C34.9995 17.0246 34.7362 16.3888 34.2675 15.92ZM17.5 15.2625C16.837 15.2625 16.2011 15.5259 15.7322 15.9947C15.2634 16.4636 15 17.0995 15 17.7625V17.8C15 18.463 15.2634 19.0989 15.7322 19.5678C16.2011 20.0366 16.837 20.3 17.5 20.3C18.163 20.3 18.7989 20.0366 19.2678 19.5678C19.7366 19.0989 20 18.463 20 17.8V17.7625C20 17.0995 19.7366 16.4636 19.2678 15.9947C18.7989 15.5259 18.163 15.2625 17.5 15.2625Z" fill="white"/>
      </svg>`,
      title: 'Low Fees'
    },
    {
      icon: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 20V15H45V20H40ZM40 25V20H35V25H40ZM40 15V10H35V15H40ZM35 2.1V5H40C38.425 3.85 36.775 2.875 35 2.1ZM40 5V10H45C43.55 8.125 41.875 6.45 40 5ZM45 10V15H47.9C47.125 13.225 46.15 11.575 45 10ZM50 25C50 23.3 49.825 21.625 49.5 20H45V25H50ZM35 10V5H30V10H35ZM35 35H40V30H35V35ZM40 40H45V35H40V40ZM35 45H40V40H35V45ZM30 49.5C31.75 49.15 33.4 48.6 35 47.9V45H30V49.5ZM40 30H45V25H40V30ZM35 15H30V20H35V15ZM45 35H47.9C48.6 33.4 49.15 31.75 49.5 30H45V35ZM35 25H30V30H35V25ZM25 40V35H30V30H25V25H30V20H25V15H30V10H25V5H30V0.5C28.375 0.175 26.725 0 25 0C11.25 0 0 11.25 0 25C0 38.75 11.25 50 25 50V45H30V40H25ZM30 40H35V35H30V40Z" fill="white"/>
      </svg>`,
      title: 'Transparency'
    },
    {
      icon: `<svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.4854 28.5C20.4854 29.0755 20.2823 29.5664 19.876 29.9727L14.9756 34.873C14.5694 35.2793 14.07 35.4824 13.4776 35.4824C12.8851 35.4824 12.3858 35.2878 11.9795 34.8984C11.5733 34.5091 11.3702 34.0098 11.3702 33.4004C11.3702 32.8079 11.5733 32.3086 11.9795 31.9023L16.8799 27.002C17.2862 26.5957 17.7855 26.3926 18.378 26.3926C18.9704 26.3926 19.4698 26.5957 19.876 27.002C20.2823 27.4082 20.4854 27.9076 20.4854 28.5ZM15.2803 25.8594C15.2803 26.4518 15.0772 26.9512 14.6709 27.3574L11.0401 30.9629C10.6338 31.3691 10.1429 31.5723 9.56742 31.5723C8.97497 31.5723 8.47563 31.3776 8.06938 30.9883C7.66313 30.599 7.46 30.0996 7.46 29.4902C7.46 28.8978 7.66313 28.3984 8.06938 27.9922L11.6748 24.3613C11.861 24.1751 12.0896 24.0312 12.3604 23.9297C12.6312 23.8281 12.9021 23.7689 13.1729 23.752C13.7653 23.752 14.2647 23.9551 14.6709 24.3613C15.0772 24.7676 15.2803 25.2669 15.2803 25.8594ZM24.0401 32.791C24.0401 33.3496 23.8285 33.8405 23.4053 34.2637L18.8858 38.7832C18.4795 39.1895 17.9802 39.3926 17.3877 39.3926C16.7953 39.3926 16.2959 39.1979 15.8897 38.8086C15.4834 38.4193 15.2803 37.9199 15.2803 37.3105C15.2803 36.7181 15.4834 36.2188 15.8897 35.8125L20.4346 31.293C20.8578 30.8698 21.3487 30.6582 21.9073 30.6582C22.4828 30.6582 22.9821 30.8613 23.4053 31.2676C23.8285 31.6738 24.0401 32.1816 24.0401 32.791ZM21.2979 43.3281C20.7054 43.3281 20.2061 43.125 19.7998 42.7188C19.3936 42.3125 19.1905 41.8132 19.1905 41.2207C19.1905 40.6283 19.3936 40.1289 19.7998 39.7227L23.2276 36.3203C23.6508 35.8971 24.1501 35.6855 24.7256 35.6855C25.3181 35.6855 25.8174 35.8971 26.2237 36.3203C26.6299 36.7435 26.833 37.2513 26.833 37.8438C26.833 38.1146 26.7738 38.377 26.6553 38.6309C26.5368 38.8848 26.3845 39.1048 26.1983 39.291L22.7959 42.7188C22.3897 43.125 21.8903 43.3281 21.2979 43.3281ZM45.7491 14.0527C45.7491 15.5423 45.5544 16.8457 45.1651 17.9629C44.7758 19.0801 44.251 20.1211 43.5909 21.0859C42.9307 22.0508 42.169 22.9648 41.3057 23.8281C40.4424 24.6914 39.5284 25.6224 38.5635 26.6211L23.583 11.5645L16.042 19.0547C15.5342 19.5286 14.9418 19.7656 14.2647 19.7656C13.5707 19.7656 12.9867 19.5286 12.5127 19.0547C12.0388 18.5807 11.7933 17.9883 11.7764 17.2773C11.7764 16.5833 12.0218 15.9909 12.5127 15.5L23.3799 4.68359C24.6325 3.44792 26.0544 2.50846 27.6455 1.86523C29.2367 1.22201 30.9125 0.891927 32.6729 0.875C34.4841 0.875 36.1853 1.22201 37.7764 1.91602C39.3676 2.61003 40.7471 3.55794 41.9151 4.75977C43.083 5.96159 44.014 7.35807 44.708 8.94922C45.4021 10.5404 45.7491 12.2415 45.7491 14.0527ZM38.8428 29.3887C38.8428 29.9811 38.6397 30.4805 38.2334 30.8867C37.8272 31.293 37.3278 31.4961 36.7354 31.4961C36.1599 31.4961 35.669 31.293 35.2627 30.8867L27.4678 23.0664C27.3493 22.9479 27.1885 22.8887 26.9854 22.8887C26.7992 22.8887 26.6384 22.9479 26.503 23.0664C26.3676 23.1849 26.2998 23.3457 26.2998 23.5488C26.2998 23.7181 26.3676 23.8704 26.503 24.0059L35.0342 32.5371C35.4574 32.9603 35.669 33.4596 35.669 34.0352C35.669 34.6276 35.4659 35.127 35.0596 35.5332C34.6534 35.9395 34.1455 36.1426 33.5362 36.1426C32.9607 36.1426 32.4698 35.9395 32.0635 35.5332L23.5323 27.002C23.4138 26.8835 23.253 26.8242 23.0498 26.8242C22.8636 26.8242 22.7113 26.8835 22.5928 27.002C22.4743 27.1204 22.4066 27.2812 22.3897 27.4844C22.3897 27.6536 22.4574 27.806 22.5928 27.9414L31.1241 36.4727C31.5303 36.8789 31.7334 37.3783 31.7334 37.9707C31.7334 38.5632 31.5303 39.0625 31.1241 39.4688C30.7178 39.875 30.2185 40.0781 29.626 40.0781C29.1859 40.0781 28.8304 39.985 28.5596 39.7988C28.2888 39.6126 28.0095 39.3587 27.7217 39.0371C27.891 38.6816 27.9756 38.2669 27.9756 37.793C27.9756 37.3359 27.891 36.9128 27.7217 36.5234C27.5525 36.1341 27.3155 35.7871 27.0108 35.4824C26.7061 35.1777 26.3506 34.9492 25.9444 34.7969C25.5381 34.6445 25.1065 34.5599 24.6495 34.543C24.988 34.0182 25.1573 33.4342 25.1573 32.791C25.1573 32.334 25.0726 31.9108 24.9034 31.5215C24.7341 31.1322 24.5056 30.7852 24.2178 30.4805C23.9301 30.1758 23.583 29.9388 23.1768 29.7695C22.7705 29.6003 22.3558 29.5156 21.9327 29.5156H21.7041C21.6364 29.5156 21.5518 29.5326 21.4502 29.5664C21.501 29.3802 21.5433 29.2025 21.5772 29.0332C21.611 28.8639 21.628 28.6777 21.628 28.4746C21.628 28.0345 21.5433 27.6198 21.3741 27.2305C21.2048 26.8411 20.9763 26.4941 20.6885 26.1895C20.4008 25.8848 20.0538 25.6478 19.6475 25.4785C19.2413 25.3092 18.8181 25.2246 18.378 25.2246C18.0225 25.2246 17.684 25.2839 17.3623 25.4023C17.0407 25.5208 16.7276 25.6816 16.4229 25.8848C16.4229 25.4277 16.3383 25.0046 16.169 24.6152C15.9997 24.2259 15.7712 23.8789 15.4834 23.5742C15.1957 23.2695 14.8571 23.0326 14.4678 22.8633C14.0785 22.694 13.6469 22.6094 13.1729 22.6094C12.7497 22.6094 12.335 22.6855 11.9288 22.8379C11.5225 22.9902 11.167 23.2272 10.8623 23.5488L7.63774 26.7988C6.62211 25.7663 5.66573 24.8099 4.76859 23.9297C3.87146 23.0495 3.09281 22.1185 2.43266 21.1367C1.7725 20.1549 1.2393 19.0885 0.833047 17.9375C0.426797 16.7865 0.232135 15.4323 0.249063 13.875C0.249063 12.0807 0.596068 10.3965 1.29008 8.82227C1.98409 7.24805 2.93201 5.87695 4.13383 4.70898C5.33565 3.54102 6.73214 2.61003 8.32328 1.91602C9.91443 1.22201 11.5987 0.875 13.376 0.875C15.0179 0.875 16.5922 1.16276 18.0987 1.73828C19.6052 2.3138 20.9678 3.16016 22.1866 4.27734L11.7002 14.6875C11.3617 15.026 11.0993 15.4154 10.9131 15.8555C10.7269 16.2956 10.6254 16.7695 10.6084 17.2773C10.6084 17.7852 10.7015 18.2591 10.8877 18.6992C11.0739 19.1393 11.3363 19.5202 11.6748 19.8418C12.0134 20.1634 12.4027 20.4258 12.8428 20.6289C13.2829 20.832 13.7569 20.9336 14.2647 20.9336C14.7556 20.9336 15.2211 20.8405 15.6612 20.6543C16.1013 20.4681 16.4991 20.2057 16.8545 19.8672L23.583 13.1641L38.2334 27.8906C38.6397 28.2969 38.8428 28.7962 38.8428 29.3887ZM24.0401 43.0742L26.8584 40.2559C26.9939 40.5605 27.0616 40.8652 27.0616 41.1699C27.0616 41.7624 26.8584 42.2617 26.4522 42.668C26.0459 43.0742 25.5466 43.2773 24.9541 43.2773C24.6495 43.2773 24.3448 43.2096 24.0401 43.0742Z" fill="white"/>
      </svg>`,
      title: 'Profit Sharing'
    },
    {
      icon: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 43.875C16.1984 43.875 10.6344 41.5703 6.53204 37.468C2.42968 33.3656 0.125 27.8016 0.125 22C0.125 16.1984 2.42968 10.6344 6.53204 6.53204C10.6344 2.42968 16.1984 0.125 22 0.125C27.8016 0.125 33.3656 2.42968 37.468 6.53204C41.5703 10.6344 43.875 16.1984 43.875 22C43.875 27.8016 41.5703 33.3656 37.468 37.468C33.3656 41.5703 27.8016 43.875 22 43.875ZM9.6275 34.3725C6.43973 31.072 4.67583 26.6514 4.7157 22.063C4.75558 17.4745 6.59603 13.0853 9.84067 9.84067C13.0853 6.59603 17.4745 4.75558 22.063 4.7157C26.6514 4.67583 31.072 6.43973 34.3725 9.6275C34.39 9.68437 9.67562 34.4513 9.6275 34.3725Z" fill="white"/>
      </svg>`,
      title: 'Token Burn'
    },
  ]
  return (
    <div className='why'>
      <Container>
        <Col className="w-full why-wrap xl:pt-[60px] xl:px-[150px] relative z-[1] rounded-[20px]">
          <div className="shape absolute top-0 left-1/2 -translate-x-1/2">
            <img src={shape} alt="" />
          </div>
          <CommonTitle className='mb-6 md:mb-8 lg:mb-10 text-center' title={'Why us'} />
          <div className="flex items-center flex-wrap justify-between gap-6 md:gap-8">
            {why.map((item, index) => (
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: .5, delay: `0.${index + 1}` } }}
                viewport={{ once: true, amount: 0.8 }} Í
                className='why-card' key={index}>
                <div className="why-icon relative z-[1] overflow-hidden rounded-full mx-auto flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-[120px] lg:h-[120px]" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                <h4 className='font-medium text-xl md:text-2xl !leading-[145%]'>{item.title}</h4>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
            viewport={{ once: true, amount: 0.8 }}
            className="mx-auto w-full md:w-10/12 lg:w-7/12 relative top-6 md:top-8 lg:top-11 mt-2 text-center">
            <p className='font-regular text-white text-xl md:text-2xl !leading-[145%] mb-4 md:mb-6'>Subscribe for offers and rewards</p>
            <div className="why-form rounded-full overflow-hidden relative z-10">
              <input type="text" className='text-lg leading-[145%] py-5 px-6 md:py-7 md:px-8 lg:py-[30px] lg:px-10 border-0 bg-[#060706] text-white text-opacity-60 w-full rounded-full outline-none shadow-none' placeholder='Email Address' />
              <Button color="primary" className="h-[calc(100%-14px)] absolute top-1/2 right-2 -translate-y-1/2 text-white rounded-full text-lg inline-block sm:px-4 sm:py-3 md:px-6 md:py-3 lg:px-10 lg:py-[16px]" type="submit">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </Col>
      </Container>
    </div>
  )
}
