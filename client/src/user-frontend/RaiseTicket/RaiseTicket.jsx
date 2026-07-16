import React, { useState } from "react";
import "./RaiseTicket.css";

function RaiseTicket() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !priority || !description) {
      alert("Please fill all the fields.");
      return;
    }

    console.log("Title:", title);
    console.log("Category:", category);
    console.log("Priority:", priority);
    console.log("Description:", description);

    alert("Ticket Raised Successfully!");
  };

  return (
    <div className="raise-ticket-container">
      <h2>Raise a Ticket</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Ticket Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Technical">Technical</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Network">Network</option>
          </select>
        </div>

        <div>
          <label>Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label>Description:</label>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Submit Ticket</button>

      </form>
    </div>
  );
}

export default RaiseTicket;