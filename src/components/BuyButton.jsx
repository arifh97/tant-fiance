import { Link } from "react-scroll"

export default function BuyButton({className}) {
    return (
        <Link to="banner-inner" 
        className={`${className} bg-primary cursor-pointer text-white rounded-[10px] text-base h-auto inline-block px-5 py-[10px] md:px-6 md:py-3 lg:px-10 lg:py-[16px]`} 
        spy={true} smooth={true} offset={-74} duration={600}>Buy TANT</Link>
    )
}
