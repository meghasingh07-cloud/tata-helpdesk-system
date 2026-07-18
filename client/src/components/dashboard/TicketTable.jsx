  import "./TicketTable.css";
  import { useState } from "react";
  import TicketModal from "./TicketModal";

  const tickets = [
    {
      id: "TK101",
      title: "Printer not working",
      employee: "Aaritrika",
      department: "Finance",
      assignedTo: "Anindita",
      created: "12 Jul 2026",
      priority: "High",
      status: "Open",
      description:
        "The printer on Floor 3 displays a paper jam error despite no paper being stuck. Multiple restart attempts failed. Unable to print invoices.",
    },

    {
      id: "TK102",
      title: "Wrong billing amount",
      employee: "Aayushi",
      department: "Accounts",
      assignedTo: "Megha",
      created: "11 Jul 2026",
      priority: "Medium",
      status: "Pending",
      description:
        "The billing portal shows an incorrect invoice amount after GST calculation. The generated invoice total does not match the expected value.",
    },

    {
      id: "TK103",
      title: "Dark mode resets",
      employee: "Aditya",
      department: "IT",
      assignedTo: "Vritika",
      created: "10 Jul 2026",
      priority: "Low",
      status: "Closed",
      description:
        "The application automatically switches back to Light Mode whenever the browser is refreshed or reopened.",
    },

    {
      id: "TK104",
      title: "Network Down",
      employee: "Riya",
      department: "HR",
      assignedTo: "Anindita",
      created: "13 Jul 2026",
      priority: "High",
      status: "Open",
      description:
        "The workstation cannot connect to the office LAN. Internet, shared folders and company applications are inaccessible.",
    },
  ];

  function TicketTable() {
    const [selectedTicket, setSelectedTicket] = useState(null);

    return (
      <div className="ticket-table-container">
        <div className="table-header">
          <h2>Recent Tickets</h2>
        </div>

        <table className="ticket-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Employee</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>

                <td>{ticket.title}</td>

                <td>{ticket.employee}</td>

                <td>
                  <span className={`priority ${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                </td>

                <td>
                  <span className={`status ${ticket.status.toLowerCase()}`}>
                    {ticket.status}
                  </span>
                </td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedTicket && (
          <TicketModal
            ticket={selectedTicket}
            onClose={() => setSelectedTicket(null)}
          />
        )}
      </div>
    );
  }

  export default TicketTable;