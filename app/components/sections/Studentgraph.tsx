"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { year: "0", admitted: 0, dropped: 0 },
  { year: "2022", admitted: 60000, dropped: 67815 },
  { year: "2023", admitted: 60000, dropped: 80643 },
  { year: "2024", admitted: 60000, dropped: 92273 },
  { year: "2025", admitted: 60000, dropped: 113291 },
];

export default function StudentGraph() {
  return (
    <div className="w-full h-[350px] bg-white p-4 rounded-xl shadow-lg animate-in fade-in duration-700">
      <h3 className="text-center font-semibold text-primary mb-4">
        Student Admission vs Dropout Trend
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="admitted"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ r: 4 }}
            isAnimationActive={true}
          />

          <Line
            type="monotone"
            dataKey="dropped"
            stroke="#ef4444"
            strokeWidth={3}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
