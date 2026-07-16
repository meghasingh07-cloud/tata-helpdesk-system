import React from "react";
import "./Notification.css";

function Notifications() {
  const notifications = [
    {
      id: 1,
      message: "Your ticket #101 has been assigned to a support agent.",
      time: "2 hours ago",
    },
    {
      id: 2,
      message: "Your ticket #102 has been resolved.",
      time: "Yesterday",
    },
    {
      id: 3,
      message: "Your ticket #103 is currently pending.",
      time: "3 days ago",
    },
  ];

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>

      {notifications.map((notification) => (
        <div key={notification.id}>
          <p>{notification.message}</p>
          <small>{notification.time}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Notifications;