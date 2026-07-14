import "./SupportAgents.css";

const agents = [
  {
    id: 1,
    name: "Alex Johnson",
    status: "Online",
    tickets: 24,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Sarah Lee",
    status: "Busy",
    tickets: 31,
    rating: 4.8,
  },
  {
    id: 3,
    name: "John Smith",
    status: "Offline",
    tickets: 12,
    rating: 4.6,
  },
];

function SupportAgents() {
  return (
    <div className="agents-container">

      <div className="agents-header">
        <h2>Support Agents</h2>

        <button>Add Agent</button>
      </div>

      <div className="agents-grid">
        {agents.map((agent) => (
          <div className="agent-card" key={agent.id}>

            <div className="agent-avatar">
              {agent.name.charAt(0)}
            </div>

            <h3>{agent.name}</h3>

            <span className={`agent-status ${agent.status.toLowerCase()}`}>
              {agent.status}
            </span>

            <p>🎫 {agent.tickets} Tickets</p>

            <p>⭐ {agent.rating}</p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default SupportAgents;