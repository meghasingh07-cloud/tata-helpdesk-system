import { useState } from "react";
import "./TicketModal.css";

function TicketModal({ ticket, onClose }) {
  const [status, setStatus] = useState(ticket.status);
  const [solution, setSolution] = useState("");

  const handleResolve = () => {
    alert("Ticket Updated Successfully!");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="ticket-modal">
        <div className="modal-header">
          <h2>Ticket Details</h2>

          <button onClick={onClose}>✖</button>
        </div>

        <div className="modal-body">

          <div className="row">
            <strong>Ticket ID</strong>
            <span>{ticket.id}</span>
          </div>

          <div className="row">
            <strong>Title</strong>
            <span>{ticket.title}</span>
          </div>

          <div className="row">
            <strong>Employee</strong>
            <span>{ticket.employee}</span>
          </div>

          <div className="row">
            <strong>Department</strong>
            <span>{ticket.department}</span>
          </div>

          <div className="row">
            <strong>Assigned Agent</strong>
            <span>{ticket.assignedTo}</span>
          </div>

          <div className="row">
            <strong>Created On</strong>
            <span>{ticket.created}</span>
          </div>

          <div className="row">
            <strong>Priority</strong>
            <span>{ticket.priority}</span>
          </div>

          <div className="row">
            <strong>Status</strong>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Open</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>
          </div>

          <div className="description-box">
            <strong>Description</strong>

            <p>{ticket.description}</p>
          </div>

          <div className="solution-box">
            <strong>Resolution / Notes</strong>

            <textarea
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="Enter troubleshooting steps or final solution..."
            />
          </div>

          <button
            className="resolve-btn"
            onClick={handleResolve}
          >
            Save Changes
          </button>

        </div>
      </div>
    </div>
  );
}

export default TicketModal;