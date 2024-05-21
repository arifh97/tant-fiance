import CommonTitle from "./CommonTitle"
import { Container, Col } from './CAllComponent'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaAngleDown } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Faq() {
  const faqs = [
    {
      title: `What is Tant Finance?`,
      des: `Tant Finance is a decentralised finance platform that aims to change the way people use financial services on the blockchain.
      `
    },
    {
      title: `What is the Tant Finance presale token?`,
      des: `Tant Finance presale token is a digital asset offered to early investors during the presale stage of the project, providing them with an opportunity to acquire tokens at a discounted price before the public sale.
      `
    },
    {
      title: `When will Tant Finance launch?`,
      des: `Tant Finance tokens can be acquired on two major exchanges.
      `
    },
    {
      title: `How can I participate in Tant Finance tokens?`,
      des: `To participate in buying Tant Finance tokens, you can visit our how to buy link and follow the instructions provided on the token pre sale page. You'll find all the necessary details and steps to purchase Tant Finance tokens securely.`
    },
    {
      title: `When can I apply for my Virtual crypto debit card?`,
      des: `Once phase two has conclude you will be able to apply for your Virtual crypto debit card.`
    },
    {
      title: `When can I apply for my Physical Crypto debit Card?`,
      des: `Once Tant finance pre sale stage 10 has been completed, 3 months later we will launch the physical Crypto debit card.`
    },
    {
      title: `What is the minimum investment required to participate in the Tant Finance presale token event?`,
      des: `he minimum investment requirement for participation in the Tant Finance presale is $50`
    },
    {
      title: `Can I stake Tant Finance tokens?`,
      des: `Yes, Tant Finance may offer staking opportunities where token holders can lock up their tokens to support the network's security, earn rewards, or participate in governance decisions.`
    },
    {
      title: `Does Tant Finance offer a crypto debit card?`,
      des: `Yes, Tant Finance is in the process of offering crypto debit card that allows users to spend their cryptocurrency holdings  worldwide, offering convenience and flexibility in managing digital assets.`
    },
    {
      title: `When will I receive my pre tokens?`,
      des: `You will be able to claim tokens once the pre sale concludes at stage 10.`
    },
    {
      title: `When will the Crypto currency exchange launch?`,
      des: `Once the pre sale token has been completely sold out. 9 months later we will launch the Crypto currency exchange.`
    },
  ]

  return (
    <div className="common-padding-top faq relative z-[2]">
      <Container>
        <Col className="w-full text-center">
          <CommonTitle className="mb-7 md:mb-10" subTitle='FREQUENTLY ASKED QUESTIONS' title='Frequently asked Questions' />
        </Col>
        <Col className="mx-auto w-full lg:w-10/12">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
            viewport={{ once: true, amount: 0 }}
            className="lg:px-8">
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
                <AccordionItem className="!bg-[#0C0C0D] faq-item !px-4 !py-3 md:!p-6" key={index} aria-label={index + 1} title={item.title} indicator={<FaAngleDown />}>
                  {item.des}
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </Col>
      </Container>
    </div>
  )
}
