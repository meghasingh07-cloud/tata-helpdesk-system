import "./NotificationPanel.css";

const notifications = [
  {
    id: 1,
    title: "New Ticket Created",
    message: "Rahul created Ticket TK145",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Ticket Assigned",
    message: "Network issue assigned to Amit",
    time: "15 min ago",
  },
  {
    id: 3,
    title: "Ticket Resolved",
    message: "Printer issue resolved successfully",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Server Alert",
    message: "Database CPU usage exceeded 90%",
    time: "Today",
  },
];

function NotificationPanel() {
  return (
    <div className="notification-panel">
      <h3>Notifications</h3>

      {notifications.map((item) => (
        <div className="notification-item" key={item.id}>
          <div className="notification-dot"></div>

          <div className="notification-content">
            <h4>{item.title}</h4>
            <p>{item.message}</p>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotificationPanel;