import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import NewsCaed from "../components/NewsCaed";

import newscard1 from "../assets/img/newscard.png";
import newscard2 from "../assets/img/newcard2.png";
import newscard3 from "../assets/img/newcard3.png";
import newscard4 from "../assets/img/newcard4.png";
import newscard5 from "../assets/img/newcard5.png";
import newscard6 from "../assets/img/newcard6.png";
import icon1 from "../assets/img/newscardi.svg";
import icon2 from "../assets/img/icon2.svg";
import icon3 from "../assets/img/icon3.svg";
export default function News() {
  const newscards = [
    {
      "title" : "$BTC Bitcoin could hit 51K within hours.",
      "des": "#BitcoinETFs could be approved anytime now. Prio to approval, they might shake the entire market with sharp movements. Be cautious, stick to spot trading! The trend is upward, stay calm stick to spot",
      "img": `${newscard1}`,
      "icon": `${icon1}`,
      "iconname" : "Soham",
      "social" :"@soham . 6h"
    },
    {
      "title" : " $BTC Bitcoin could hit 51K within hours.",
      "des": "#BitcoinETFs could be approved anytime now. Prio to approval, they might shake the entire market with sharp movements. Be cautious, stick to spot trading! The trend is upward, stay calm stick to spot",
      "img": `${newscard2}`,
      "icon": `${icon2}`,
      "iconname" : "Darrell",
      "social" :"@darrell . 6h"
    },
    {
      "title" : " $BTC Bitcoin could hit 51K within hours.",
      "des": "#BitcoinETFs could be approved anytime now. Prio to approval, they might shake the entire market with sharp movements. Be cautious, stick to spot trading! The trend is upward, stay calm stick to  spot",
      "img": `${newscard3}`,
      "icon": `${icon3}`,
      "iconname" : "Shane",
      "social" :"@shane . 6h"
    },
    {
      "title" : " $BTC Bitcoin could hit 51K within hours.",
      "des": "#BitcoinETFs could be approved anytime now. Prio to approval, they might shake the entire market with sharp movements. Be cautious, stick to spot trading! The trend is upward, stay calm stick to spot",
      "img": `${newscard4}`,
      "icon": `${icon1}`,
      "iconname" : "Soham",
      "social" :"@soham . 6h"
    },
    {
      "title" : " $BTC Bitcoin could hit 51K within hours.",
      "des": "#BitcoinETFs could be approved anytime now. Prio to approval, they might shake the entire market with sharp movements. Be cautious, stick to spot trading! The trend is upward, stay calm stick to spot",
      "img": `${newscard5}`,
      "icon": `${icon2}`,
      "iconname" : "Darrell",
      "social" :"@darrell . 6h"
    },
    {
      "title" : "$BTC Bitcoin could hit 51K within hours.",
      "des": "#BitcoinETFs could be approved anytime now. Prio to approval, they might shake the entire market with sharp movements. Be cautious, stick to spot trading! The trend is upward, stay calm stick to spot",
      "img": `${newscard6}`,
      "icon": `${icon3}`,
      "iconname" : "Shane",
      "social" :"@shane . 6h"
    }
    
  ]
  const newscards2 = [
    {
      "title" : "$BTC Bitcoin could hit 51K within hours.",
      "des": "#BitcoinETFs could be approved anytime now. Prio to approval, they might shake the entire market with sharp movements. Be cautious, stick to spot trading! The trend is upward, stay calm stick to spot",
      "img": `${newscard1}`,
      "icon": `${icon1}`,
      "iconname" : "Soham",
      "social" :"@soham . 6h"
    },
    {
      "title" : " $BTC Bitcoin could hit 51K within hours.",
      "des": "#BitcoinETFs could be approved anytime now. Prio to approval, they might shake the entire market with sharp movements. Be cautious, stick to spot trading! The trend is upward, stay calm stick to spot",
      "img": `${newscard2}`,
      "icon": `${icon2}`,
      "iconname" : "Darrell",
      "social" :"@darrell . 6h"
    }
  ]
  return (
    <div className="news  w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="Top" title="Top" className="tab-btn text-[#6B7280] px-[30px] py-[10px] text-[17px] leading-[26px] font-normal ">
          <Card className="!border-none w-full card-card ">
            <CardBody className="bg-[#03060D] text-white border-none card-des !w-full !p-0 mt-4">
              <div className=" grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 lg:gap-[26px]">
                {
                  newscards.map((item,idx)=><NewsCaed item={item} key={idx}/>)
                }
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Latest" title="Latest" className=" text-[#6B7280] px-[30px] py-[10px]">
        <Card className="!border-none w-full card-card ">
          <CardBody className="bg-[#03060D] text-white border-none card-des !w-full !p-0 mt-4">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-[26px]">
                {
                  newscards2.map((item,idx)=><NewsCaed item={item} key={idx}/>)
                }
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
