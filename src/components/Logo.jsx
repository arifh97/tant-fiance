import logo from '../assets/img/logo.svg'
import { Link } from 'react-scroll';

export default function Logo() {
    return (
        <Link className="logo cursor-pointer" to="banner" spy={true} smooth={true} duration={700} offset={0}>
            <img src={logo} alt='logo' />
        </Link>
    )
}
