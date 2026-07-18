import "./AddAgentModal.css";
import { useState } from "react";
function AddAgentModal({ agent: editingAgent, onClose, onAdd }) {
  const [agent, setAgent] = useState(
    editingAgent || {
      name: "",
      email: "",
      status: "Online",
      tickets: 0,
      rating: 5.0,
    }
  );

  const handleChange = (e) => {
    setAgent({
      ...agent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!agent.name || !agent.email) {
      alert("Please fill all required fields");
      return;
    }

    onAdd(agent);
  };

  return (
    <div className="modal-overlay">
      <div className="agent-modal">
        <h2>
          {editingAgent ? "Edit Support Agent" : "Add Support Agent"}
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Agent Name"
          value={agent.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={agent.email}
          onChange={handleChange}
        />

        <select
          name="status"
          value={agent.status}
          onChange={handleChange}
        >
          <option value="Online">Online</option>
          <option value="Busy">Busy</option>
          <option value="Offline">Offline</option>
        </select>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="save-btn" onClick={handleSubmit}>
            {editingAgent ? "Update Agent" : "Save Agent"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAgentModal;