import MainLayout from "../components/layout/MainLayout";
import AgentTable from "../components/agents/AgentTable";

function Agents() {
  return (
    <MainLayout>

      <h1>Support Agents</h1>

      <p>Manage all support agents.</p>

      <AgentTable />

    </MainLayout>
  );
}

export default Agents;