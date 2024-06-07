import dexicon from "../assets/img/dexicon.png";
import dexicon2 from "../assets/img/dexicon.png";
import dexicon3 from "../assets/img/dexicon2.png";
import dexicon4 from "../assets/img/dexicon3.png";
// import bitcoin from "../assets/img/Bitcoin.svg";
import icon1 from "../assets/img/ticon1.svg";
import icon2 from "../assets/img/ticon2.svg";
import icon3 from "../assets/img/ticon3.svg";
import icon4 from "../assets/img/ticon4.svg";
import icon5 from "../assets/img/ticon5.svg";
import icon6 from "../assets/img/ticon6.svg";
import icon7 from "../assets/img/ticon7.svg";
import icon8 from "../assets/img/ticon8.svg";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
export default function Dex() {
  const tabledata = [
    {
      title: "Bitcoin",
      icon: `${icon1}`,
      volume: "$10,000,00",
      Profit: "$500,000",
      Signup: "100",
    },
    {
      title: "Ethereum",
      icon: `${icon2}`,
      volume: "$5,000,00",
      Profit: "$20,0000",
      Signup: "80",
    },
    {
      title: "USDT",
      icon: `${icon3}`,
      volume: "$2,000,00",
      Profit: "$1,0000",
      Signup: "70",
    },
    {
      title: "Ripple",
      icon: `${icon4}`,
      volume: "$10,000,00",
      Profit: "$1,000,00",
      Signup: "65",
    },
    {
      title: "USDC",
      icon: `${icon5}`,
      volume: "$1,0,000,00",
      Profit: "$100,000",
      Signup: "60",
    },
    {
      title: "BNB",
      icon: `${icon6}`,
      volume: "$80,000",
      Profit: "$80,000",
      Signup: "50",
    },
    {
      title: "Dodge",
      icon: `${icon7}`,
      volume: "$50,000",
      Profit: "$30,000",
      Signup: "40",
    },
    {
      title: "Litecoin",
      icon: `${icon8}`,
      volume: "$30,00",
      Profit: "$15,000",
      Signup: "30",
    },
  ];
const items = [
  {
    title: "VOLUME TODAY",
    img:`${dexicon}`,
    des:"$74,097,895,234"
  },
  {
    title: "PROFIT TODAY",
    img:`${dexicon2}`,
    des:"$2000"
  },
  {
    title: "SIGNUPS",
    img:`${dexicon3}`,
    des:"200"
  },
  {
    title: "USER REGISTERED",
    img:`${dexicon4}`,
    des:"122"
  },
]

  return (
    <div className="dex">
      <div className="grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-4 gap-[20px]  mb-5 md:mb-8 lg:mb-12  xl:mb-[52px]">
        {
          items.map((item,idx)=>(
            <div className=" imtitem flex  gap-4 bg-[#080B13] rounded-[10px] items-center md:items-start  p-3 md:p-6  " key={idx}>
            <div className={`p-3 flex justify-center items-center ${idx==0 && "bg-[#0257FF]"} ${idx==1 && "bg-[#0276FF]"} ${idx==2 && "bg-[#5302FF]"}   ${idx==3 && "bg-[#6202FF]"}   rounded-[10px] w-[47px] h-[47px]  md:w-[80px] md:h-[80px]   flex-none xl:2  xxl:p-3`}>
              <img
                className="w-5 h-5   md:w-10 md:h-10  flex-none "
                src={item.img}
                alt=""
              />
            </div>
            <div>
              <h6 className=" title text-[12px] md:text-lg   leading-6 font-medium text-[#6B7280]   lg:mb-3 xl:mb-4   uppercase ">
               {item.title}
              </h6>
              <p className=" des text-base md:text-[30px]  leading-[40px] font-semibold text-[#D9DCE4]">
              {item.des}
              </p>
            </div>
          </div>))
        }
      </div>

      <div className="overflow-auto">
        <Table
          removeWrapper
          aria-label="Example static collection"
          className="table overflow-y-auto"
        >
          <TableHeader>
            <TableColumn className=" py- md:py-[18px]  text-[10px] md:text-sm leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
              Coin
            </TableColumn>
            <TableColumn className=" py- md:py-[18px]  text-[10px] md:text-sm leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
              Volume (USD)
            </TableColumn>
            <TableColumn className=" py- md:py-[18px]  text-[10px] md:text-sm leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
              Profit (USD)
            </TableColumn>
            <TableColumn className=" py- md:py-[18px]  text-[10px] md:text-sm leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
              Signup
            </TableColumn>
          </TableHeader>
          <TableBody>
            {tabledata.map((item, idx) => (
              <TableRow key={idx} className=" mb-5">
                <TableCell className="bg-[#080B13] mb-5 ">
                  <div className="flex items-center lg:-ml-6  md:pl-6 w-full text-sm md:text-base leading-5 font-medium text-white">
                    <div className="mr-3 h-10 w-10 flex-none">
                      <img
                        className="w-full h-full object-cover"
                        src={item.icon}
                        alt=""
                      />
                    </div>
                    {item.title}
                  </div>
                </TableCell>
                <TableCell className="bg-[#080B13] mb-[5px]">
                  <p className="text-sm md:text-base -ml-5 mt-2 leading-5 font-medium text-white py- px-5 mb-4">
                    {item.volume}
                  </p>
                </TableCell>
                <TableCell className="bg-[#080B13] mb-[5px]">
                  <p className="text-sm md:text-base -ml-5 mt-3  leading-5 font-medium text-white py- px-5 mb-5">
                    {item.Profit}
                  </p>
                </TableCell>
                <TableCell className="bg-[#080B13] mb-[5px]">
                  <p className="text-sm md:text-base -ml-5  leading-5 font-medium text-white py- px-5">
                    {item.Signup}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
