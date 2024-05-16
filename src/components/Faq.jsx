import CommonTitle from "./CommonTitle"
import { Container, Col } from './CAllComponent'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaAngleDown } from "react-icons/fa6";

export default function Faq() {
  const faqs = [
    {
      title: `What is Tant Finance?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `What is the Tant Finance presale token?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `When will Tant Finance launch?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `How can I participate in Tant Finance tokens?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `When can I apply for my Virtual crypto debit card?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `When can I apply for my Physical Crypto debit Card?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `What is the minimum investment required to participate in the Tant Finance presale token event?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `Can I stake Tant Finance tokens?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `Does Tant Finance offer a crypto debit card?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `When will I receive my pre tokens?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
    {
      title: `When will the Crypto currency exchange launch?`,
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae aperiam sed natus reiciendis aut sapiente corrupti, doloremque quia? Obcaecati?`
    },
  ]

  return (
    <div className="common-padding faq">
      <Container>
        <Col className="w-full text-center">
          <CommonTitle className="mb-7 md:mb-10" subTitle='FREQUENTLY ASKED QUESTIONS' title='Frequently asked Questions' />
        </Col>
        <Col className="mx-auto w-full lg:w-10/12">
          <div className="lg:px-8">
            <Accordion 
            variant="splitted"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
            >
              {faqs.map((item, index) => (
                <AccordionItem className="!bg-[#0C0C0D] faq-item !p-6" key={index} aria-label={index + 1} title={item.title} indicator={<FaAngleDown />}>
                  {item.des}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Col>
      </Container>
    </div>
  )
}
