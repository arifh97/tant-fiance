import dcicon from "../assets/img/dashboard-card-icon.png";
import CandlestickChart from "../components/CandlestickChart";
import minicardicon from "../assets/img/mincardicon.svg";
import minicardicon2 from "../assets/img/minicardicon2.svg";
import website from "../assets/img/webside.svg";
import document from "../assets/img/document.svg";
import github from "../assets/img/github.svg";
import dicon1 from "../assets/img/dicon1.svg";
import dicon2 from "../assets/img/dicon2.svg";
import dicon3 from "../assets/img/dicon3.svg";
import dicon4 from "../assets/img/dicon4.svg";
import dicon5 from "../assets/img/dicon5.svg";
import Dashboardtable from "./Dashboardtable";
import coming_soon from '../assets/img/coming-soon.png'

export default function Dashboard() {
  const tabledata = [
    {
      Exchange: "Coinbase",
      icon: `${dicon1}`,
      Pair: `TANT/USDT`,
      Price: "$2.0751",
      Depth: "$554.079",
      Depth2: "$729.558",
      Volume: "$13,984.992",
      Volume2: "30.92%",
      Confidence: "High",
      Updated: "Recently",
    },
    {
      Exchange: "Coinbase",
      icon: `${dicon2}`,
      Pair: `TANT/USDT`,
      Price: "$2.0751",
      Depth: "$554.079",
      Depth2: "$729.558",
      Volume: "$13,984.992",
      Volume2: "30.92%",
      Confidence: "High",
      Updated: "Recently",
    },
    {
      Exchange: "Coinbase",
      icon: `${dicon3}`,
      Pair: `TANT/USDT`,
      Price: "$2.0751",
      Depth: "$554.079",
      Depth2: "$729.558",
      Volume: "$13,984.992",
      Volume2: "30.92%",
      Confidence: "High",
      Updated: "Recently",
    },
    {
      Exchange: "Coinbase",
      icon: `${dicon4}`,
      Pair: `TANT/USDT`,
      Price: "$2.0751",
      Depth: "$554.079",
      Depth2: "$729.558",
      Volume: "$13,984.992",
      Volume2: "30.92%",
      Confidence: "High",
      Updated: "Recently",
    },
    {
      Exchange: "Coinbase",
      icon: `${dicon5}`,
      Pair: `TANT/USDT`,
      Price: "$2.0751",
      Depth: "$554.079",
      Depth2: "$729.558",
      Volume: "$13,984.992",
      Volume2: "30.92%",
      Confidence: "High",
      Updated: "Recently",
    },
  ];
  const chartFilter = ['1D', '7D', '1M', '1Y', 'All']
  return (
    <div className="flex flex-col-reverse lg:flex-row dashboard-main-wrap">
      <div className="dashboard-main-left w-full bg-gray-200 ">
        <div className="card hidden lg:block p-6 bg-[#080B13] mb-3 md:mb-5">
          <div className="flex items-center mb-2 md:mb-[10px]">
            <img src={dcicon} alt="" className="h-5 w-5" />
            <h5 className="ml-2 text-sm md:text-base lg:text-lg font-normal text-white">
              SOLIFY
            </h5>
            <span className="ml-1 mt-2 text-[10px] md-[12px] text-[#8591B1] uppercase ">
              SOLIFY
            </span>
          </div>
          <div className="flex gap-2">
            <h1 className="text-base md:text-lg lg:text-xl xl:text-[29px] font-medium  leading-[42px] ">
              $0.01
            </h1>
            <p className="flex items-center">
              <svg
                className="mr-1 text-[12px] md:text-sm font-normal text-[#16C784] "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.0535 10.5469L8.20684 10.5469L11.9468 10.5469C12.5868 10.5469 12.9068 9.77354 12.4535 9.32021L9.00017 5.86687C8.44684 5.31354 7.54683 5.31354 6.9935 5.86687L5.68017 7.18021L3.54017 9.32021C3.0935 9.77354 3.4135 10.5469 4.0535 10.5469Z"
                  fill="#16C784"
                />
              </svg>
              0.92% (1d)
            </p>
          </div>
        </div>
        {/* bar  section */}
        <div>
          <div className="w-full">
            <div className="bg-[#080B13] p-2 md:p-4 mb-[5px] rounded-lg">
              <div className="mb-2 md:mb-4 flex justify-between items-center rounded-lg">
                <p className="flex items-center text-[12px] md:text-[14px]  leading-[18px] text-[#8591B1]">
                  Market cap <img className="ml-1" src={minicardicon} alt="" />
                </p>
                <p className="flex items-center text-[12px] md:text-[14px]  leading-[18px]  text-[#FFFFFF]">
                  <svg
                    className="mr-1 text-[12px] md:text-sm font-normal text-[#16C784] "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.0535 10.5469L8.20684 10.5469L11.9468 10.5469C12.5868 10.5469 12.9068 9.77354 12.4535 9.32021L9.00017 5.86687C8.44684 5.31354 7.54683 5.31354 6.9935 5.86687L5.68017 7.18021L3.54017 9.32021C3.0935 9.77354 3.4135 10.5469 4.0535 10.5469Z"
                      fill="#16C784"
                    />
                  </svg>
                  <span className="ml-1 mr-2 text-[#16C784]">0.18%</span>
                  $847,847,191,990
                </p>
              </div>
              <div className="flex items-center gap-6 relative z-10 mb-[5px]">
                <img
                  src={minicardicon2}
                  alt=""
                  className="absolute z-20 top-1 left-[2px]"
                />
                <div className="bg-[#232B3D] w-full  h-[5px] rounded-[30px]"></div>
                <p className="py-[2px] px-[6px] bg-[#232B3D] text-[12px] md:text-[14px]  leading-[18px] rounded-[4px] font-normal  text-[#8591B1]">
                  #1
                </p>
              </div>
            </div>
            <div className="bg-[#080B13] p-2 md:p-4 mb-[5px] rounded-lg">
              <div className="mb-2 md:mb-4 flex justify-between items-center">
                <p className="flex items-center text-[12px] md:text-[14px]  leading-[18px] text-[#8591B1]">
                  Market cap <img className="ml-1" src={minicardicon} alt="" />
                </p>
                <p className="flex items-center text-[12px] md:text-[14px]  leading-[18px]  text-[#FFFFFF]">
                  <svg
                    className="mr-1 text-[12px] md:text-sm font-normal text-[#16C784] "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.0535 10.5469L8.20684 10.5469L11.9468 10.5469C12.5868 10.5469 12.9068 9.77354 12.4535 9.32021L9.00017 5.86687C8.44684 5.31354 7.54683 5.31354 6.9935 5.86687L5.68017 7.18021L3.54017 9.32021C3.0935 9.77354 3.4135 10.5469 4.0535 10.5469Z"
                      fill="#F82B37"
                    />
                  </svg>
                  <span className="ml-1 mr-2 text-[#F82B37]">0.18%</span>
                  $847,847,191,990
                </p>
              </div>
              <div className="flex items-center gap-6 relative z-10 mb-[5px]">
                <img
                  src={minicardicon2}
                  alt=""
                  className="absolute z-20 top-1 left-[2px]"
                />
                <div className="bg-[#232B3D] w-full  h-[5px] rounded-[30px]"></div>
                <p className="py-[2px] px-[6px] bg-[#232B3D] text-[12px] md:text-[14px]  leading-[18px] rounded-[4px] font-normal  text-[#8591B1]">
                  #2
                </p>
              </div>
            </div>
            <div className="bg-[#080B13] p-2 md:p-4 mb-[5px] rounded-lg">
              <div className="mb-2 md:mb-4 flex justify-between items-center">
                <p className="flex items-center text-[12px] md:text-[14px]  leading-[18px] text-[#8591B1]">
                  Market cap <img className="ml-1" src={minicardicon} alt="" />
                </p>
                <p className="flex items-center text-[12px] md:text-[14px]  leading-[18px]  text-[#FFFFFF]">
                  <svg
                    className="mr-1 text-[12px] md:text-sm font-normal text-[#16C784] "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.0535 10.5469L8.20684 10.5469L11.9468 10.5469C12.5868 10.5469 12.9068 9.77354 12.4535 9.32021L9.00017 5.86687C8.44684 5.31354 7.54683 5.31354 6.9935 5.86687L5.68017 7.18021L3.54017 9.32021C3.0935 9.77354 3.4135 10.5469 4.0535 10.5469Z"
                      fill="#16C784"
                    />
                  </svg>
                  <span className="ml-1 mr-2 text-[#16C784]">0.18%</span>
                  $847,847,191,990
                </p>
              </div>
              <div className="flex items-center gap-6 relative z-10 mb-[5px]">
                <img
                  src={minicardicon2}
                  alt=""
                  className="absolute z-20 top-1 left-[2px]"
                />
                <div className="bg-[#232B3D] w-full  h-[5px] rounded-[30px]"></div>
                <p className="py-[2px] px-[6px] bg-[#232B3D] text-[12px] md:text-[14px]  leading-[18px] rounded-[4px] font-normal  text-[#8591B1]">
                  #3
                </p>
              </div>
            </div>
          </div>
          {/* Total supply */}
          <div className="bg-[#080B13] p-2 md:p-4 mb-[5px] rounded-lg">
            <div className="flex justify-between items-center mb-3 md:mb-6">
              <p className="flex items-center text-[12px] md:text-[14px]  leading-[18px] text-[#8591B1] ">
                Total supply{" "}
                <img className="ml-1 w-3 h-3" src={minicardicon} alt="" />
              </p>
              <p className="text-[12px] md:text-[14px]  leading-[18px] text-[#FFFFFF]">
                $847,847,191,990
              </p>
            </div>
            <div className=" flex justify-between items-center mb-3 md:mb-6">
              <p className="flex items-center text-[12px] md:text-[14px]  leading-[18px] text-[#8591B1] ">
                Max. supply{" "}
                <img className="ml-1 w-3 h-3" src={minicardicon} alt="" />
              </p>
              <p className="text-[12px] md:text-[14px]  leading-[18px] text-[#FFFFFF]">
                $847,847,191,990
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="flex items-center text-[12px] md:text-[14px]  leading-[18px] text-[#8591B1] ">
                Fully diluted market cap
                <img className="ml-1 w-3 h-3" src={minicardicon} alt="" />
              </p>
              <p className="text-[12px] md:text-[14px]  leading-[18px] text-[#FFFFFF]">
                $847,847,191,990
              </p>
            </div>
          </div>
          {/* Official links */}
          <div className="bg-[#080B13] p-2 md:p-4 mb-[5px] rounded-lg">
            <p className="text-sm md:text-base font-semibold text-[#FFFFFF]">
              Official links
            </p>
            <div className="mt-2 md:mt-4 flex gap-2">
              <a
                href="#"
                className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"
              >
                <img className="w-4 h-4/5" src={website} alt="" />
                Website
              </a>
              <a
                href="#"
                className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"
              >
                <img className="w-4 h-4/5" src={document} alt="" />
                Whitepaper
              </a>
            </div>
          </div>
          <div className="bg-[#080B13] p-2 md:p-4 mb-[5px] rounded-lg">
            <p className="text-sm md:text-base font-semibold text-[#FFFFFF]">
              Socials
            </p>
            <div className="mt-2 md:mt-4 flex gap-2 items-center flex-wrap">
              <a
                href="#"
                className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"
              >
                <img className="w-4 h-4/5" src={website} alt="" />
                Twitter
              </a>
              <a
                href="#"
                className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"
              >
                <img className="w-4 h-4/5" src={document} alt="" />
                Whitepaper
              </a>
              <a
                href="#"
                className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"
              >
                <img className="w-4 h-4/5" src={github} alt="" />
                Telegram
              </a>
            </div>
          </div>
          <div className="lg:hidden">
            <Dashboardtable tabledata={tabledata} />
          </div>
        </div>
      </div>

      <div className="dashboard-main-right flex-1 bg-gray-100">
        <div className="card block lg:hidden  p-5 bg-[#080B13] mb-3 md:mb-5">
          <div className="flex items-center">
            <div className="h-[19px] w-[18px] -mt-2">
            <img src={dcicon} alt="" className="h-full w-full object-cover" />
            </div>
            <h5 className="ml-2 text-base mb-2 font-normal text-white">
              SOLIFY
            </h5>
            <span className="ml-1 text-[10px] text-[#8591B1] uppercase ">
              TANT
            </span>
          </div>
          <div className="flex gap-2">
            <h1 className="text-base md:text-lg lg:text-xl xl:text-[29px] font-medium  leading-[42px] ">
              $0.01
            </h1>
            <p className="flex items-center">
              <svg
                className="mr-1 text-[12px] md:text-sm font-normal text-[#16C784] "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.0535 10.5469L8.20684 10.5469L11.9468 10.5469C12.5868 10.5469 12.9068 9.77354 12.4535 9.32021L9.00017 5.86687C8.44684 5.31354 7.54683 5.31354 6.9935 5.86687L5.68017 7.18021L3.54017 9.32021C3.0935 9.77354 3.4135 10.5469 4.0535 10.5469Z"
                  fill="#16C784"
                />
              </svg>
              0.92% (1d)
            </p>
          </div>
        </div>
        <div className="mb-0 lg:mb-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="hidden xl:flex items-center bg-[#080B12] rounded-lg p-1 gap-[10px]">
                <span className="cursor-pointer inline-block  px-[10px] py-1 rounded-[4px] bg-[#121822] text-white text-sm leading-normal">Price</span>
                <span className="cursor-pointer inline-block px-[10px] py-1 rounded-[4px] text-[#6B7280] text-sm leading-normal">Market cap</span>
              </div>
              <div className="hidden xl:flex items-center bg-[#080B12] rounded-lg p-1 gap-[10px]">
                <span className="cursor-pointer inline-block px-2 py-1 rounded-[4px] bg-[#121822] text-white text-sm leading-normal">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8.36686L4.06 4.79354C4.56667 4.20687 5.46667 4.16686 6.01333 4.72019L6.64667 5.35354C7.19333 5.9002 8.09333 5.86686 8.6 5.28019L11.6667 1.7002" stroke="#6B7280" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="cursor-pointer inline-block px-2 py-1 rounded-[4px] text-[#6B7280] text-xs leading-normal">
                  <svg width="19" height="17" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6665 1.33333L4.6665 8" stroke="#6B7280" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.00049 12.6665V14.6665" stroke="#6B7280" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.3325 1.3335V3.3335" stroke="#6B7280" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.3325 9.99984V14.6665" stroke="#6B7280" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.6665 11.7332V8.93317C6.6665 8.41984 6.33317 7.99984 5.33317 7.99984H3.99984C2.99984 7.99984 2.6665 8.41984 2.6665 8.93317V11.7332C2.6665 12.2465 2.99984 12.6665 3.99984 12.6665H5.33317C6.33317 12.6665 6.6665 12.2465 6.6665 11.7332Z" stroke="#6B7280" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.3325 8.66667V4.66667C14.3325 3.93333 13.9992 3.33333 12.9992 3.33333H11.6659C10.6659 3.33333 10.3325 3.93333 10.3325 4.66667V8.66667C10.3325 9.4 10.6659 10 11.6659 10H12.9992C13.9992 10 14.3325 9.4 14.3325 8.66667Z" stroke="#6B7280" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex items-center bg-[#080B12] rounded-lg p-[10px] lg:p-1 gap-[10px] w-full md:w-auto">
              {chartFilter.map((item, index) => (
                <button key={index} className={`cursor-pointer inline-block w-full  py-[5px] rounded-[4px] text-sm leading-normal ${index == 0 ? 'px-[10px] bg-[#121822] text-white' : ' bg-transparent text-[#6B7280]'}`}>{item}</button>
              ))}
              <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.25" y1="-1.09279e-08" x2="0.250001" y2="12" stroke="#2F3443" strokeWidth="0.5" />
              </svg>
              <button className={`cursor-pointer inline-block py-[5px] rounded-[4px] text-sm leading-normal bg-transparent text-[#6B7280] uppercase`}>log</button>
              <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.25" y1="-1.09279e-08" x2="0.250001" y2="12" stroke="#2F3443" strokeWidth="0.5" />
              </svg>
              <button className={`cursor-pointer inline-block pr-[10px] py-[5px] rounded-[4px] text-xs leading-normal bg-transparent text-[#6B7280] uppercase`}>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.21289 7.78662L7.91956 9.49329L9.62622 7.78662" stroke="#6B7280" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.91992 2.6665V9.4465" stroke="#6B7280" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3346 8.12012C13.3346 11.0668 11.3346 13.4535 8.0013 13.4535C4.66797 13.4535 2.66797 11.0668 2.66797 8.12012" stroke="#6B7280" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <CandlestickChart />
        </div>
        <div className="hidden lg:block relative">
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-10" style={{backdropFilter:'blur(12px)'}}><img src={coming_soon} className="w-full h-full" alt="" /></div>
          <Dashboardtable tabledata={tabledata} />
        </div>
      </div>
    </div>
  );
}
