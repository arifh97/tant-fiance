import dexicon from "../assets/img/dexicon.png";
import dexicon2 from "../assets/img/dexicon.png";
import dexicon3 from "../assets/img/dexicon2.png";
import dexicon4 from "../assets/img/dexicon3.png";
import bitcoin from "../assets/img/Bitcoin.svg";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
export default function Dex() {

  return (
    <div className="dex">
      <div className="flex gap-[20px] flex-wrap mb-5 md:mb-8 lg:mb-12  xl:mb-[52px]">
        <div className="flex gap-4 bg-[#080B13] p-6 rounded-[10px] w-[357px]">
          <div className="p-3 bg-[#0257FF] rounded-[10px]">
            <img className="w-10 h-10 mt-[5px]" src={dexicon} alt="" />
          </div>
          <div>
            <p className="text-lg leading-6 font-medium text-[#6B7280] mb-4 uppercase ">
              Volume Today
            </p>
            <p className="text-[30px]  leading-[40px]  font-semibold text-[#D9DCE4]">
              $74,097,895,234
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-[#080B13] p-6 rounded-[10px] w-[357px]">
          <div className="p-3 bg-[#0257FF] rounded-[10px]">
            <img className="w-10 h-10 mt-[5px]" src={dexicon2} alt="" />
          </div>
          <div>
            <p className="text-lg leading-6 font-medium text-[#6B7280] mb-4 uppercase ">
            Profit Today
            </p>
            <p className="text-[30px]  leading-[40px]  font-semibold text-[#D9DCE4]">
            $2000
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-[#080B13] p-6 rounded-[10px] w-[357px]">
          <div className="p-3 bg-[#5302FF] rounded-[10px]">
            <img className="w-10 h-10 mt-[5px]" src={dexicon3} alt="" />
          </div>
          <div>
            <p className="text-lg leading-6 font-medium text-[#6B7280] mb-4 uppercase ">
            Signups
            </p>
            <p className="text-[30px]  leading-[40px]  font-semibold text-[#D9DCE4]">
            200
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-[#080B13] p-6 rounded-[10px] w-[357px]">
          <div className="p-3 bg-[#5302FF] rounded-[10px]">
            <img className="w-10 h-10 mt-[5px]" src={dexicon4} alt="" />
          </div>
          <div>
            <p className="text-lg leading-6 font-medium text-[#6B7280] mb-4 uppercase ">
            User Registered
            </p>
            <p className="text-[30px]  leading-[40px]  font-semibold text-[#D9DCE4]">
            122
            </p>
          </div>
        </div>
      </div>
      <div>
      <Table removeWrapper aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className=" py-3 md:py-[18px] pl-6 text-[10px] md:text-sm leading-[14px] font-medium text-[#6B7280]  bg-[#080B13]  mb-[5px] ">Coin</TableColumn>
        <TableColumn className=" py-3 md:py-[18px] pl-6 text-[10px] md:text-sm leading-[14px] font-medium text-[#6B7280]  bg-[#080B13]  mb-[5px] ">Volume (USD)</TableColumn>
        <TableColumn className=" py-3 md:py-[18px] pl-6 text-[10px] md:text-sm leading-[14px] font-medium text-[#6B7280]  bg-[#080B13]  mb-[5px] ">Profit (USD)</TableColumn>
        <TableColumn className=" py-3 md:py-[18px] pl-6 text-[10px] md:text-sm leading-[14px] font-medium text-[#6B7280]  bg-[#080B13]  mb-[5px] ">Signup</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell className="flex items-center text-sm md:text-base leading-5 font-medium text-white py-2 md:py-4 px-5 md:px-6 bg-[#080B13]  mb-[5px] "> <img className="mr-[12px] h-8 w-8 md:h-10 md:w-10 " src={bitcoin} alt="" />Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
      </div>
    </div>
  );
}
