import { motion } from "framer-motion"
export default function CommonTitle({ subTitle, title, des, className = "" }) {
    return (
        <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: .5, delay: 0 } }}
            viewport={{ once: true, amount: 0 }}
            className={`common-title ${className}`}>
            {subTitle ? (<span className="common-meta block mb-2 uppercase">{subTitle}</span>) : ""}
            <h2 className='mb-0 !leading-[145%] text-3xl md:text-4xl lg:text-[44px] font-semibold'>{title}</h2>
            {des ? (<p className="text-base md:text-xl lg:text-[22px] !leading-[160%] mt-2 md:mt-5 text-[#B2B0B9]">{des}</p>) : ''}
        </motion.div>
    )
}
