import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
export default function Dashboardtable({ tabledata }) {
  return (
    <div className="overflow-auto">
      <Table
        removeWrapper
        aria-label="Example static collection"
        className="table"
      >
        <TableHeader>
          <TableColumn className=" md:py-[12px] text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
            Exchange
          </TableColumn>
          <TableColumn className=" md:py-[21px] text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
            Pair
          </TableColumn>
          <TableColumn className=" md:py-[21px] text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
            Price
          </TableColumn>
          <TableColumn className=" md:py-[21px] text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
            +2% Depth
          </TableColumn>
          <TableColumn className=" md:py-[21px]  ext-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
            -2% Depth
          </TableColumn>
          <TableColumn className=" md:py-[21px] text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
            Volume (24h)
          </TableColumn>
          <TableColumn className=" md:py-[21px] text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
            Volume %
          </TableColumn>
          <TableColumn className=" md:py-[21px] text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
            Confidence
          </TableColumn>
          <TableColumn className=" md:py-[21px] text-[12px] leading-[14px] font-medium text-[#6B7280]  bg-[#080B13] ">
            Updated
          </TableColumn>
        </TableHeader>
        <TableBody>
          {tabledata?.map((item, idx) => (
            <TableRow key={idx} className=" mb-5">
              <TableCell className="bg-[#080B13] mb-5 ">
                <div className="flex items-center ml-0 xxl:-ml-6  md:mr-4 lg:mr-0  md:pl-0 w-full text-[12px] md:text-sm  leading-5 font-medium text-[#FFFFFF]">
                  <div className=" mr-3 w-6 h-6">
                    <img
                      className="w-full h-full"
                      src={item.icon}
                      alt=""
                    />
                  </div>
                  {item.Exchange}
                </div>
              </TableCell>
              <TableCell className="bg-[#080B13] mb-[5px]">
                <p className=" text-[12px] md:text-sm -ml-5 mt-3 leading-5 font-medium text-[#FFFFFF]  px-5 mb-4">
                  {item.Pair}
                </p>
              </TableCell>
              <TableCell className="bg-[#080B13] mb-[5px]">
                <p className=" text-[12px] md:text-sm  -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
                  {item.Price}
                </p>
              </TableCell>
              <TableCell className="bg-[#080B13] mb-[5px]">
                <p className=" text-[12px] md:text-sm  -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
                  {item.Depth}
                </p>
              </TableCell>
              <TableCell className="bg-[#080B13] mb-[5px]">
                <p className=" text-[12px] md:text-sm  -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
                  {item.Depth2}
                </p>
              </TableCell>
              <TableCell className="bg-[#080B13] mb-[5px]">
                <p className=" text-[12px] md:text-sm  -ml-5  leading-5 mt-3 font-medium text-[#FFFFFF]  px-5 mb-4">
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
