
export default function CommonTitle({ subTitle, title, className }) {
    return (
        <div className={`common-title ${className}`}>
            <span className="common-meta block mb-2">{subTitle}</span>
            <h2 className='mb-0 text-3xl md:text-4xl lg:text-[44px] leading-[105%]'>{title}</h2>
        </div>
    )
}
