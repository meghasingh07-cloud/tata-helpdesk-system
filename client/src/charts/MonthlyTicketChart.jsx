import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import "./MonthlyTicketChart.css";
    const data = [
        { month: "Jan", tickets: 25 },
        { month: "Feb", tickets: 40 },
        { month: "Mar", tickets: 30 },
        { month: "Apr", tickets: 52 },
        { month: "May", tickets: 44 },
        { month: "Jun", tickets: 63 },
    ];

    function MonthlyTicketChart() {
    return (
        <div className="chart-card">

        <h2>Monthly Tickets</h2>
        <ResponsiveContainer width="100%" height={300}>

            <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
                dataKey="tickets"
                fill="#2563eb"
                radius={[8,8,0,0]}
            />
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
    }
export default MonthlyTicketChart;