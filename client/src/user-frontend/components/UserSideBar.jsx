import { NavLink, useNavigate } from "react-router-dom";
import "./UserSidebar.css";

function UserSidebar() {

  const navigate = useNavigate();

  return (
    <aside className="user-sidebar">

      <h2 className="logo">HelpDesk</h2>

      <nav>

        <NavLink to="/user-dashboard">Dashboard</NavLink>

        <NavLink to="/raise-ticket">Raise Ticket</NavLink>

        <NavLink to="/my-tickets">My Tickets</NavLink>

        <NavLink to="/notifications">Notifications</NavLink>

        <NavLink to="/user-profile">Profile</NavLink>

      </nav>

      <button
        className="logout-btn"
        onClick={() => navigate("/login")}
      >
        Logout
      </button>

    </aside>
  );
}

export default UserSidebar;