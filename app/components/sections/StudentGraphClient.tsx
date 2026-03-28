"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { year: "2022", admitted: 60000, eligible: 67815 },
  { year: "2023", admitted: 60000, eligible: 80643 },
  { year: "2024", admitted: 60000, eligible: 92273 },
  { year: "2025", admitted: 60000, eligible: 113291 },
];

export default function StudentGraphClient() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#dbe5ec" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="admitted"
          name="Admitted locally"
          stroke="#22c55e"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="eligible"
          name="Eligible students"
          stroke="#d97706"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
