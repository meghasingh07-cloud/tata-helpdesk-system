import "./UserNavbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UserNavbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const text = search.toLowerCase();

      if (text.includes("ticket")) {
        navigate("/my-tickets");
      } else if (text.includes("raise")) {
        navigate("/raise-tickets");
      } else if (text.includes("profile")) {
        navigate("/user-profile");
      } else if (text.includes("notification")) {
        navigate("/notifications");
      } else if (text.includes("dashboard")) {
        navigate("/user-dashboard");
      } else {
        alert("No matching page found.");
      }
    }
  };

  return (
    <header className="user-navbar">

      <input
        className="search-box"
        type="text"
        placeholder="Search pages..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
      />

      <div
        className="user-info"
        onClick={() => navigate("/user-profile")}
        style={{ cursor: "pointer" }}
      >
        👤 User
      </div>

    </header>
  );
}

export default UserNavbar;