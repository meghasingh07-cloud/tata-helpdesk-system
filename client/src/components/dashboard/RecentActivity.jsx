import "./RecentActivity.css";

const activities = [
  {
    id: 1,
    user: "Riya",
    action: "created Ticket TK104",
    time: "10 mins ago",
    type: "create",
  },
  {
    id: 2,
    user: "Vritika",
    action: "resolved Ticket TK099",
    time: "25 mins ago",
    type: "resolved",
  },
  {
    id: 3,
    user: "Megha",
    action: "assigned Ticket TK110",
    time: "1 hour ago",
    type: "assign",
  },
  {
    id: 4,
    user: "Anindita",
    action: "updated Ticket TK120",
    time: "2 hours ago",
    type: "update",
  },
];

function RecentActivity() {
  return (
    <div className="activity-card">
      <h2>Recent Activity</h2>

      {activities.map((item) => (
        <div className="activity-item" key={item.id}>
          <div className={`activity-dot ${item.type}`}></div>

          <div className="activity-details">
            <p>
              <strong>{item.user}</strong> {item.action}
            </p>

            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;