    import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
    } from "recharts";

    import "./PriorityChart.css";

    const data = [
    { name: "High", value: 38 },
    { name: "Medium", value: 72 },
    { name: "Low", value: 44 },
    ];

    const COLORS = ["#ef4444", "#f59e0b", "#10b981"];

    function PriorityChart() {
    return (
        <div className="priority-card">
        <h2>Priority Distribution</h2>

        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={95}
                label
            >
                {data.map((entry, index) => (
                <Cell
                    key={index}
                    fill={COLORS[index]}
                />
                ))}
            </Pie>

            <Tooltip />
            <Legend />
            </PieChart>
        </ResponsiveContainer>
        </div>
    );
    }

    export default PriorityChart;