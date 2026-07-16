import React, { useState } from "react";
import "./MyTickets.css";

function MyTickets() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const tickets = [
    {
      id: 101,
      title: "Login Issue",
      category: "Technical",
      priority: "High",
      status: "Open",
      description: "Unable to login to my account."
    },
    {
      id: 102,
      title: "Printer Not Working",
      category: "Hardware",
      priority: "Medium",
      status: "Pending",
      description: "Office printer is not printing."
    },
    {
      id: 103,
      title: "Software Installation",
      category: "Software",
      priority: "Low",
      status: "Closed",
      description: "Need Microsoft Office installed."
    }
  ];

  const filteredTickets = tickets.filter((ticket) => {
    return (
      ticket.title.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "" || ticket.status === statusFilter)
    );
  });

  return (
    <div className="mytickets-container">

      <h2>My Tickets</h2>

      <input
        type="text"
        placeholder="Search by Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Open">Open</option>
        <option value="Pending">Pending</option>
        <option value="Closed">Closed</option>
      </select>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.category}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.status}</td>

              <td>
                <button onClick={() => setSelectedTicket(ticket)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedTicket && (
        <div className="popup">
          <div className="popup-content">

            <h2>Ticket Details</h2>

            <p><strong>ID:</strong> {selectedTicket.id}</p>
            <p><strong>Title:</strong> {selectedTicket.title}</p>
            <p><strong>Category:</strong> {selectedTicket.category}</p>
            <p><strong>Priority:</strong> {selectedTicket.priority}</p>
            <p><strong>Status:</strong> {selectedTicket.status}</p>
            <p><strong>Description:</strong> {selectedTicket.description}</p>

            <button onClick={() => setSelectedTicket(null)}>
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default MyTickets;