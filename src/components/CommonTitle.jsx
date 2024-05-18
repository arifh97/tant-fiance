import { motion } from "framer-motion"
export default function CommonTitle({ subTitle, title, des, className = "" }) {
    return (
        <div className={`common-title ${className}`}>
            {subTitle ? (<motion.span
                            initial={{ y: 100 }}
                            whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="common-meta block mb-2 uppercase">{subTitle}</motion.span>) : ""}
            <motion.h2
                    initial={{ y: 100 }}
                    whileInView={{ y: 0, transition: { duration: .5, delay: 0.15 } }}
                    viewport={{ once: true, amount: 0.8 }}
                    className='mb-0 !leading-[145%] text-3xl md:text-4xl lg:text-[44px] font-semibold'>{title}</motion.h2>
            {des ? (<motion.p
                            initial={{ y: 100 }}
                            whileInView={{ y: 0, transition: { duration: .5, delay: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="text-lg md:text-xl lg:text-[22px] !leading-[160%] mt-4 md:mt-5 text-[#B2B0B9]">{des}</motion.p>) : ''}
        </div>
    )
}
