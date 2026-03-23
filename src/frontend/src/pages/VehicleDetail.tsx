import { ArrowLeft } from "lucide-react";
import {
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { generateSoHData, vehicles } from "../data/mockData";

interface Props {
  vehicleId: string;
  onNavigate: (path: string) => void;
}

function CircleProgress({ value, color }: { value: number; color: string }) {
  const r = 45;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg
      width={110}
      height={110}
      viewBox="0 0 110 110"
      aria-label={`${value}%`}
    >
      <title>{value}%</title>
      <circle
        cx={55}
        cy={55}
        r={r}
        fill="none"
        stroke="#21262D"
        strokeWidth={8}
      />
      <circle
        cx={55}
        cy={55}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={8}
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 55 55)"
      />
      <text
        x={55}
        y={55}
        textAnchor="middle"
        dy="0.3em"
        fill={color}
        fontSize={22}
        fontWeight={700}
      >
        {value}
      </text>
    </svg>
  );
}

const repairHistory = [
  {
    date: "2024-11-15",
    type: "Battery module replacement",
    cost: 8400,
    hub: "Dwarka Hub",
  },
  {
    date: "2024-09-02",
    type: "Motor controller recalibration",
    cost: 2200,
    hub: "Dwarka Hub",
  },
  {
    date: "2024-07-18",
    type: "Brake system overhaul",
    cost: 3100,
    hub: "Rohini Hub",
  },
  {
    date: "2024-05-30",
    type: "Firmware update + diagnostics",
    cost: 800,
    hub: "Dwarka Hub",
  },
  {
    date: "2024-03-12",
    type: "Suspension repair",
    cost: 4600,
    hub: "Lajpat Hub",
  },
  {
    date: "2024-01-05",
    type: "Tire replacement",
    cost: 1800,
    hub: "Dwarka Hub",
  },
];

const card: React.CSSProperties = {
  backgroundColor: "#161B22",
  border: "1px solid #30363D",
  borderRadius: 10,
  padding: "18px 20px",
  boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
};

