
import { Outlet } from 'react-router-dom'

export default function MainContent() {
  return (
    <div className="dashboard-main p-5 md:p-7 lg:p-9 overflow-auto">
      <Outlet />
    </div>
  )
}
