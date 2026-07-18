import MainLayout from "../components/layout/MainLayout";

import StatCard from "../components/dashboard/StatCard";
import TicketStatusChart from "../components/charts/TicketStatusChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import HighPriorityTickets from "../components/dashboard/HighPriorityTickets";
import SupportAgents from "../components/dashboard/SupportAgents";
import MonthlyTicketChart from "../components/charts/MonthlyTicketChart";

import "./Dashboard.css";

function Dashboard() {
    return (
    <MainLayout>
      <h1>Support Dashboard</h1>
      <p>Welcome back! Here's an overview of your ticket management system.</p>

    {/* KPI Cards */}
      <div className="cards">
      <StatCard
        title="Total Tickets"
        value="154"
        icon="🎫"
        color="#2563eb"
      />

      <StatCard
        title="Open Tickets"
        value="29"
        icon="🟢"
        color="#16a34a"
      />

      <StatCard
        title="Closed Tickets"
        value="103"
        icon="✅"
        color="#0ea5e9"
      />

      <StatCard
        title="Pending Tickets"
        value="22"
        icon="⏳"
        color="#f59e0b"
        />
      </div>

      <div className="charts">
        <TicketStatusChart />
        <MonthlyTicketChart />
      </div>

      <div className="dashboard-bottom">
        <RecentActivity />
        <HighPriorityTickets />
      </div>

      <div className="dashboard-agents">
        <SupportAgents />
      </div>
    </MainLayout>
  );
}

export default Dashboard;