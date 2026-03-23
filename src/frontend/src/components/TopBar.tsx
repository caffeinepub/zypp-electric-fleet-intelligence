import { Bell, User } from "lucide-react";
import { useEffect, useState } from "react";

interface TopBarProps {
  pageTitle: string;
}

export default function TopBar({ pageTitle }: TopBarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 240,
        right: 0,
        height: 60,
        backgroundColor: "#161B22",
        borderBottom: "1px solid #30363D",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        zIndex: 40,
      }}
    >
      <div>
        <span style={{ color: "#2ECC71", fontWeight: 700, fontSize: 15 }}>
          ZYPP ELECTRIC
        </span>
        <span style={{ color: "#8B949E", fontSize: 15 }}> — </span>
        <span style={{ color: "#E6EDF3", fontWeight: 600, fontSize: 15 }}>
          {pageTitle}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              color: "#E6EDF3",
              fontSize: 14,
              fontWeight: 600,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {formatTime(time)}
          </div>
          <div style={{ color: "#8B949E", fontSize: 11 }}>
            {formatDate(time)}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Bell size={20} style={{ color: "#8B949E" }} />
          <span
            style={{
              position: "absolute",
              top: -6,
              right: -6,
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: "#C0392B",
              color: "#fff",
              fontSize: 9,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            3
          </span>
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "#1A5C38",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <User size={16} style={{ color: "#2ECC71" }} />
        </div>
      </div>
    </header>
  );
}
