import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./TicketStatusChart.css";
const data = [
  {
    name: "Open",
    value: 29,
  },
  {
    name: "Closed",
    value: 103,
  },
  {
    name: "Pending",
    value: 22,
  },
];

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
];

function TicketStatusChart() {
  return (
    <div className="chart-card">
      <h2>Ticket Status</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {
              data.map((entry,index)=>(
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}


export default TicketStatusChart;