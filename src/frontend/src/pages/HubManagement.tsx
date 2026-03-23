import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eolForecastData, hubsByCity, triageData } from "../data/mockData";

const cities = ["Delhi NCR", "Bengaluru", "Hyderabad", "Pune", "Mumbai"];

const card: React.CSSProperties = {
  backgroundColor: "#161B22",
  border: "1px solid #30363D",
  borderRadius: 10,
  padding: "18px 20px",
  boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
};

function SLARiskBadge({ risk }: { risk: "Low" | "Medium" | "High" }) {
  const color =
    risk === "Low" ? "#2ECC71" : risk === "Medium" ? "#E67E22" : "#C0392B";
  return (
    <span
      style={{
        backgroundColor: `${color}22`,
        color,
        padding: "2px 8px",
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {risk}
    </span>
  );
}

export default function HubManagement() {
  const [activeCity, setActiveCity] = useState("Delhi NCR");
  const hubs = hubsByCity[activeCity] ?? [];

  return (
    <div style={{ padding: 24 }}>
      <div
        style={{
          display: "flex",
          gap: 0,
          marginBottom: 20,
          borderBottom: "1px solid #30363D",
        }}
      >
        {cities.map((c) => (
          <button
            key={c}
            type="button"
            data-ocid="hubs.city.tab"
            onClick={() => setActiveCity(c)}
            style={{
              background: "transparent",
              border: "none",
              borderBottom:
                c === activeCity
                  ? "2px solid #2ECC71"
                  : "2px solid transparent",
              color: c === activeCity ? "#2ECC71" : "#8B949E",
              padding: "10px 18px",
              fontSize: 13,
              fontWeight: c === activeCity ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.15s",
              marginBottom: -1,
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 14,
          marginBottom: 20,
        }}
      >
        {hubs.map((hub) => (
          <div key={hub.name} style={card} data-ocid="hubs.hub.card">
            <div
              style={{
                color: "#E6EDF3",
                fontWeight: 600,
                fontSize: 15,
                marginBottom: 12,
              }}
            >
              {hub.name}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              <div>
                <div style={{ color: "#8B949E", fontSize: 11 }}>
                  Total Vehicles
                </div>
                <div
                  style={{ color: "#E6EDF3", fontWeight: 700, fontSize: 20 }}
                >
                  {hub.totalVehicles}
                </div>
              </div>
              <div>
                <div style={{ color: "#8B949E", fontSize: 11 }}>
                  In EOL Queue
                </div>
                <div
                  style={{ color: "#E67E22", fontWeight: 700, fontSize: 20 }}
                >
                  {hub.eolQueue}
                </div>
              </div>
              <div>
                <div style={{ color: "#8B949E", fontSize: 11 }}>
                  Vendor Capacity
                </div>
                <div style={{ color: "#2ECC71", fontWeight: 600 }}>
                  {hub.vendorCapacity}%
                </div>
              </div>
              <div>
                <div style={{ color: "#8B949E", fontSize: 11 }}>
                  SLA Breach Risk
                </div>
                <SLARiskBadge risk={hub.slaRisk} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ ...card, marginBottom: 16 }}>
        <div
          style={{
            color: "#E6EDF3",
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 14,
          }}
        >
          72-Hour Triage Clock
        </div>
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #30363D" }}>
              {[
                "Vehicle ID",
                "Flagged At",
                "Hours Elapsed",
                "Hours Remaining",
                "Status",
              ].map((h) => (
                <th
                  key={h}
                  style={{
                    color: "#8B949E",
                    fontWeight: 500,
                    padding: "8px 12px",
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
            {triageData.map((row, i) => {
              const isEscalated = row.status === "ESCALATED";
              const progressColor =
                row.hoursRemaining > 36
                  ? "#2ECC71"
                  : row.hoursRemaining > 12
                    ? "#E67E22"
                    : "#C0392B";
              const progressPct = Math.max(0, (row.hoursRemaining / 72) * 100);
              return (
                <tr
                  key={row.vehicleId}
                  data-ocid={`hubs.triage.item.${i + 1}`}
                  style={{
                    borderBottom: "1px solid #21262D",
                    backgroundColor: isEscalated
                      ? "rgba(192,57,43,0.08)"
                      : "transparent",
                  }}
                >
                  <td
                    style={{
                      padding: "10px 12px",
                      color: "#2ECC71",
                      fontWeight: 600,
                    }}
                  >
                    {row.vehicleId}
                  </td>
                  <td style={{ padding: "10px 12px", color: "#8B949E" }}>
                    {row.flaggedAt}
                  </td>
                  <td style={{ padding: "10px 12px", color: "#E6EDF3" }}>
                    {row.hoursElapsed}h
                  </td>
                  <td style={{ padding: "10px 12px", minWidth: 160 }}>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <div
                        style={{
                          flex: 1,
                          height: 6,
                          backgroundColor: "#21262D",
                          borderRadius: 3,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${progressPct}%`,
                            height: "100%",
                            backgroundColor: progressColor,
                            borderRadius: 3,
                          }}
                        />
                      </div>
                      <span
                        style={{
                          color: isEscalated ? "#C0392B" : progressColor,
                          fontSize: 12,
                          fontWeight: 600,
                          minWidth: 70,
                        }}
                      >
                        {row.hoursRemaining === 0
                          ? "0h (BREACH)"
                          : `${row.hoursRemaining}h`}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    {isEscalated ? (
                      <span
                        style={{
                          backgroundColor: "rgba(192,57,43,0.2)",
                          color: "#C0392B",
                          padding: "2px 8px",
                          borderRadius: 4,
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        ESCALATED
                      </span>
                    ) : (
                      <span style={{ color: "#8B949E", fontSize: 12 }}>
                        In Triage
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
          Projected EOL Volume &mdash; Next 6 Weeks
        </div>
        <div style={{ height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={eolForecastData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#21262D" />
              <XAxis
                dataKey="week"
                tick={{ fill: "#8B949E", fontSize: 12 }}
                axisLine={{ stroke: "#30363D" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#8B949E", fontSize: 12 }}
                axisLine={{ stroke: "#30363D" }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#161B22",
                  border: "1px solid #30363D",
                  borderRadius: 8,
                }}
                labelStyle={{ color: "#E6EDF3" }}
              />
              <Legend
                formatter={(v) => (
                  <span style={{ color: "#8B949E", fontSize: 12 }}>
                    Track {v}
                  </span>
                )}
              />
              <Bar dataKey="A" stackId="a" fill="#2ECC71" name="A" />
              <Bar dataKey="B" stackId="a" fill="#3B82F6" name="B" />
              <Bar
                dataKey="C"
                stackId="a"
                fill="#8B5CF6"
                name="C"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
