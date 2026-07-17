import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar";
import "./UserLayout.css";

function UserLayout({ children }) {
  return (
    <div className="user-layout">
      <UserSidebar />

      <div className="user-main">
        <UserNavbar />

        <div className="user-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default UserLayout;