export default function VehicleDetail({ vehicleId, onNavigate }: Props) {
  const vehicle = vehicles.find((v) => v.id === vehicleId) ?? vehicles[0];
  const sohData = generateSoHData(vehicle.bhi);
  const totalRepairCost = repairHistory.reduce((s, r) => s + r.cost, 0);

  const bhiColor =
    vehicle.bhi > 65 ? "#2ECC71" : vehicle.bhi >= 40 ? "#E67E22" : "#C0392B";
  const oesColor =
    vehicle.oes > 65 ? "#2ECC71" : vehicle.oes >= 40 ? "#E67E22" : "#C0392B";
  const rtColor =
    vehicle.repairTrajectory === "Low"
      ? "#2ECC71"
      : vehicle.repairTrajectory === "Medium"
        ? "#E67E22"
        : "#C0392B";

  return (
    <div style={{ padding: 24 }}>
      <button
        type="button"
        data-ocid="vehicle_detail.back_button"
        onClick={() => onNavigate("/vehicles")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          backgroundColor: "transparent",
          border: "1px solid #30363D",
          borderRadius: 6,
          color: "#8B949E",
          padding: "6px 12px",
          fontSize: 13,
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        <ArrowLeft size={14} /> Vehicle List
      </button>

      <div style={{ ...card, marginBottom: 16 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div style={{ color: "#2ECC71", fontSize: 26, fontWeight: 700 }}>
              {vehicle.id}
            </div>
            <div style={{ color: "#8B949E", fontSize: 14, marginTop: 4 }}>
              {vehicle.hub} · {vehicle.city}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#8B949E", fontSize: 12 }}>
              Deployment Date
            </div>
            <div style={{ color: "#E6EDF3", fontWeight: 600 }}>
              {vehicle.deploymentDate}
            </div>
            <div style={{ color: "#8B949E", fontSize: 12, marginTop: 4 }}>
              Days in Fleet
            </div>
            <div style={{ color: "#E6EDF3", fontWeight: 600 }}>
              {vehicle.daysInFleet} days
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 14,
          marginBottom: 16,
        }}
      >
        <div style={{ ...card, textAlign: "center" }}>
          <div style={{ color: "#8B949E", fontSize: 12, marginBottom: 12 }}>
            Battery Health Index
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircleProgress value={vehicle.bhi} color={bhiColor} />
          </div>
        </div>
        <div style={{ ...card, textAlign: "center" }}>
          <div style={{ color: "#8B949E", fontSize: 12, marginBottom: 12 }}>
            Operational Efficiency Score
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircleProgress value={vehicle.oes} color={oesColor} />
          </div>
        </div>
        <div
          style={{
            ...card,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ color: "#8B949E", fontSize: 12, marginBottom: 16 }}>
            Repair Trajectory
          </div>
          <span
            style={{
              backgroundColor: `${rtColor}22`,
              color: rtColor,
              padding: "8px 20px",
              borderRadius: 20,
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {vehicle.repairTrajectory} Risk
          </span>
        </div>
      </div>

      <div style={{ ...card, marginBottom: 16 }}>
        <div
          style={{
            color: "#E6EDF3",
            fontWeight: 600,
            fontSize: 14,
            marginBottom: 16,
          }}
        >
          Battery State of Health — 12 Month History + 90 Day Forecast
        </div>
        <div style={{ height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={sohData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#21262D" />
              <XAxis
                dataKey="month"
                tick={{ fill: "#8B949E", fontSize: 11 }}
                axisLine={{ stroke: "#30363D" }}
                tickLine={false}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fill: "#8B949E", fontSize: 11 }}
                axisLine={{ stroke: "#30363D" }}
                tickLine={false}
                unit="%"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#161B22",
                  border: "1px solid #30363D",
                  borderRadius: 8,
                }}
                labelStyle={{ color: "#E6EDF3" }}
                formatter={(v: number, name: string) => [
                  `${v}%`,
                  name === "actual" ? "Actual SoH" : "Projected SoH",
                ]}
              />
              <Legend
                formatter={(v) => (
                  <span style={{ color: "#8B949E", fontSize: 11 }}>
                    {v === "actual" ? "Actual SoH" : "Projected SoH"}
                  </span>
                )}
              />
              <ReferenceLine
                y={65}
                stroke="#C0392B"
                strokeDasharray="4 4"
                label={{
                  value: "Track B threshold (65%)",
                  fill: "#C0392B",
                  fontSize: 10,
                  position: "right",
                }}
              />
              <ReferenceLine
                y={40}
                stroke="#E67E22"
                strokeDasharray="4 4"
                label={{
                  value: "Track C threshold (40%)",
                  fill: "#E67E22",
                  fontSize: 10,
                  position: "right",
                }}
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#2ECC71"
                strokeWidth={2}
                dot={false}
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="projected"
                stroke="#5DADE2"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                connectNulls={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
          marginBottom: 16,
        }}
      >
        <div style={{ ...card, borderLeft: "3px solid #2ECC71" }}>
          <div
            style={{
              color: "#E6EDF3",
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 14,
            }}
          >
            EOL Prediction
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <div>
              <div style={{ color: "#8B949E", fontSize: 11, marginBottom: 2 }}>
                Predicted EOL Date
              </div>
              <div style={{ color: "#E6EDF3", fontWeight: 600 }}>
                March 28, 2025
              </div>
            </div>
            <div>
              <div style={{ color: "#8B949E", fontSize: 11, marginBottom: 2 }}>
                Confidence Range
              </div>
              <div style={{ color: "#E6EDF3", fontWeight: 600, fontSize: 12 }}>
                Mar 15 – Apr 2, 2025
              </div>
            </div>
            <div>
              <div style={{ color: "#8B949E", fontSize: 11, marginBottom: 2 }}>
                Recommended Track
              </div>
              <div style={{ color: "#3B82F6", fontWeight: 600 }}>
                Track B — Component Harvest
              </div>
            </div>
            <div>
              <div style={{ color: "#8B949E", fontSize: 11, marginBottom: 2 }}>
                Predicted Recovery
              </div>
              <div style={{ color: "#2ECC71", fontWeight: 700, fontSize: 16 }}>
                ₹4,200
              </div>
            </div>
          </div>
        </div>

        <div style={card}>
          <div
            style={{
              color: "#E6EDF3",
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 14,
            }}
          >
            Trip Stats — Last 30 Days
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {[
              { label: "Total Trips", value: "284", color: "#E6EDF3" },
              { label: "Avg Range / Charge", value: "61 km", color: "#E6EDF3" },
              {
                label: "Motor Efficiency",
                value: "8.4 kWh/100km",
                color: "#E6EDF3",
              },
              { label: "Fault Codes Thrown", value: "3", color: "#C0392B" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  backgroundColor: "#0D1117",
                  borderRadius: 8,
                  padding: "12px 14px",
                }}
              >
                <div
                  style={{ color: "#8B949E", fontSize: 11, marginBottom: 4 }}
                >
                  {s.label}
                </div>
                <div style={{ color: s.color, fontSize: 20, fontWeight: 700 }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={card}>
        <div
          style={{
            color: "#E6EDF3",
            fontWeight: 600,
            fontSize: 14,
            marginBottom: 14,
          }}
        >
          Repair History
        </div>
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #30363D" }}>
              {["Date", "Repair Type", "Cost", "Hub"].map((h) => (
                <th
                  key={h}
                  style={{
                    color: "#8B949E",
                    fontWeight: 500,
                    padding: "6px 10px",
                    textAlign: "left",
                    fontSize: 12,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {repairHistory.map((r) => (
              <tr key={r.date} style={{ borderBottom: "1px solid #21262D" }}>
                <td style={{ padding: "10px", color: "#8B949E" }}>{r.date}</td>
                <td style={{ padding: "10px", color: "#E6EDF3" }}>{r.type}</td>
                <td
                  style={{ padding: "10px", color: "#E6EDF3", fontWeight: 500 }}
                >
                  ₹{r.cost.toLocaleString()}
                </td>
                <td style={{ padding: "10px", color: "#8B949E" }}>{r.hub}</td>
              </tr>
            ))}
            <tr
              style={{
                borderTop: "2px solid #30363D",
                backgroundColor: "rgba(46,204,113,0.05)",
              }}
            >
              <td
                colSpan={2}
                style={{ padding: "10px", color: "#E6EDF3", fontWeight: 600 }}
              >
                Total
              </td>
              <td
                style={{ padding: "10px", color: "#2ECC71", fontWeight: 700 }}
              >
                ₹{totalRepairCost.toLocaleString()}
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
