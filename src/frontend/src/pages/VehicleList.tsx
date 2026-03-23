import { useState } from "react";
import { type Vehicle, vehicles } from "../data/mockData";

interface Props {
  onNavigate: (path: string) => void;
}

function BHIBar({ value }: { value: number }) {
  const color = value > 65 ? "#2ECC71" : value >= 40 ? "#E67E22" : "#C0392B";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
            width: `${value}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: 3,
          }}
        />
      </div>
      <span style={{ color, fontSize: 12, fontWeight: 600, minWidth: 32 }}>
        {value}%
      </span>
    </div>
  );
}

function EolBadge({ days }: { days: number }) {
  const color = days < 30 ? "#C0392B" : days < 60 ? "#E67E22" : "#8B949E";
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
      {days}d
    </span>
  );
}

function TrackPill({ track }: { track: Vehicle["track"] }) {
  const config: Record<Vehicle["track"], { bg: string; color: string }> = {
    A: { bg: "rgba(46,204,113,0.15)", color: "#2ECC71" },
    B: { bg: "rgba(59,130,246,0.15)", color: "#3B82F6" },
    C: { bg: "rgba(139,92,246,0.15)", color: "#8B5CF6" },
    Active: { bg: "rgba(139,148,158,0.15)", color: "#8B949E" },
  };
  const { bg, color } = config[track];
  return (
    <span
      style={{
        backgroundColor: bg,
        color,
        padding: "2px 8px",
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {track === "Active" ? "Active" : `Track ${track}`}
    </span>
  );
}

function VehicleRow({
  v,
  idx,
  onNavigate,
}: { v: Vehicle; idx: number; onNavigate: (p: string) => void }) {
  const [hovered, setHovered] = useState(false);
  const path = `/vehicles/${v.id}`;
  return (
    <tr
      key={v.id}
      data-ocid={`vehicles.item.${idx + 1}`}
      onClick={() => onNavigate(path)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onNavigate(path);
      }}
      tabIndex={0}
      style={{
        borderBottom: "1px solid #21262D",
        cursor: "pointer",
        transition: "background 0.1s",
        backgroundColor: hovered ? "#1C2128" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <td style={{ padding: "12px 14px", color: "#2ECC71", fontWeight: 600 }}>
        {v.id}
      </td>
      <td style={{ padding: "12px 14px", color: "#E6EDF3" }}>{v.hub}</td>
      <td style={{ padding: "12px 14px", minWidth: 140 }}>
        <BHIBar value={v.bhi} />
      </td>
      <td style={{ padding: "12px 14px", color: "#E6EDF3", fontWeight: 500 }}>
        {v.oes}
      </td>
      <td style={{ padding: "12px 14px" }}>
        <span
          style={{
            color:
              v.repairTrajectory === "Low"
                ? "#2ECC71"
                : v.repairTrajectory === "Medium"
                  ? "#E67E22"
                  : "#C0392B",
            fontWeight: 500,
          }}
        >
          {v.repairTrajectory}
        </span>
      </td>
      <td style={{ padding: "12px 14px" }}>
        <EolBadge days={v.daysToEol} />
      </td>
      <td style={{ padding: "12px 14px" }}>
        <TrackPill track={v.track} />
      </td>
      <td style={{ padding: "12px 14px" }}>
        <button
          type="button"
          data-ocid={`vehicles.view_button.${idx + 1}`}
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(path);
          }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid #30363D",
            borderRadius: 5,
            color: "#E6EDF3",
            padding: "4px 12px",
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          View
        </button>
      </td>
    </tr>
  );
}

export default function VehicleList({ onNavigate }: Props) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [track, setTrack] = useState("All");
  const [health, setHealth] = useState("All");

  const filtered = vehicles.filter((v) => {
    const matchSearch =
      search === "" ||
      v.id.toLowerCase().includes(search.toLowerCase()) ||
      v.hub.toLowerCase().includes(search.toLowerCase());
    const matchCity = city === "All" || v.city === city;
    const matchTrack = track === "All" || v.track === track;
    const matchHealth =
      health === "All" ||
      (health === "Healthy" && v.bhi > 65) ||
      (health === "Degrading" && v.bhi >= 40 && v.bhi <= 65) ||
      (health === "Critical" && v.bhi < 40);
    return matchSearch && matchCity && matchTrack && matchHealth;
  });

  const selectStyle: React.CSSProperties = {
    backgroundColor: "#21262D",
    border: "1px solid #30363D",
    borderRadius: 6,
    color: "#E6EDF3",
    padding: "6px 10px",
    fontSize: 13,
    cursor: "pointer",
  };

  return (
    <div style={{ padding: 24 }}>
      <div
        data-ocid="vehicles.filter.panel"
        style={{
          backgroundColor: "#161B22",
          border: "1px solid #30363D",
          borderRadius: 10,
          padding: "16px 20px",
          marginBottom: 16,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <input
          data-ocid="vehicles.search_input"
          type="text"
          placeholder="Search Vehicle ID or Hub..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ ...selectStyle, flex: "1 1 200px", outline: "none" }}
        />
        <select
          data-ocid="vehicles.city.select"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={selectStyle}
        >
          {["All", "Delhi NCR", "Bengaluru", "Hyderabad", "Pune", "Mumbai"].map(
            (c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ),
          )}
        </select>
        <select
          data-ocid="vehicles.track.select"
          value={track}
          onChange={(e) => setTrack(e.target.value)}
          style={selectStyle}
        >
          {["All", "A", "B", "C", "Active"].map((t) => (
            <option key={t} value={t}>
              {t === "All"
                ? "All Tracks"
                : t === "Active"
                  ? "Active"
                  : `Track ${t}`}
            </option>
          ))}
        </select>
        <select
          data-ocid="vehicles.health.select"
          value={health}
          onChange={(e) => setHealth(e.target.value)}
          style={selectStyle}
        >
          {["All", "Healthy", "Degrading", "Critical"].map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          backgroundColor: "#161B22",
          border: "1px solid #30363D",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#0D1117",
                borderBottom: "1px solid #30363D",
              }}
            >
              {[
                "Vehicle ID",
                "Hub",
                "Battery Health Index",
                "Op. Efficiency Score",
                "Repair Trajectory",
                "Days to EOL",
                "Track",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  style={{
                    color: "#8B949E",
                    fontWeight: 500,
                    padding: "12px 14px",
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
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  data-ocid="vehicles.empty_state"
                  style={{ textAlign: "center", padding: 40, color: "#8B949E" }}
                >
                  No vehicles match this filter
                </td>
              </tr>
            ) : (
              filtered.map((v, idx) => (
                <VehicleRow
                  key={v.id}
                  v={v}
                  idx={idx}
                  onNavigate={onNavigate}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
