import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { alerts } from "../data/mockData";

const healthData = [
  { name: "Healthy (SoH > 80%)", value: 68, color: "#2ECC71" },
  { name: "Degrading (65-80%)", value: 19, color: "#E67E22" },
  { name: "Critical (<65%)", value: 13, color: "#C0392B" },
];

const eolPipeline = [
  {
    track: "A",
    label: "Second Life",
    vehicles: 12,
    avgDays: 8,
    recovery: "\u20b96.24L",
    color: "#2ECC71",
  },
  {
    track: "B",
    label: "Component Harvest",
    vehicles: 41,
    avgDays: 5,
    recovery: "\u20b97.79L",
    color: "#3B82F6",
  },
  {
    track: "C",
    label: "Certified Scrap",
    vehicles: 30,
    avgDays: 3,
    recovery: "\u20b93.9L",
    color: "#8B5CF6",
  },
];

const card: React.CSSProperties = {
  backgroundColor: "#161B22",
  border: "1px solid #30363D",
  borderRadius: 10,
  padding: "18px 20px",
  boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
};

export default function FleetOverview() {
  return (
    <div style={{ padding: 24 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
          marginBottom: 20,
        }}
      >
        <div style={card} data-ocid="fleet_overview.kpi.card">
          <div style={{ color: "#8B949E", fontSize: 12, marginBottom: 6 }}>
            Total Active Vehicles
          </div>
          <div style={{ color: "#E6EDF3", fontSize: 28, fontWeight: 700 }}>
            1,247
          </div>
        </div>
        <div style={card}>
          <div style={{ color: "#8B949E", fontSize: 12, marginBottom: 6 }}>
            Vehicles Flagged for EOL
          </div>
          <div style={{ color: "#E67E22", fontSize: 28, fontWeight: 700 }}>
            83
          </div>
        </div>
        <div style={card}>
          <div style={{ color: "#8B949E", fontSize: 12, marginBottom: 6 }}>
            Avg Fleet Battery Health
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ color: "#E6EDF3", fontSize: 28, fontWeight: 700 }}>
              74%
            </span>
            <span style={{ color: "#2ECC71", fontSize: 12 }}>&uarr; +1.2%</span>
          </div>
        </div>
        <div style={card}>
          <div style={{ color: "#8B949E", fontSize: 12, marginBottom: 6 }}>
            Projected Recovery This Month
          </div>
          <div style={{ color: "#2ECC71", fontSize: 28, fontWeight: 700 }}>
            &#8377;18.4L
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
          marginBottom: 20,
        }}
      >
        <div style={card}>
          <div
            style={{
              color: "#E6EDF3",
              fontWeight: 600,
              fontSize: 15,
              marginBottom: 16,
            }}
          >
            Fleet Health Distribution
          </div>
          <div style={{ height: 240, position: "relative" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={healthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                  stroke="none"
                >
                  {healthData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#161B22",
                    border: "1px solid #30363D",
                    borderRadius: 8,
                  }}
                  labelStyle={{ color: "#E6EDF3" }}
                  formatter={(v: number) => [`${v}%`]}
                />
                <Legend
                  formatter={(value) => (
                    <span style={{ color: "#8B949E", fontSize: 12 }}>
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -70%)",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <div style={{ color: "#8B949E", fontSize: 11 }}>Fleet Health</div>
            </div>
          </div>
        </div>

        <div style={card}>
          <div
            style={{
              color: "#E6EDF3",
              fontWeight: 600,
              fontSize: 15,
              marginBottom: 16,
            }}
          >
            EOL Pipeline Summary
          </div>
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #30363D" }}>
                {[
                  "Track",
                  "Vehicles in Queue",
                  "Avg Days to Process",
                  "Expected Recovery",
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      color: "#8B949E",
                      fontWeight: 500,
                      padding: "6px 8px",
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
              {eolPipeline.map((row) => (
                <tr
                  key={row.track}
                  style={{ borderBottom: "1px solid #21262D" }}
                >
                  <td style={{ padding: "10px 8px" }}>
                    <span
                      style={{
                        backgroundColor: `${row.color}22`,
                        color: row.color,
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      Track {row.track} &mdash; {row.label}
                    </span>
                  </td>
                  <td
                    style={{
                      color: "#E6EDF3",
                      padding: "10px 8px",
                      fontWeight: 600,
                    }}
                  >
                    {row.vehicles}
                  </td>
                  <td style={{ color: "#8B949E", padding: "10px 8px" }}>
                    {row.avgDays} days
                  </td>
                  <td
                    style={{
                      color: "#2ECC71",
                      padding: "10px 8px",
                      fontWeight: 600,
                    }}
                  >
                    {row.recovery}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={card}>
        <div
          style={{
            color: "#E6EDF3",
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 14,
          }}
        >
          Recent Alerts
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {alerts.map((alert) => {
            const borderColor =
              alert.severity === "critical"
                ? "#C0392B"
                : alert.severity === "warning"
                  ? "#E67E22"
                  : "#2ECC71";
            const bgColor =
              alert.severity === "critical"
                ? "rgba(192,57,43,0.06)"
                : alert.severity === "warning"
                  ? "rgba(230,126,34,0.06)"
                  : "rgba(46,204,113,0.06)";
            return (
              <div
                key={alert.id}
                data-ocid={`alerts.item.${alert.id}`}
                style={{
                  backgroundColor: bgColor,
                  borderLeft: `3px solid ${borderColor}`,
                  borderRadius: "0 6px 6px 0",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span style={{ color: "#8B949E", fontSize: 12, minWidth: 80 }}>
                  {alert.time}
                </span>
                <span
                  style={{
                    color: "#2ECC71",
                    fontSize: 12,
                    fontWeight: 600,
                    minWidth: 110,
                  }}
                >
                  {alert.vehicleId}
                </span>
                <span
                  style={{
                    color: borderColor,
                    fontSize: 12,
                    backgroundColor: `${borderColor}22`,
                    padding: "2px 8px",
                    borderRadius: 4,
                    fontWeight: 500,
                  }}
                >
                  {alert.type}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
