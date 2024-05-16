
export default function CommonTitle({ subTitle, title, des, className }) {
    return (
        <div className={`common-title ${className}`}>
            {subTitle ? (<span className="common-meta block mb-2">{subTitle}</span>) : ""}
            <h2 className='mb-0 text-3xl md:text-4xl lg:text-[44px] leading-[105%]'>{title}</h2>
            {des ? (<p className="text-lg md:text-xl lg:text-[22px] leading-[160%] mt-4 md:mt-5 text-[#B2B0B9]">{des}</p>): ''}
        </div>
    )
}
