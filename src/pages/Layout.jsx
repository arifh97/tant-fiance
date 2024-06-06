import { useState } from 'react';
import Menu from '../components/Dashboard/Menu'
import Header from '../components/Dashboard/Header'
import MainContent from '../components/Dashboard/MainContent'

export default function Layout() {
  const [mobile,setMobile] = useState(false);
  const mobileMenu = () => {
      setMobile(!mobile)
  }
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
