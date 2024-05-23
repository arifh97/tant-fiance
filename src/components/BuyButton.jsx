import { Link } from "react-scroll"

export default function BuyButton() {
    return (
        <Link to="banner" 
        className="bg-primary cursor-pointer text-white rounded-[10px] text-base h-auto inline-block px-5 py-3 md:px-6 md:py-3 lg:px-10 lg:py-[16px]" 
        spy={true} smooth={true} offset={0} duration={600}>Buy TANT</Link>
    )
}
