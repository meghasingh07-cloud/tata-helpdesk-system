import "./StatCard.css";

function StatCard({ title, value, icon, color }) {
  return (
    <div className="stat-card">
      <div className="stat-left">
        <p className="stat-title">{title}</p>
        <h2>{value}</h2>
      </div>

      <div
        className="stat-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
    </div>
  );
}

export default StatCard;