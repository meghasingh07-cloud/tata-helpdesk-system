import UserLayout from "../components/UserLayout";
import "./Notification.css";

function Notification() {

  const notifications = [
    {
      id: 1,
      title: "Ticket #101 has been assigned.",
      time: "5 mins ago",
    },
    {
      id: 2,
      title: "Your ticket #099 has been resolved.",
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "Support team replied to Ticket #097.",
      time: "Yesterday",
    },
    {
      id: 4,
      title: "Password changed successfully.",
      time: "2 days ago",
    },
  ];

  return (
    <UserLayout>

      <div className="notification-page">

        <h1>Notifications</h1>

        <div className="notification-list">

          {notifications.map((item) => (

            <div className="notification-card" key={item.id}>

              <div className="notification-icon">
                🔔
              </div>

              <div className="notification-content">
                <h3>{item.title}</h3>
                <p>{item.time}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </UserLayout>
  );
}

export default Notification;