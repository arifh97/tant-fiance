import { useEffect, useState } from 'react';
import Menu from '../components/Dashboard/Menu'
import Header from '../components/Dashboard/Header'
import MainContent from '../components/Dashboard/MainContent'
import {useLocation } from 'react-router-dom'

export default function Layout() {
  const [mobile,setMobile] = useState(false);
  const mobileMenu = () => {
      setMobile(!mobile)
  }
  const pathname = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
   },[pathname]);
  return (
    <div className="dashboard flex flex-wrap min-h-screen">
        <div className={`dashboard-left ${mobile?'menu-show':''}`}>
            <Menu mobileMenu={mobileMenu} />
        </div>
        <div className="dashboard-right">
          {/* Header */}
          <Header mobileMenu={mobileMenu} />
          {/* Content */}
          <MainContent />
        </div>
    </div>
  )
}
