import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from '../../assets/img/logo.svg'

export default function Menu({mobileMenu}) {
    const menu = [
        {
            icon: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.6665 15.7071C1.6665 14.4234 1.6665 13.7815 1.95545 13.31C2.11712 13.0462 2.33895 12.8244 2.60278 12.6627C3.07429 12.3738 3.71614 12.3738 4.99984 12.3738C6.28354 12.3738 6.92539 12.3738 7.39689 12.6627C7.66073 12.8244 7.88255 13.0462 8.04423 13.31C8.33317 13.7815 8.33317 14.4234 8.33317 15.7071C8.33317 16.9908 8.33317 17.6327 8.04423 18.1042C7.88255 18.368 7.66073 18.5899 7.39689 18.7515C6.92539 19.0404 6.28354 19.0404 4.99984 19.0404C3.71614 19.0404 3.07429 19.0404 2.60278 18.7515C2.33895 18.5899 2.11712 18.368 1.95545 18.1042C1.6665 17.6327 1.6665 16.9908 1.6665 15.7071Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M11.6665 15.7071C11.6665 14.4234 11.6665 13.7815 11.9554 13.31C12.1171 13.0462 12.3389 12.8244 12.6028 12.6627C13.0743 12.3738 13.7162 12.3738 14.9998 12.3738C16.2835 12.3738 16.9254 12.3738 17.3969 12.6627C17.6608 12.8244 17.8826 13.0462 18.0443 13.31C18.3332 13.7815 18.3332 14.4234 18.3332 15.7071C18.3332 16.9908 18.3332 17.6327 18.0443 18.1042C17.8826 18.368 17.6608 18.5899 17.3969 18.7515C16.9254 19.0404 16.2835 19.0404 14.9998 19.0404C13.7162 19.0404 13.0743 19.0404 12.6028 18.7515C12.3389 18.5899 12.1171 18.368 11.9554 18.1042C11.6665 17.6327 11.6665 16.9908 11.6665 15.7071Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M1.6665 5.70711C1.6665 4.42341 1.6665 3.78156 1.95545 3.31005C2.11712 3.04622 2.33895 2.8244 2.60278 2.66272C3.07429 2.37378 3.71614 2.37378 4.99984 2.37378C6.28354 2.37378 6.92539 2.37378 7.39689 2.66272C7.66073 2.8244 7.88255 3.04622 8.04423 3.31005C8.33317 3.78156 8.33317 4.42341 8.33317 5.70711C8.33317 6.99081 8.33317 7.63266 8.04423 8.10417C7.88255 8.368 7.66073 8.58983 7.39689 8.7515C6.92539 9.04045 6.28354 9.04045 4.99984 9.04045C3.71614 9.04045 3.07429 9.04045 2.60278 8.7515C2.33895 8.58983 2.11712 8.368 1.95545 8.10417C1.6665 7.63266 1.6665 6.99081 1.6665 5.70711Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M11.6665 5.70711C11.6665 4.42341 11.6665 3.78156 11.9554 3.31005C12.1171 3.04622 12.3389 2.8244 12.6028 2.66272C13.0743 2.37378 13.7162 2.37378 14.9998 2.37378C16.2835 2.37378 16.9254 2.37378 17.3969 2.66272C17.6608 2.8244 17.8826 3.04622 18.0443 3.31005C18.3332 3.78156 18.3332 4.42341 18.3332 5.70711C18.3332 6.99081 18.3332 7.63266 18.0443 8.10417C17.8826 8.368 17.6608 8.58983 17.3969 8.7515C16.9254 9.04045 16.2835 9.04045 14.9998 9.04045C13.7162 9.04045 13.0743 9.04045 12.6028 8.7515C12.3389 8.58983 12.1171 8.368 11.9554 8.10417C11.6665 7.63266 11.6665 6.99081 11.6665 5.70711Z" stroke="currentColor" stroke-width="1.5"/>
            </svg>`,
            name: 'Dashboard',
            url: '/dashboard'
        },
        {
            icon: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.6665 10.7072C1.6665 7.75929 1.6665 6.28534 2.54384 5.30128C2.68416 5.14389 2.83882 4.99832 3.00605 4.86625C4.05161 4.04053 5.61769 4.04053 8.74984 4.04053H11.2498C14.382 4.04053 15.9481 4.04053 16.9936 4.86625C17.1608 4.99832 17.3155 5.14389 17.4558 5.30128C18.3332 6.28534 18.3332 7.75929 18.3332 10.7072C18.3332 13.6551 18.3332 15.129 17.4558 16.1131C17.3155 16.2705 17.1608 16.416 16.9936 16.5481C15.9481 17.3739 14.382 17.3739 11.2498 17.3739H8.74984C5.61769 17.3739 4.05161 17.3739 3.00605 16.5481C2.83882 16.416 2.68416 16.2705 2.54384 16.1131C1.6665 15.129 1.6665 13.6551 1.6665 10.7072Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.3335 14.0405H9.5835" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.0835 14.0405H15.0002" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.6665 8.20715H18.3332" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>`,
            name: 'Card',
            url: '/card'
        },
        {
            icon: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1472 16.9572C16.1681 15.6135 17.5 13.3159 17.5 10.7072C17.5 6.56502 14.1422 3.20715 10 3.20715C9.42717 3.20715 8.86933 3.27137 8.33333 3.393M14.1472 16.9572V14.0405M14.1472 16.9572H17.0833M5.83333 4.47011C3.82336 5.81555 2.5 8.1068 2.5 10.7072C2.5 14.8493 5.85787 18.2072 10 18.2072C10.5728 18.2072 11.1307 18.1429 11.6667 18.0213M5.83333 4.47011V7.37382M5.83333 4.47011H2.91667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
            name: 'Dex',
            url: '/dex'
        },
        {
            icon: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9998 13.2072V8.20715C14.9998 5.85013 14.9998 4.67162 14.2676 3.93939C13.5353 3.20715 12.3568 3.20715 9.99984 3.20715H6.6665C4.30948 3.20715 3.13097 3.20715 2.39874 3.93939C1.6665 4.67162 1.6665 5.85013 1.6665 8.20715V13.2072C1.6665 15.5642 1.6665 16.7427 2.39874 17.4749C3.13097 18.2072 4.30948 18.2072 6.6665 18.2072H16.6665" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 7.37378H11.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 10.7072H11.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 14.0405H8.33333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 7.37378H15.8333C17.0118 7.37378 17.6011 7.37378 17.9672 7.7399C18.3333 8.10601 18.3333 8.69527 18.3333 9.87378V16.5404C18.3333 17.4609 17.5872 18.2071 16.6667 18.2071C15.7462 18.2071 15 17.4609 15 16.5404V7.37378Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
            name: 'News',
            url: '/news'
        }
    ];
    const route = useNavigate();
    const changeRoute = (e) => {
        route(e);
        mobileMenu()
    }
    return (
        <div className="dashboard-menu p-5 lg:py-9">
            <div className="mb-10 flex items-center justify-between">
                <Link to="/" className="dashboard-logo">
                    <img width={112} height={30} src={logo} alt="" />
                </Link>
                <button className="p-0 mb-0 bg-transparent border-0 lg:hidden" onClick={mobileMenu}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1193 15.2649L9.35986 9.50488M9.36048 15.2649L15.1199 9.50488" stroke="#6B7280" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.8401 12.3847C21.8401 7.08273 17.542 2.78467 12.2401 2.78467C6.9382 2.78467 2.64014 7.08273 2.64014 12.3847C2.64014 17.6866 6.9382 21.9847 12.2401 21.9847C17.542 21.9847 21.8401 17.6866 21.8401 12.3847Z" stroke="#6B7280" strokeWidth="1.44" />
                    </svg>
                </button>
            </div>
             {menu.map((item, index) => (
                 <NavLink 
                 className={`color-[#5D636D] flex items-center flex-wrap gap-4 xl:gap-2 2xl:gap-4 mb-4 bg-[#0C121B] border-1 border-[#141822] p-[10px] rounded-lg`} 
                 to={item.url} 
                 onClick={() => changeRoute(item.url)}
                 key={index} >
                    <span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.name}
                </NavLink>
            ))}
        </div>
    )
}
