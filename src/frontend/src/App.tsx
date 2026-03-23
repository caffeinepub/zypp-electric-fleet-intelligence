import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import FleetOverview from "./pages/FleetOverview";
import HubManagement from "./pages/HubManagement";
import VehicleDetail from "./pages/VehicleDetail";
import VehicleList from "./pages/VehicleList";
import ZAXAuctionFeed from "./pages/ZAXAuctionFeed";

type RouteKey = "/" | "/vehicles" | "/vehicles/:id" | "/hubs" | "/auction";

function parsePath(path: string): { route: RouteKey; vehicleId?: string } {
  if (path === "/" || path === "") return { route: "/" };
  if (path === "/vehicles") return { route: "/vehicles" };
  if (path.startsWith("/vehicles/")) {
    return {
      route: "/vehicles/:id",
      vehicleId: path.replace("/vehicles/", ""),
    };
  }
  if (path === "/hubs") return { route: "/hubs" };
  if (path === "/auction") return { route: "/auction" };
  return { route: "/" };
}

const pageTitles: Record<string, string> = {
  "/": "Fleet Intelligence Dashboard",
  "/vehicles": "Vehicle List",
  "/vehicles/:id": "Vehicle Detail",
  "/hubs": "Hub Management",
  "/auction": "ZAX Auction Feed",
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash.replace("#", "") || "/";
    return hash;
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") || "/";
      setCurrentPath(hash);
    };
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
  };

  const { route, vehicleId } = parsePath(currentPath);
  const pageTitle = pageTitles[route] ?? "Fleet Intelligence Dashboard";

  const renderPage = () => {
    switch (route) {
      case "/":
        return <FleetOverview />;
      case "/vehicles":
        return <VehicleList onNavigate={navigate} />;
      case "/vehicles/:id":
        return (
          <VehicleDetail vehicleId={vehicleId ?? ""} onNavigate={navigate} />
        );
      case "/hubs":
        return <HubManagement />;
      case "/auction":
        return <ZAXAuctionFeed />;
      default:
        return <FleetOverview />;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0D1117",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Sidebar currentPath={currentPath} onNavigate={navigate} />
      <TopBar pageTitle={pageTitle} />
      <main
        style={{
          marginLeft: 240,
          marginTop: 60,
          minHeight: "calc(100vh - 60px)",
          overflowY: "auto",
        }}
      >
        {renderPage()}
        {/* Footer */}
        <footer
          style={{
            padding: "16px 24px",
            borderTop: "1px solid #30363D",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#8B949E", fontSize: 12 }}>
            © {new Date().getFullYear()}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2ECC71", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </span>
        </footer>
      </main>
    </div>
  );
}
