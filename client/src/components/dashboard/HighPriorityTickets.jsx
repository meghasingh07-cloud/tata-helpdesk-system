import "./HighPriorityTickets.css";

const tickets = [
  { id: "TK101", title: "Printer not working", employee: "Aaritrika", priority: "High" },
  { id: "TK102", title: "Wrong billing amount", employee: "Aayushi", priority: "Medium" },
  { id: "TK103", title: "Dark mode resets", employee: "Aditya", priority: "Low"},
  { id: "TK104", title: "Network Down", employee: "Riya", priority: "Critical" },
];

function HighPriorityTickets() {
  return (
    <div className="priority-card">
      <h2>🚨 High Priority Tickets</h2>

      {tickets.map((ticket) => (
        <div className="priority-item" key={ticket.id}>
          <div>
            <h4>{ticket.title}</h4>
            <p>{ticket.id} • {ticket.employee}</p>
          </div>

          <span
            className={`priority-badge ${ticket.priority.toLowerCase()}`}
          >
            {ticket.priority}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HighPriorityTickets;