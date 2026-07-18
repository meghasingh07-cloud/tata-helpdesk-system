import "./AgentTable.css";
import { useState } from "react";
import AddAgentModal from "./AddAgentModal";

const initialAgents = [
  {
    id: 1,
    name: "Anindita",
    email: "ani@company.com",
    status: "Online",
    tickets: 24,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Megha",
    email: "meg@company.com",
    status: "Busy",
    tickets: 31,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Vritika",
    email: "vri@company.com",
    status: "Offline",
    tickets: 12,
    rating: 4.6,
  },
];

function AgentTable() {
  const [agents, setAgents] = useState(initialAgents);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [editingAgent, setEditingAgent] = useState(null);

  // Add New Agent
  const addAgent = (newAgent) => {
    setAgents([...agents, newAgent]);
  };

  // Delete Agent
  const deleteAgent = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this agent?"
    );

    if (confirmDelete) {
      setAgents(agents.filter((agent) => agent.id !== id));
    }
  };

  // Search Filter
  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="agent-table-container">
      <div className="agent-header">
        <h2>Support Agents</h2>

        <button
          className="add-agent-btn"
          onClick={() => {
            setEditingAgent(null);
            setShowModal(true);
          }}
        >
          + Add Agent
        </button>
      </div>

      <div className="agent-search">
        <input
          type="text"
          placeholder="Search agents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="agent-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Tickets</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredAgents.map((agent) => (
            <tr key={agent.id}>
              <td>{agent.name}</td>

              <td>{agent.email}</td>

              <td>
                <span className={`status ${agent.status.toLowerCase()}`}>
                  {agent.status}
                </span>
              </td>

              <td>{agent.tickets}</td>

              <td>⭐ {agent.rating}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => {
                    setEditingAgent(agent);
                    setShowModal(true);
                  }}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteAgent(agent.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <AddAgentModal
          agent={editingAgent}
          onClose={() => {
            setShowModal(false);
            setEditingAgent(null);
          }}
          onAdd={(agent) => {
            if (editingAgent) {
              setAgents(
                agents.map((a) =>
                  a.id === editingAgent.id
                    ? { ...agent, id: editingAgent.id }
                    : a
                )
              );
            } else {
              addAgent({
                ...agent,
                id: Date.now(),
              });
            }

            setShowModal(false);
            setEditingAgent(null);
          }}
        />
      )}
    </div>
  );
}

export default AgentTable;