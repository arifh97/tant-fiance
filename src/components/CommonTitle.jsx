
export default function CommonTitle({ subTitle, title, des, className="" }) {
    return (
        <div className={`common-title ${className}`}>
            {subTitle ? (<span className="common-meta block mb-2 uppercase">{subTitle}</span>) : ""}
            <h2 className='mb-0 !leading-[108%] text-3xl md:text-4xl lg:text-[44px] font-semibold'>{title}</h2>
            {des ? (<p className="text-lg md:text-xl lg:text-[22px] leading-[160%] mt-4 md:mt-5 text-[#B2B0B9]">{des}</p>): ''}
        </div>
    )
}
