import "./navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import NotificationPanel from "../dashboard/NotificationPanel";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/tickets": "Tickets",
    "/agents": "Agents",
    "/reports": "Reports",
    "/settings": "Settings",
    "/profile": "Profile",
  };

  const pageTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="navbar">
      <div>
        <h2>{pageTitle}</h2>
        <p>Support Ticket Management System</p>
      </div>

      <div className="profile">
        <div
          className="bell"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          🔔
          <span className="notification-badge">4</span>

          {showNotifications && <NotificationPanel />}
        </div>

        <div className="user">
          <div className="avatar">A</div>

          <div>
            <h4>Admin</h4>
            <span>Support Team</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;