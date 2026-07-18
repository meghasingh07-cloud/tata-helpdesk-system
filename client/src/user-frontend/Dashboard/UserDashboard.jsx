import UserLayout from "../components/UserLayout";
import "./UserDashboard.css";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
    const navigate = useNavigate();
  return (
    <UserLayout>
      <div className="user-dashboard">

        {/* Welcome */}
        <div className="welcome-section">
          <h1>Welcome Back 👋</h1>
          <p>Manage your support requests and track ticket progress.</p>
        </div>

        {/* Stats */}
        <div className="stats-grid">

          <div className="stat-card">
            <h3>Total Tickets</h3>
            <h2>12</h2>
          </div>

          <div className="stat-card">
            <h3>Open Tickets</h3>
            <h2>3</h2>
          </div>

          <div className="stat-card">
            <h3>Pending Tickets</h3>
            <h2>5</h2>
          </div>

          <div className="stat-card">
            <h3>Closed Tickets</h3>
            <h2>4</h2>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="dashboard-container">

          {/* Recent Tickets */}
          <div className="recent-tickets">

            <h2>Recent Tickets</h2>

            <table>

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Priority</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>#101</td>
                  <td>Printer Issue</td>
                  <td>
                    <span className="status open">Open</span>
                  </td>
                  <td>
                    <span className="priority high">High</span>
                  </td>
                </tr>

                <tr>
                  <td>#102</td>
                  <td>System Slow</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                  <td>
                    <span className="priority medium">Medium</span>
                  </td>
                </tr>

                <tr>
                  <td>#103</td>
                  <td>Email Error</td>
                  <td>
                    <span className="status closed">Closed</span>
                  </td>
                  <td>
                    <span className="priority low">Low</span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="quick-actions">

        <h2>Quick Actions</h2>

        <button onClick={() => navigate("/raise-ticket")}>
            + Raise Ticket
        </button>

        <button onClick={() => navigate("/my-tickets")}>
            📋 My Tickets
        </button>

        <button onClick={() => navigate("/user-profile")}>
            👤 Profile
        </button>

        </div>
        <div className="notifications-card">

        <h2>Recent Notifications</h2>

        <div className="notification-item">
            🔔 Your ticket #101 has been assigned.
        </div>

        <div className="notification-item">
            ✅ Ticket #098 has been resolved.
        </div>

        <div className="notification-item">
            📩 Support team replied to ticket #094.
        </div>

        </div>

        </div>

      </div>
    </UserLayout>
  );
}

export default UserDashboard;