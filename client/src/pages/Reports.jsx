import MainLayout from "../components/layout/MainLayout";

import StatCard from "../components/dashboard/StatCard";
import MonthlyChart from "../components/charts/MonthlyChart";
import TicketStatusChart from "../components/charts/TicketStatusChart";
import PriorityChart from "../components/charts/PriorityChart";
import ReportSummary from "../components/reports/ReportSummary";

import "./Reports.css";

function Reports() {
  return (
    <MainLayout>

      <h1>Reports</h1>
      <p>View reports and analytics.</p>

      <div className="cards">
        <StatCard title="Total Tickets" value="154" icon="🎫" color="#2563eb" />
        <StatCard title="Resolved" value="103" icon="✅" color="#16a34a" />
        <StatCard title="Pending" value="22" icon="⏳" color="#f59e0b" />
        <StatCard title="Rating" value="4.8" icon="⭐" color="#0ea5e9" />
      </div>

      <div className="report-chart">
        <MonthlyChart />
      </div>

      <div className="report-grid">
        <TicketStatusChart />
        <PriorityChart />
      </div>

      <ReportSummary />

    </MainLayout>
  );
}

export default Reports;