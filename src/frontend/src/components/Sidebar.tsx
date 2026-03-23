import { Building2, Gavel, LayoutDashboard, Truck } from "lucide-react";

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navItems = [
  { label: "Fleet Overview", icon: LayoutDashboard, path: "/" },
  { label: "Vehicle List", icon: Truck, path: "/vehicles" },
  { label: "Hub Management", icon: Building2, path: "/hubs" },
  { label: "ZAX Auction", icon: Gavel, path: "/auction" },
];

export default function Sidebar({ currentPath, onNavigate }: SidebarProps) {
  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <aside
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 240,
        height: "100vh",
        backgroundColor: "#161B22",
        borderRight: "1px solid #30363D",
        display: "flex",
        flexDirection: "column",
        zIndex: 50,
      }}
    >
      <div
        style={{ padding: "20px 20px 16px", borderBottom: "1px solid #30363D" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#2ECC71",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 18,
              color: "#0D1117",
              flexShrink: 0,
            }}
          >
            Z
          </div>
          <div>
            <div
              style={{
                color: "#E6EDF3",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.05em",
              }}
            >
              ZYPP ELECTRIC
            </div>
            <div style={{ color: "#8B949E", fontSize: 10 }}>
              Fleet Intelligence
            </div>
          </div>
        </div>
      </div>

      <nav style={{ flex: 1, padding: "12px 0" }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          const ocid = `nav.${item.label.toLowerCase().replace(/ /g, "_")}.link`;
          return (
            <button
              key={item.path}
              type="button"
              data-ocid={ocid}
              onClick={() => onNavigate(item.path)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 20px",
                background: active ? "rgba(46,204,113,0.08)" : "transparent",
                border: "none",
                borderLeft: active
                  ? "3px solid #2ECC71"
                  : "3px solid transparent",
                cursor: "pointer",
                color: active ? "#2ECC71" : "#8B949E",
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              <Icon size={16} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div style={{ padding: "16px 20px", borderTop: "1px solid #30363D" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            className="pulse-dot"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#2ECC71",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span style={{ color: "#2ECC71", fontSize: 11, fontWeight: 500 }}>
            Live
          </span>
        </div>
        <div style={{ color: "#8B949E", fontSize: 10, marginTop: 4 }}>
          Fleet Intelligence Engine v1.0
        </div>
      </div>
    </aside>
  );
}
