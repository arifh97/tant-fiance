
import { Outlet } from 'react-router-dom'

export default function MainContent() {
  return (
    <div className="dashboard-main p-5 md:p-7 xl:p-9 overflow-x-hidden">
      <Outlet />
    </div>
  )
}
