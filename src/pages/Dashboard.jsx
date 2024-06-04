import dcicon from "../assets/img/dashboard-card-icon.png";
import CandlestickChart from "../components/CandlestickChart";
import minicardicon from "../assets/img/mincardicon.svg"
import minicardicon2 from "../assets/img/minicardicon2.svg"
export default function Dashboard() {
  return (
    <div className="dashboard-main flex gap-8">
      <div className="dashboard-main-left w-[389px] bg-gray-200 ">
        <div className="card p-6 bg-[#080B13] mb-3 md:mb-5">
          <div className="flex items-center mb-2 md:mb-[10px]">
            <img src={dcicon} alt="" className="h-5 w-5" />{" "}
            <h5 className="ml-2 text-sm md:text-base lg:text-lg font-normal text-white">
              TANT Finance
            </h5>{" "}
            <span className="ml-1 mt-2 text-[10px] md-[12px] text-[#8591B1] uppercase ">
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
        {/* bar  section */}
        <div className="bg-[#080B13] p-2 md:p-4 mb-[5px]">
         <div className="mb-2 md:mb-4 flex justify-between items-center">
           <p className="flex items-center text-[10px] md:text-[12px]  leading-[18px] text-[#8591B1]">Market cap <img className="ml-1" src={minicardicon} alt="" /></p>
           <p className="flex items-center text-[10px] md:text-[12px]  leading-[18px]  text-[#FFFFFF]"><svg
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
            <span className="ml-1 mr-2 text-[#16C784]">0.18%</span>$847,847,191,990 
           </p>
         </div>
         <div className="flex items-center gap-6 relative z-10 mb-[5px]">
             <img src={minicardicon2} alt="" className="absolute z-20 top-1 left-[2px]" />
            <div className="bg-[#232B3D] w-full  h-[5px] rounded-[30px]"></div>
            <p className="py-[2px] px-[6px] bg-[#232B3D] text-[10px] md:text-[12px]  leading-[18px] rounded-[4px] font-normal  text-[#8591B1]">#1</p>
         </div>
        </div>
        <div className="bg-[#080B13] p-2 md:p-4 mb-[5px]">
         <div className="mb-2 md:mb-4 flex justify-between items-center">
           <p className="flex items-center text-[10px] md:text-[12px]  leading-[18px] text-[#8591B1]">Market cap <img className="ml-1" src={minicardicon} alt="" /></p>
           <p className="flex items-center text-[10px] md:text-[12px]  leading-[18px]  text-[#FFFFFF]"><svg
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
            <span className="ml-1 mr-2 text-[#F82B37]">0.18%</span>$847,847,191,990 
           </p>
         </div>
         <div className="flex items-center gap-6 relative z-10 mb-[5px]">
             <img src={minicardicon2} alt="" className="absolute z-20 top-1 left-[2px]" />
            <div className="bg-[#232B3D] w-full  h-[5px] rounded-[30px]"></div>
            <p className="py-[2px] px-[6px] bg-[#232B3D] text-[10px] md:text-[12px]  leading-[18px] rounded-[4px] font-normal  text-[#8591B1]">#1</p>
         </div>
        </div>
        <div className="bg-[#080B13] p-2 md:p-4 mb-[5px]">
         <div className="mb-2 md:mb-4 flex justify-between items-center">
           <p className="flex items-center text-[10px] md:text-[12px]  leading-[18px] text-[#8591B1]">Market cap <img className="ml-1" src={minicardicon} alt="" /></p>
           <p className="flex items-center text-[10px] md:text-[12px]  leading-[18px]  text-[#FFFFFF]"><svg
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
            <span className="ml-1 mr-2 text-[#16C784]">0.18%</span>$847,847,191,990 
           </p>
         </div>
         <div className="flex items-center gap-6 relative z-10 mb-[5px]">
             <img src={minicardicon2} alt="" className="absolute z-20 top-1 left-[2px]" />
            <div className="bg-[#232B3D] w-full  h-[5px] rounded-[30px]"></div>
            <p className="py-[2px] px-[6px] bg-[#232B3D] text-[10px] md:text-[12px]  leading-[18px] rounded-[4px] font-normal  text-[#8591B1]">#1</p>
         </div>
        </div>
      </div>
      <div className="dashboard-main-right flex-1 bg-gray-100">
        <CandlestickChart />
      </div>
    </div>
  );
}
