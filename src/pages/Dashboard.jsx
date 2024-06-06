import dcicon from "../assets/img/dashboard-card-icon.png";
import CandlestickChart from "../components/CandlestickChart";
import minicardicon from "../assets/img/mincardicon.svg"
import minicardicon2 from "../assets/img/minicardicon2.svg"
import website from "../assets/img/webside.svg"
import document from "../assets/img/document.svg"
import github from "../assets/img/github.svg"
import dicon1 from "../assets/img/dicon1.svg"
import dicon2 from "../assets/img/dicon2.svg"
import dicon3 from "../assets/img/dicon3.svg"
import dicon4 from "../assets/img/dicon4.svg"
import dicon5 from "../assets/img/dicon5.svg"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
export default function Dashboard() {
  const tabledata = [
    {
      Exchange: "Coinbase",
      icon: `${dicon1}`,
      Pair: `TANT/USDT`,
      Price: "$2.0751",
      "Depth": "$554.079",
      "Depth2": "$729.558",
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
      "Depth": "$554.079",
      "Depth2": "$729.558",
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
      "Depth": "$554.079",
      "Depth2": "$729.558",
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
      "Depth": "$554.079",
      "Depth2": "$729.558",
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
      "Depth": "$554.079",
      "Depth2": "$729.558",
      Volume: "$13,984.992",
      Volume2: "30.92%",
      Confidence: "High",
      Updated: "Recently",
    }



  ];
  return (
    <div className="flex gap-8">
      <div className="dashboard-main-left w-[389px] bg-gray-200 ">
        <div className="card p-6 bg-[#080B13] mb-3 md:mb-5">
          <div className="flex items-center mb-2 md:mb-[10px]">
            <img src={dcicon} alt="" className="h-5 w-5" />
            <h5 className="ml-2 text-sm md:text-base lg:text-lg font-normal text-white">
              TANT Finance
            </h5>
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
        <div>
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
              <p className="py-[2px] px-[6px] bg-[#232B3D] text-[10px] md:text-[12px]  leading-[18px] rounded-[4px] font-normal  text-[#8591B1]">#2</p>
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
              <p className="py-[2px] px-[6px] bg-[#232B3D] text-[10px] md:text-[12px]  leading-[18px] rounded-[4px] font-normal  text-[#8591B1]">#3</p>
            </div>
          </div>
        </div>
        {/* Total supply */}
        <div className="bg-[#080B13] p-2 md:p-4 mb-[5px]">
          <div className="flex justify-between items-center mb-3 md:mb-6">
            <p className="flex items-center text-[10px] md:text-[12px]  leading-[18px] text-[#8591B1] ">Total supply <img className="ml-1 w-3 h-3" src={minicardicon} alt="" /></p>
            <p className="text-[10px] md:text-[12px]  leading-[18px] text-[#FFFFFF]">$847,847,191,990</p>
          </div>
          <div className=" flex justify-between items-center mb-3 md:mb-6">
            <p className="flex items-center text-[10px] md:text-[12px]  leading-[18px] text-[#8591B1] ">Max. supply <img className="ml-1 w-3 h-3" src={minicardicon} alt="" /></p>
            <p className="text-[10px] md:text-[12px]  leading-[18px] text-[#FFFFFF]">$847,847,191,990</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="flex items-center text-[10px] md:text-[12px]  leading-[18px] text-[#8591B1] ">Fully diluted market cap<img className="ml-1 w-3 h-3" src={minicardicon} alt="" /></p>
            <p className="text-[10px] md:text-[12px]  leading-[18px] text-[#FFFFFF]">$847,847,191,990</p>
          </div>
        </div>
        {/* Official links */}
        <div className="bg-[#080B13] p-2 md:p-4 mb-[5px]">
          <p className="text-sm md:text-base font-semibold text-[#FFFFFF]">Official links</p>
          <div className="mt-2 md:mt-4 flex gap-2">
            <button className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"><img className="w-4 h-4/5" src={website} alt="" />Website</button>
            <button className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"><img className="w-4 h-4/5" src={document} alt="" />Whitepaper</button>
          </div>
        </div>
        <div className="bg-[#080B13] p-2 md:p-4 mb-[5px]">
          <p className="text-sm md:text-base font-semibold text-[#FFFFFF]">Socials</p>
          <div className="mt-2 md:mt-4 flex gap-2">
            <button className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"><img className="w-4 h-4/5" src={website} alt="" />Twitter</button>
            <button className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"><img className="w-4 h-4/5" src={document} alt="" />Whitepaper</button>
            <button className="text-[12px] md:text-sm bg-[#232B3D]  leading-[21px] text-[#FFFFFF] flex items-center gap-[4px] py-1 px-[6px]  rounded-lg"><img className="w-4 h-4/5" src={github} alt="" />Telegram</button>
          </div>
        </div>
      </div>
      <div className="dashboard-main-right flex-1 bg-gray-100">
        <CandlestickChart />
        <div className="w-full">
          <Table removeWrapper aria-label="Example static collection" className="table">
            <TableHeader>
              <TableColumn className=" py- md:py-[21px]  text-[10px] md:text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
                Exchange
              </TableColumn>
              <TableColumn className=" py- md:py-[21px]  text-[10px] md:text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
                Pair
              </TableColumn>
              <TableColumn className=" py- md:py-[21px]  text-[10px] md:text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
                Price
              </TableColumn>
              <TableColumn className=" py- md:py-[21px]  text-[10px] md:text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
                +2% Depth
              </TableColumn>
              <TableColumn className=" py- md:py-[21px]  text-[10px] md:text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
                -2% Depth
              </TableColumn>
              <TableColumn className=" py- md:py-[21px]  text-[10px] md:text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
                Volume (24h)
              </TableColumn>
              <TableColumn className=" py- md:py-[21px]  text-[10px] md:text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
                Volume %
              </TableColumn>
              <TableColumn className=" py- md:py-[21px]  text-[10px] md:text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
                Confidence
              </TableColumn>
              <TableColumn className=" py- md:py-[21px]  text-[10px] md:text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
                Updated
              </TableColumn>
            </TableHeader>
            <TableBody>
              {
                tabledata.map((item, idx) => (<TableRow key={idx} className=" mb-5">
                  <TableCell className="bg-[#080B13] mb-5 ">
                    <div className="flex items-center -ml-6  md:pl-6 w-full text-[12px] md:text-sm  leading-5 font-medium text-[#FFFFFF]">
                      <img
                        className=" mr-3 h-5 w-5 md:h-[25px] md:w-[25px] "
                        src={item.icon}
                        alt=""
                      />
                      {item.Exchange}
                    </div>
                  </TableCell>
                  <TableCell className="bg-[#080B13] mb-[5px]">
                    <p className=" text-[12px] md:text-sm -ml-5 mt-3 leading-5 font-medium text-[#FFFFFF]  px-5 mb-4">
                      {item.Pair}
                    </p>
                  </TableCell>
                  <TableCell className="bg-[#080B13] mb-[5px]">
                    <p className=" text-[12px] md:text-sm -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
                      {item.Price}
                    </p>
                  </TableCell>
                  <TableCell className="bg-[#080B13] mb-[5px]">
                    <p className=" text-[12px] md:text-sm -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
                      {item.Depth}
                    </p>
                  </TableCell>
                  <TableCell className="bg-[#080B13] mb-[5px]">
                    <p className=" text-[12px] md:text-sm -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
                      {item.Depth2}
                    </p>
                  </TableCell>
                  <TableCell className="bg-[#080B13] mb-[5px]">
                    <p className=" text-[12px] md:text-sm -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
                      {item.Volume}
                    </p>
                  </TableCell>
                  <TableCell className="bg-[#080B13] mb-[5px]">
                    <p className=" text-[12px] md:text-sm -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
                      {item.Volume2}
                    </p>
                  </TableCell>
                  <TableCell className="bg-[#080B13] mb-[5px]">
                    <button className=" text-[12px] md:text-sm py-1 px-2  bg-[#029955] rounded-[4PX]  leading-5 font-medium text-[#FFFFFF] ">
                      {item.Confidence}
                    </button>
                  </TableCell>
                  <TableCell className="bg-[#080B13] mb-[5px]">
                    <p className=" text-[12px] md:text-sm -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
                      {item.Updated}
                    </p>
                  </TableCell>

                </TableRow>))
              }

            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
