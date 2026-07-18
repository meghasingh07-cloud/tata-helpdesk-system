import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";

function MainLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <div className="dashboard-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;