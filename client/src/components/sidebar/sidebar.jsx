import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>STMS</h2>
        <p>Support Panel</p>
      </div>

      <ul className="menu">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tickets"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tickets
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/agents"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Agents
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Reports
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Settings
          </NavLink>
        </li>
      </ul>

      <div className="logout">🚪 Logout</div>
    </div>
  );
}

export default Sidebar;