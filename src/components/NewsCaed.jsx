import newscard1 from "../assets/img/newscard.png";
import newscardi from "../assets/img/newscardi.svg";
export default function NewsCaed({item}) {
  return (
    <div className="cards bg-[#080B13] p-1 md:py-[22px]  2xl:p-8  rounded-[7px] xl:rounded-[10px]">
    <img src={item.img} alt="" className="mb-4 w-full  rounded-[10px] " />
    <p className="flex title items-center text-[#6B7280] text-[12px] 2xl:text-base leading-[26px]">
      <svg
        className="mr-1"
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8718 22.3076C16.8761 22.3076 21.7436 17.4401 21.7436 11.4358C21.7436 5.43149 16.8761 0.564026 10.8718 0.564026C4.86747 0.564026 0 5.43149 0 11.4358C0 17.4401 4.86747 22.3076 10.8718 22.3076Z"
          fill="#F7931A"
        />
        <path
          d="M15.756 10.0905C15.9694 8.66627 14.8843 7.90049 13.4016 7.38952L13.8827 5.45977L12.7085 5.16759L12.2397 7.04638C11.9312 6.96891 11.6146 6.89689 11.2986 6.82486L11.7709 4.93385L10.5967 4.64099L10.1156 6.57006C9.86013 6.51162 9.60872 6.45454 9.36547 6.39339L9.36683 6.38727L7.74693 5.98298L7.43436 7.23731C7.43436 7.23731 8.30615 7.43708 8.2878 7.44931C8.76344 7.56822 8.84906 7.88282 8.83479 8.13288L8.28712 10.331C8.31974 10.3392 8.36186 10.3514 8.40943 10.3697L8.28508 10.3392L7.51726 13.4186C7.45883 13.5627 7.31138 13.7794 6.97843 13.6972C6.99066 13.7142 6.12499 13.4845 6.12499 13.4845L5.54199 14.8285L7.07084 15.2097C7.35486 15.2811 7.63345 15.3558 7.90729 15.4258L7.42145 17.3773L8.59493 17.6695L9.07601 15.7397C9.39672 15.826 9.70793 15.9062 10.0123 15.9823L9.53262 17.9039L10.7068 18.1961L11.1926 16.2487C13.1957 16.6278 14.7015 16.4749 15.3354 14.6634C15.8464 13.2052 15.3103 12.3634 14.2564 11.815C15.0242 11.6384 15.6018 11.1335 15.756 10.0905ZM13.0721 13.8535C12.7099 15.3123 10.2536 14.5235 9.4572 14.3257L10.1027 11.7403C10.8991 11.9394 13.4519 12.3328 13.0721 13.8535ZM13.4356 10.0694C13.1047 11.3965 11.0608 10.7217 10.3983 10.5566L10.9826 8.21238C11.6451 8.37749 13.7808 8.6853 13.4356 10.0694Z"
          fill="white"
        />
      </svg> {item.title}
    </p>
    <p className="text-sm md:text-base text-[#6B7280] leading-[26px]">
     {item.des}
      
     {
      item.des.length>195 &&<a href="#" className="text-[#EDEDED] !underline text-sm md:text-base  leading-[26px] ml-1">
      Read all
    </a>
     }
     
    </p>
    <div className="mt-4 flex items-center bg-[#121722] py-[10px] rounded-[10px]  ">
      <img
        src={item.icon}
        alt=""
        className="h-7 w-7 mr-[10px] ml-[10px]"
      />
      <p className="text-base text-[#EDEDED] mr-4">{item.iconname}</p>
      <p className="flex  items-center text-[10px] md:text-sm text-[#6B7280] leading-[14px]">
        <svg
        className="mr-1"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.18213 8.43592L7.81969 10.0803L11.1016 6.79156"
            stroke="url(#paint0_linear_137_916)"
            strokeWidth="1.35897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.79221 1.94685C8.26106 1.54595 9.02888 1.54595 9.50452 1.94685L10.5781 2.87095C10.782 3.04762 11.1625 3.19031 11.4343 3.19031H12.5894C13.3096 3.19031 13.9008 3.78147 13.9008 4.50172V5.65685C13.9008 5.92185 14.0435 6.30916 14.2202 6.51301L15.1443 7.5866C15.5452 8.05544 15.5452 8.82326 15.1443 9.2989L14.2202 10.3725C14.0435 10.5763 13.9008 10.9569 13.9008 11.2286V12.3838C13.9008 13.104 13.3096 13.6952 12.5894 13.6952H11.4343C11.1693 13.6952 10.782 13.8379 10.5781 14.0145L9.50452 14.9386C9.03567 15.3395 8.26785 15.3395 7.79221 14.9386L6.71862 14.0145C6.51478 13.8379 6.13426 13.6952 5.86247 13.6952H4.68696C3.9667 13.6952 3.37555 13.104 3.37555 12.3838V11.2219C3.37555 10.9569 3.23285 10.5763 3.06298 10.3725L2.14567 9.29211C1.75157 8.82326 1.75157 8.06224 2.14567 7.59339L3.06298 6.51301C3.23285 6.30916 3.37555 5.92865 3.37555 5.66365V4.49493C3.37555 3.77467 3.9667 3.18352 4.68696 3.18352H5.86247C6.12747 3.18352 6.51478 3.04083 6.71862 2.86416L7.79221 1.94685Z"
            stroke="url(#paint1_linear_137_916)"
            strokeWidth="1.35897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_137_916"
              x1="13.2904"
              y1="10.4523"
              x2="7.27329"
              y2="6.80695"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00FFFF" />
              <stop offset="1" stopColor="#0152FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_137_916"
              x1="21.4937"
              y1="16.777"
              x2="1.96627"
              y2="8.8674"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00FFFF" />
              <stop offset="1" stopColor="#0152FF" />
            </linearGradient>
          </defs>
        </svg>
        {item.social}
      </p>
    </div>
  </div>
  )
}
