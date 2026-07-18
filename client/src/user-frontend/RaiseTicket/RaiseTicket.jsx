import UserLayout from "../components/UserLayout";
import "./RaiseTicket.css";
import { useState } from "react";

function RaiseTicket() {
  const [ticket, setTicket] = useState({
    subject: "",
    category: "",
    priority: "",
    description: "",
  });

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Ticket Submitted Successfully!");

    console.log(ticket);
  };

  return (
    <UserLayout>
      <div className="raise-ticket">

        <h1>Raise a Support Ticket</h1>

        <form className="ticket-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Subject</label>

            <input
              type="text"
              name="subject"
              placeholder="Enter ticket subject"
              value={ticket.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Category</label>

              <select
                name="category"
                value={ticket.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option>Hardware</option>
                <option>Software</option>
                <option>Network</option>
                <option>Account</option>
              </select>
            </div>

            <div className="form-group">
              <label>Priority</label>

              <select
                name="priority"
                value={ticket.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              rows="6"
              name="description"
              placeholder="Describe your issue..."
              value={ticket.description}
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-btn">
            Submit Ticket
          </button>

        </form>

      </div>
    </UserLayout>
  );
}

export default RaiseTicket;