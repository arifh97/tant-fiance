
import { Outlet } from 'react-router-dom'

export default function MainContent() {
  return (
    <div className="p-5 md:p-7 lg:p-9">
      <Outlet />
    </div>
  )
}
