import { Outlet } from 'react-router-dom'

import Menu from '../components/Dashboard/Menu'
import Header from '../components/Dashboard/Header'
import MainContent from '../components/Dashboard/MainContent'

export default function Layout() {
    
  return (
    <div className="dashboard flex flex-wrap">
        <div className="dashboard-left">
            <Menu />
        </div>
        <div className="dashboard-right">
          {/* Header */}
          <Header />
          {/* Content */}
          <MainContent />
        </div>
    </div>
  )
}
