import { Container, Col } from './CAllComponent'
import CommonTitle from './CommonTitle'

export default function Features() {
  const features = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.02775 1.18414C6.0746 1.18417 6.12209 1.1842 6.17026 1.1842C6.77432 1.1842 7.26401 1.67389 7.26401 2.27795C7.26401 2.88201 6.77432 3.3717 6.17026 3.3717C5.1957 3.3717 4.92299 3.3811 4.72623 3.43382C4.09715 3.60237 3.60579 4.09374 3.43724 4.72281C3.38452 4.91957 3.37512 5.19228 3.37512 6.16684C3.37512 6.7709 2.88543 7.26059 2.28137 7.26059C1.67731 7.26059 1.18762 6.7709 1.18762 6.16684C1.18762 6.11867 1.18759 6.07118 1.18756 6.02434C1.18705 5.26045 1.18666 4.67021 1.32427 4.15665C1.6951 2.77268 2.7761 1.69169 4.16007 1.32085C4.67363 1.18325 5.26386 1.18363 6.02775 1.18414ZM19.281 3.43382C19.0842 3.3811 18.8115 3.3717 17.8369 3.3717C17.2329 3.3717 16.7432 2.88201 16.7432 2.27795C16.7432 1.67389 17.2329 1.1842 17.8369 1.1842C17.8851 1.1842 17.9326 1.18417 17.9794 1.18414C18.7433 1.18363 19.3335 1.18325 19.8471 1.32085C21.231 1.69169 22.3121 2.77268 22.6829 4.15665C22.8205 4.67021 22.8201 5.26044 22.8196 6.02433C22.8196 6.07117 22.8195 6.11867 22.8195 6.16684C22.8195 6.7709 22.3299 7.26059 21.7258 7.26059C21.1217 7.26059 20.632 6.7709 20.632 6.16684C20.632 5.19228 20.6227 4.91957 20.57 4.72281C20.4014 4.09374 19.91 3.60237 19.281 3.43382ZM8.96537 2.27795C8.96537 1.67389 9.45508 1.1842 10.0591 1.1842H13.9481C14.5521 1.1842 15.0418 1.67389 15.0418 2.27795C15.0418 2.88201 14.5521 3.3717 13.9481 3.3717H10.0591C9.45508 3.3717 8.96537 2.88201 8.96537 2.27795ZM2.28137 8.96195C2.88543 8.96195 3.37512 9.45166 3.37512 10.0557V11.3446L3.37734 11.3436C3.86919 11.0929 4.38931 10.9951 4.94331 10.9498C5.47448 10.9064 6.12468 10.9064 6.90366 10.9064H7.3813C8.1603 10.9064 8.81049 10.9064 9.34162 10.9498C9.89564 10.9951 10.4158 11.0929 10.9077 11.3436C11.6622 11.728 12.2757 12.3416 12.6602 13.0962C12.9108 13.588 13.0087 14.1081 13.054 14.6621C13.0973 15.1933 13.0973 15.8435 13.0973 16.6224V17.1001C13.0973 17.8791 13.0973 18.5293 13.054 19.0605C13.0087 19.6144 12.9108 20.1346 12.6602 20.6264L12.6591 20.6286H13.9481C14.5521 20.6286 15.0418 21.1183 15.0418 21.7224C15.0418 22.3265 14.5521 22.8161 13.9481 22.8161H7.4568C7.43178 22.8161 7.40663 22.8161 7.38134 22.8161H6.90362C6.12466 22.8162 5.47448 22.8162 4.94331 22.7728C4.38931 22.7275 3.86919 22.6297 3.37734 22.3791C2.62274 21.9946 2.00922 21.381 1.62473 20.6264C1.37413 20.1346 1.27626 19.6144 1.23099 19.0605C1.18759 18.5293 1.1876 17.8791 1.18762 17.1001V16.6224C1.18762 16.5934 1.18762 16.5645 1.18762 16.5359V10.0557C1.18762 9.45166 1.67731 8.96195 2.28137 8.96195ZM6.94804 20.6286H7.33692C8.17174 20.6286 8.73204 20.6278 9.16348 20.5925C9.58224 20.5583 9.78247 20.4972 9.91453 20.43C10.2575 20.2552 10.5364 19.9763 10.7111 19.6333C10.7784 19.5013 10.8395 19.301 10.8737 18.8823C10.909 18.4508 10.9098 17.8905 10.9098 17.0557V16.6668C10.9098 15.832 10.909 15.2717 10.8737 14.8403C10.8395 14.4215 10.7784 14.2213 10.7111 14.0892C10.5364 13.7462 10.2575 13.4674 9.91453 13.2926C9.78247 13.2253 9.58224 13.1642 9.16348 13.13C8.73204 13.0948 8.17174 13.0939 7.33692 13.0939H6.94804C6.11324 13.0939 5.55293 13.0948 5.12144 13.13C4.70272 13.1642 4.50252 13.2253 4.37045 13.2926C4.02745 13.4674 3.74858 13.7462 3.57381 14.0892C3.50651 14.2213 3.44543 14.4215 3.41123 14.8403C3.37597 15.2717 3.37512 15.832 3.37512 16.6668V17.0557C3.37512 17.8905 3.37597 18.4508 3.41123 18.8823C3.44543 19.301 3.50651 19.5013 3.5738 19.6333C3.74858 19.9763 4.02745 20.2552 4.37045 20.43C4.50252 20.4972 4.70272 20.5583 5.12144 20.5925C5.55293 20.6278 6.11324 20.6286 6.94804 20.6286ZM21.7258 8.96195C22.3299 8.96195 22.8195 9.45166 22.8195 10.0557V13.9446C22.8195 14.5487 22.3299 15.0384 21.7258 15.0384C21.1217 15.0384 20.632 14.5487 20.632 13.9446V10.0557C20.632 9.45166 21.1217 8.96195 21.7258 8.96195ZM21.7258 16.7398C22.3299 16.7398 22.8195 17.2295 22.8195 17.8335C22.8195 17.8817 22.8196 17.9292 22.8196 17.976C22.8201 18.7399 22.8205 19.3301 22.6829 19.8437C22.3121 21.2276 21.231 22.3087 19.8471 22.6795C19.3335 22.8171 18.7433 22.8167 17.9794 22.8162C17.9326 22.8162 17.8851 22.8161 17.8369 22.8161C17.2329 22.8161 16.7432 22.3265 16.7432 21.7224C16.7432 21.1183 17.2329 20.6286 17.8369 20.6286C18.8115 20.6286 19.0842 20.6193 19.281 20.5666C19.91 20.398 20.4014 19.9066 20.57 19.2775C20.6227 19.0808 20.632 18.808 20.632 17.8335C20.632 17.2295 21.1217 16.7398 21.7258 16.7398Z" fill="url(#paint0_linear_0_339)"/>
      <defs>
      <linearGradient id="paint0_linear_0_339" x1="32.4445" y1="25.2634" x2="1.37126" y2="12.6787" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      </defs>
      </svg>`,
      title: 'Defi Platform',
      des: `Our decentralized exchange (DEX) enables users to trade cryptocurrencies directly without intermediaries, ensuring secure and transparent transactions on a blockchain.`
    },
    {
      icon: `<svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_0_349)">
      <g clip-path="url(#clip1_0_349)">
      <mask id="mask0_0_349" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="22">
      <path d="M25.3065 0.674561H0.707031V21.5762H25.3065V0.674561Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_0_349)">
      <path d="M11.2046 3.56455C12.5714 3.23984 14.0007 3.29267 15.3399 3.71741C16.6789 4.14214 17.8774 4.92281 18.8072 5.97595C19.0424 6.24177 19.3737 6.40323 19.728 6.42481C20.0823 6.4464 20.4307 6.32635 20.6965 6.09106C20.9623 5.85578 21.1238 5.52454 21.1454 5.1702C21.167 4.81587 21.0469 4.46748 20.8117 4.20167C19.5614 2.78513 17.9499 1.73492 16.1491 1.16326C14.3484 0.591616 12.4261 0.520018 10.5878 0.956123C8.72226 1.42452 7.0122 2.37407 5.62835 3.70999C4.24451 5.04592 3.23532 6.72148 2.70151 8.56937C2.68388 8.63056 2.64492 8.6834 2.5917 8.71842C2.53847 8.75335 2.47449 8.76813 2.41133 8.76002L1.30521 8.62076C1.20712 8.60816 1.10747 8.62349 1.01768 8.66493C0.927903 8.70645 0.851643 8.77239 0.797663 8.85527C0.742239 8.93798 0.710974 9.03451 0.70738 9.13402C0.703786 9.23352 0.728006 9.33206 0.777319 9.41855L3.42857 14.0679C3.46991 14.1401 3.52754 14.2017 3.59687 14.2478C3.66621 14.2939 3.74534 14.3232 3.82798 14.3334C3.85008 14.335 3.87227 14.335 3.89436 14.3334C3.96608 14.3334 4.03705 14.319 4.10308 14.291C4.16912 14.2631 4.22886 14.2221 4.27877 14.1707L8.00188 10.3233C8.07118 10.2517 8.11909 10.162 8.14021 10.0646C8.16134 9.96722 8.15484 9.86579 8.12145 9.77183C8.08806 9.67795 8.02911 9.59515 7.95122 9.53291C7.87335 9.47067 7.77964 9.43148 7.68065 9.41959L5.66972 9.1712C5.63026 9.16558 5.59253 9.15128 5.55929 9.12928C5.52606 9.10727 5.49817 9.07812 5.47765 9.04391C5.45713 9.00978 5.44449 8.97147 5.44067 8.93172C5.43685 8.89205 5.44194 8.85205 5.45556 8.81463C5.90726 7.53367 6.66842 6.38417 7.67138 5.46826C8.67431 4.55236 9.88802 3.89842 11.2046 3.56455Z" fill="url(#paint0_linear_0_349)"/>
      <path d="M25.2145 13.3771C25.2692 13.294 25.2998 13.1973 25.3026 13.0978C25.3054 12.9983 25.2805 12.9 25.2305 12.8139L22.5536 8.17843C22.5117 8.10649 22.4535 8.04531 22.3838 7.99977C22.3141 7.95423 22.2348 7.92557 22.1521 7.91608C22.0694 7.90523 21.9854 7.91424 21.907 7.94237C21.8287 7.97049 21.7581 8.01691 21.7012 8.07778L18.0006 11.9476C17.9319 12.0193 17.8845 12.1088 17.8638 12.2059C17.843 12.3029 17.8497 12.404 17.883 12.4975C17.9163 12.591 17.975 12.6735 18.0525 12.7356C18.13 12.7977 18.2233 12.837 18.3218 12.8492L20.3006 13.0858C20.3406 13.0905 20.3791 13.1043 20.413 13.126C20.4469 13.1476 20.4755 13.1768 20.4966 13.2111C20.5176 13.2454 20.5307 13.284 20.535 13.324C20.5392 13.364 20.5346 13.4045 20.5212 13.4424C20.0701 14.7233 19.3091 15.8727 18.306 16.7882C17.3029 17.7036 16.0889 18.3567 14.7722 18.6893C13.4053 19.0133 11.976 18.9601 10.637 18.5352C9.29802 18.1103 8.09957 17.3297 7.16964 16.2768C7.05456 16.1405 6.91341 16.0286 6.75448 15.9477C6.59555 15.8667 6.42205 15.8184 6.24416 15.8054C6.06629 15.7925 5.88761 15.8152 5.71864 15.8723C5.54967 15.9294 5.39382 16.0197 5.26023 16.1378C5.12665 16.2561 5.01803 16.3997 4.94076 16.5604C4.86348 16.7212 4.81911 16.8958 4.81025 17.0739C4.80139 17.252 4.82822 17.4302 4.88916 17.5978C4.95011 17.7654 5.04394 17.9191 5.16514 18.05C6.41574 19.4662 8.02758 20.5161 9.82846 21.0876C11.6294 21.659 13.5516 21.7305 15.3901 21.2945C17.2581 20.8266 18.9702 19.876 20.3552 18.5379C21.74 17.1998 22.7488 15.5212 23.2806 13.6704C23.2984 13.6095 23.3372 13.5568 23.3901 13.5217C23.443 13.4867 23.5067 13.4714 23.5697 13.4788L24.7027 13.6148C24.724 13.6163 24.7455 13.6163 24.7669 13.6148C24.8553 13.6152 24.9425 13.5937 25.0206 13.5522C25.0987 13.5108 25.1653 13.4506 25.2145 13.3771Z" fill="url(#paint1_linear_0_349)"/>
      </g>
      </g>
      </g>
      <defs>
      <linearGradient id="paint0_linear_0_349" x1="30.2426" y1="15.8799" x2="5.24563" y2="0.73063" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_0_349" x1="34.4213" y1="23.1218" x2="9.38985" y2="7.91698" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      <clipPath id="clip0_0_349">
      <rect width="25.525" height="21.6833" fill="white" transform="translate(0.234375 0.150146)"/>
      </clipPath>
      <clipPath id="clip1_0_349">
      <rect width="25.6988" height="21.6833" fill="white" transform="translate(0.15625 0.150146)"/>
      </clipPath>
      </defs>
      </svg>`,
      title: 'Crypto Debit Card',
      des: `Our crypto debit card allows users to spend their cryptocurrencies seamlessly at any merchant that accepts traditional debit cards, providing Instant Conversion & Easy Access`
    },
    {
      icon: `<svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_0_365)">
      <g clip-path="url(#clip1_0_365)">
      <path d="M25.0784 3.797C31.8731 3.797 31.8731 14.4638 25.0784 14.4638C18.285 14.4638 15.5677 3.797 8.09287 3.797C1.97946 3.797 1.97946 14.4638 8.09287 14.4638C15.5677 14.4638 18.285 3.797 25.0797 3.797H25.0784Z" stroke="url(#paint0_linear_0_365)" stroke-width="2.35294" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </g>
      <defs>
      <linearGradient id="paint0_linear_0_365" x1="42.0392" y1="15.6704" x2="20.0221" y2="-6.6218" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      <clipPath id="clip0_0_365">
      <rect width="31.4583" height="16.6667" fill="white" transform="translate(0.277344 0.666504)"/>
      </clipPath>
      <clipPath id="clip1_0_365">
      <rect width="29.8039" height="13.3333" fill="white" transform="translate(1.9375 2.33313)"/>
      </clipPath>
      </defs>
      </svg>`,
      title: 'Staking',
      des: `Our staking offer lets users earn competitive rewards by locking up their cryptocurrencies, providing a secure and profitable way to grow their digital assets.`
    },
    {
      icon: `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_0_377)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.44887 0.707715C6.45798 0.707785 6.46608 0.707847 6.47308 0.707847H8.81016C8.82401 0.70752 8.83791 0.70752 8.85184 0.707847H12.4032C12.4171 0.70752 12.431 0.70752 12.4449 0.707847H14.782C14.789 0.707847 14.7971 0.707785 14.8062 0.707715C14.8947 0.707024 15.0779 0.705606 15.2582 0.754126C15.4106 0.795133 15.5546 0.862585 15.6836 0.953423C15.8363 1.0609 15.9525 1.20258 16.0087 1.27108C16.0144 1.27813 16.0196 1.28439 16.024 1.28977L19.9277 5.97577C19.9855 6.04504 20.0564 6.1301 20.1139 6.21073C20.182 6.30603 20.2683 6.44445 20.3206 6.62756C20.3894 6.86923 20.3894 7.12536 20.3206 7.36702C20.2683 7.55013 20.182 7.68856 20.1139 7.78385C20.0564 7.86448 19.9855 7.94953 19.9277 8.0188L11.8544 17.71C11.7732 17.8075 11.6795 17.9201 11.5897 18.0106C11.4884 18.1126 11.3261 18.257 11.0901 18.3432C10.7913 18.4525 10.4637 18.4525 10.165 18.3432C9.92892 18.257 9.76663 18.1126 9.66537 18.0106C9.57554 17.9201 9.48182 17.8075 9.40067 17.71L1.33884 8.03262C1.33506 8.02811 1.3312 8.0235 1.3273 8.0188C1.26954 7.94953 1.19863 7.86448 1.1411 7.78385C1.0731 7.68855 0.986717 7.55013 0.934503 7.36702C0.865582 7.12536 0.865582 6.86923 0.934503 6.62756C0.986717 6.44445 1.0731 6.30603 1.1411 6.21073C1.19864 6.1301 1.26955 6.04504 1.3273 5.97577C1.33121 5.97108 1.33506 5.96646 1.33884 5.96192L5.23105 1.28977C5.23553 1.28439 5.24067 1.27813 5.24644 1.27108C5.30262 1.20258 5.41881 1.06089 5.57147 0.953423C5.7005 0.862585 5.84448 0.795133 5.99684 0.754126C6.17711 0.705606 6.3603 0.707024 6.44887 0.707715ZM11.7765 2.50483H9.47854L8.28091 6.0988H12.9741L11.7765 2.50483ZM14.8677 6.0988L13.6701 2.50483H14.6978L17.6918 6.0988H14.8677ZM12.957 7.89575L10.6275 14.595L8.29813 7.89575H12.957ZM6.38734 6.0988L7.58494 2.50483H6.55722L3.56321 6.0988H6.38734ZM3.56321 7.89575H6.39616L8.42573 13.7327L3.56321 7.89575ZM12.8293 13.7327L14.8589 7.89575H17.6918L12.8293 13.7327ZM6.6763 2.36309C6.67641 2.36299 6.67642 2.36298 6.6763 2.36309V2.36309ZM6.37215 2.50561C6.37199 2.50561 6.372 2.50561 6.37215 2.50561V2.50561ZM14.883 2.50561C14.883 2.50561 14.883 2.50561 14.883 2.50561V2.50561ZM14.5787 2.36311C14.5787 2.363 14.5787 2.363 14.5787 2.36311V2.36311Z" fill="url(#paint0_linear_0_377)"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_0_377" x1="29.0437" y1="20.4295" x2="1.85299" y2="8.31596" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      <clipPath id="clip0_0_377">
      <rect width="21.2612" height="19.134" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `,
      title: 'One Click Investment ',
      des: `We streamlined our User Interface to allow token purchases with just one click`
    },
    {
      icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.07031 6.21415C2.07031 4.6554 2.87817 3.02415 4.14174 2.07129C4.14174 2.94647 4.85638 4.14272 6.21317 4.14272C7.03724 4.14272 7.82755 4.47008 8.41025 5.05278C8.99295 5.63548 9.32031 6.4258 9.32031 7.24986C9.32031 7.64965 9.23849 8.02872 9.10074 8.37982C9.86899 8.98954 10.6255 9.61384 11.37 10.2524L9.21571 12.4067C8.5774 11.662 7.9531 10.9055 7.34313 10.1374C6.9836 10.2809 6.60027 10.3554 6.21317 10.357C3.92424 10.357 2.07031 8.50307 2.07031 6.21415ZM14.6563 13.3067L16.0452 11.9178C16.6884 12.2489 17.4005 12.4239 18.1239 12.4284C19.36 12.4284 20.5455 11.9374 21.4195 11.0633C22.2936 10.1893 22.7846 9.00382 22.7846 7.76772C22.7846 7.01682 22.5899 6.31668 22.274 5.68904L18.6417 9.32129L16.5703 7.24986L20.2026 3.61761C19.5594 3.28649 18.8473 3.11157 18.1239 3.107C16.8878 3.107 15.7023 3.59804 14.8283 4.47209C13.9542 5.34615 13.4632 6.53162 13.4632 7.76772C13.4632 8.51861 13.6579 9.21875 13.9738 9.8464L3.10603 20.7141L5.17746 22.7856L12.27 15.693C14.2207 17.6944 16.2877 19.5789 18.4605 21.3366L19.9364 22.5266L21.49 20.9731L20.2999 19.4972C18.5422 17.3244 16.6577 15.2574 14.6563 13.3067Z" fill="url(#paint0_linear_0_387)"/>
      <defs>
      <linearGradient id="paint0_linear_0_387" x1="32.001" y1="25.1289" x2="2.24627" y2="13.0781" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      </defs>
      </svg>
      `,
      title: 'Built on base',
      des: `We built on base chain for its lower transaction fees, faster processing times, and enhanced scalability.`
    },
    {
      icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.10547 13.5935C3.10547 12.9504 3.62747 12.4284 4.27065 12.4284H6.601C7.24418 12.4284 7.76618 12.9504 7.76618 13.5935V20.5846C7.76618 21.2278 7.24418 21.7498 6.601 21.7498H4.27065C3.96162 21.7498 3.66526 21.627 3.44674 21.4085C3.22823 21.19 3.10547 20.8936 3.10547 20.5846V13.5935ZM10.0965 8.93283C10.0965 8.28965 10.6185 7.76765 11.2617 7.76765H13.5921C14.2353 7.76765 14.7573 8.28965 14.7573 8.93283V20.5846C14.7573 21.2278 14.2353 21.7498 13.5921 21.7498H11.2617C10.9527 21.7498 10.6563 21.627 10.4378 21.4085C10.2193 21.19 10.0965 20.8936 10.0965 20.5846V8.93283ZM17.0876 4.27211C17.0876 3.62893 17.6096 3.10693 18.2528 3.10693H20.5831C21.2263 3.10693 21.7483 3.62893 21.7483 4.27211V20.5846C21.7483 21.2278 21.2263 21.7498 20.5831 21.7498H18.2528C17.9438 21.7498 17.6474 21.627 17.4289 21.4085C17.2104 21.19 17.0876 20.8936 17.0876 20.5846V4.27211Z" stroke="url(#paint0_linear_0_396)" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <linearGradient id="paint0_linear_0_396" x1="30.0431" y1="23.8587" x2="3.26383" y2="13.0131" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFFF"/>
      <stop offset="1" stop-color="#0152FF"/>
      </linearGradient>
      </defs>
      </svg>
      `,
      title: 'Token Burn',
      des: `From the profit the TANT Ecosystem generates we will buy back TANT and burn it to decrease supply and stay deflationary.`
    },
  ]
  return (
    <div className="feature py-10 md:py-16 lg:py-20 xl:py-28">
      <Container rowClass='common-row'>
        <Col className="w-full text-center">
          <CommonTitle title="What is TANT Finance" subTitle="Features" des="Whether you're a small business or an individual, Instant Settlements" />
        </Col>
        {features.map((item, index) => (
          <Col className="w-full md:w-1/2 lg:w-4/12 flex" key={index}>
            <div className="feature-item relative z-[1] overflow-hidden w-full flex">
              <div className="p-5 md:p-6 lg:p-8 bg-[#0C0C0D] rounded-[20px] w-full">
                <div className="icon mb-4 md:mb-5 w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-full p-1 relative z-[1] overflow-hidden">
                  <div className='flex items-center justify-center bg-[#0D0D0D] w-full h-full rounded-full' dangerouslySetInnerHTML={{__html:item.icon}}></div>
                </div>
                <h4 className='font-semibold text-white leading-[145%] mb-2 text-xl lg:text-2xl'>{item.title}</h4>
                <p className='text-base'>{item.des}</p>
              </div>
            </div>
          </Col>
        ))}
      </Container>
    </div>
  )
}
