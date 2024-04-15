import { Outlet } from "react-router-dom";

function MeetingLayout() {
  return (
    <div className="text-white">
      <Outlet />
    </div>
  )
}

export default MeetingLayout
