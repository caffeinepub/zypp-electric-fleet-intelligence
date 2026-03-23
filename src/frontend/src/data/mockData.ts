export interface Vehicle {
  id: string;
  hub: string;
  city: string;
  bhi: number;
  oes: number;
  repairTrajectory: "Low" | "Medium" | "High";
  daysToEol: number;
  track: "A" | "B" | "C" | "Active";
  deploymentDate: string;
  daysInFleet: number;
}

export const vehicles: Vehicle[] = [
  {
    id: "ZE-DL-0042",
    hub: "Dwarka Hub",
    city: "Delhi NCR",
    bhi: 71,
    oes: 82,
    repairTrajectory: "Medium",
    daysToEol: 45,
    track: "A",
    deploymentDate: "2024-01-10",
    daysInFleet: 342,
  },
  {
    id: "ZE-DL-0087",
    hub: "Rohini Hub",
    city: "Delhi NCR",
    bhi: 58,
    oes: 67,
    repairTrajectory: "High",
    daysToEol: 18,
    track: "B",
    deploymentDate: "2023-12-05",
    daysInFleet: 378,
  },
  {
    id: "ZE-DL-0103",
    hub: "Lajpat Hub",
    city: "Delhi NCR",
    bhi: 84,
    oes: 91,
    repairTrajectory: "Low",
    daysToEol: 78,
    track: "Active",
    deploymentDate: "2024-02-14",
    daysInFleet: 307,
  },
  {
    id: "ZE-DL-0156",
    hub: "Dwarka Hub",
    city: "Delhi NCR",
    bhi: 38,
    oes: 44,
    repairTrajectory: "High",
    daysToEol: 9,
    track: "C",
    deploymentDate: "2023-08-20",
    daysInFleet: 514,
  },
  {
    id: "ZE-BLR-0118",
    hub: "Koramangala Hub",
    city: "Bengaluru",
    bhi: 62,
    oes: 74,
    repairTrajectory: "High",
    daysToEol: 22,
    track: "B",
    deploymentDate: "2023-11-01",
    daysInFleet: 440,
  },
  {
    id: "ZE-BLR-0201",
    hub: "Whitefield Hub",
    city: "Bengaluru",
    bhi: 88,
    oes: 93,
    repairTrajectory: "Low",
    daysToEol: 92,
    track: "Active",
    deploymentDate: "2024-03-01",
    daysInFleet: 291,
  },
  {
    id: "ZE-BLR-0234",
    hub: "MG Road Hub",
    city: "Bengaluru",
    bhi: 49,
    oes: 58,
    repairTrajectory: "High",
    daysToEol: 14,
    track: "C",
    deploymentDate: "2023-09-15",
    daysInFleet: 488,
  },
  {
    id: "ZE-HYD-0205",
    hub: "Banjara Hills Hub",
    city: "Hyderabad",
    bhi: 73,
    oes: 80,
    repairTrajectory: "Medium",
    daysToEol: 51,
    track: "A",
    deploymentDate: "2024-01-25",
    daysInFleet: 327,
  },
  {
    id: "ZE-HYD-0267",
    hub: "Hitech City Hub",
    city: "Hyderabad",
    bhi: 91,
    oes: 88,
    repairTrajectory: "Low",
    daysToEol: 110,
    track: "Active",
    deploymentDate: "2024-04-10",
    daysInFleet: 251,
  },
  {
    id: "ZE-HYD-0312",
    hub: "Secunderabad Hub",
    city: "Hyderabad",
    bhi: 55,
    oes: 63,
    repairTrajectory: "High",
    daysToEol: 27,
    track: "B",
    deploymentDate: "2023-10-12",
    daysInFleet: 460,
  },
  {
    id: "ZE-PUN-0089",
    hub: "Hinjawadi Hub",
    city: "Pune",
    bhi: 67,
    oes: 76,
    repairTrajectory: "Medium",
    daysToEol: 38,
    track: "A",
    deploymentDate: "2023-12-20",
    daysInFleet: 363,
  },
  {
    id: "ZE-PUN-0134",
    hub: "Kothrud Hub",
    city: "Pune",
    bhi: 43,
    oes: 52,
    repairTrajectory: "High",
    daysToEol: 11,
    track: "C",
    deploymentDate: "2023-07-05",
    daysInFleet: 560,
  },
  {
    id: "ZE-PUN-0178",
    hub: "Viman Nagar Hub",
    city: "Pune",
    bhi: 80,
    oes: 85,
    repairTrajectory: "Low",
    daysToEol: 65,
    track: "Active",
    deploymentDate: "2024-02-28",
    daysInFleet: 293,
  },
  {
    id: "ZE-MUM-0312",
    hub: "Andheri Hub",
    city: "Mumbai",
    bhi: 76,
    oes: 83,
    repairTrajectory: "Medium",
    daysToEol: 42,
    track: "A",
    deploymentDate: "2024-01-18",
    daysInFleet: 334,
  },
  {
    id: "ZE-MUM-0389",
    hub: "Thane Hub",
    city: "Mumbai",
    bhi: 34,
    oes: 41,
    repairTrajectory: "High",
    daysToEol: 7,
    track: "C",
    deploymentDate: "2023-06-10",
    daysInFleet: 586,
  },
  {
    id: "ZE-MUM-0421",
    hub: "Bandra Hub",
    city: "Mumbai",
    bhi: 86,
    oes: 90,
    repairTrajectory: "Low",
    daysToEol: 88,
    track: "Active",
    deploymentDate: "2024-03-15",
    daysInFleet: 277,
  },
  {
    id: "ZE-DL-0198",
    hub: "Rohini Hub",
    city: "Delhi NCR",
    bhi: 61,
    oes: 70,
    repairTrajectory: "Medium",
    daysToEol: 33,
    track: "B",
    deploymentDate: "2023-11-28",
    daysInFleet: 413,
  },
  {
    id: "ZE-BLR-0305",
    hub: "Koramangala Hub",
    city: "Bengaluru",
    bhi: 77,
    oes: 82,
    repairTrajectory: "Low",
    daysToEol: 55,
    track: "A",
    deploymentDate: "2024-02-05",
    daysInFleet: 316,
  },
  {
    id: "ZE-HYD-0378",
    hub: "Hitech City Hub",
    city: "Hyderabad",
    bhi: 69,
    oes: 78,
    repairTrajectory: "Medium",
    daysToEol: 48,
    track: "A",
    deploymentDate: "2024-01-30",
    daysInFleet: 322,
  },
  {
    id: "ZE-MUM-0456",
    hub: "Andheri Hub",
    city: "Mumbai",
    bhi: 52,
    oes: 61,
    repairTrajectory: "High",
    daysToEol: 19,
    track: "B",
    deploymentDate: "2023-10-22",
    daysInFleet: 450,
  },
];

export interface HubData {
  name: string;
  totalVehicles: number;
  eolQueue: number;
  vendorCapacity: number;
  slaRisk: "Low" | "Medium" | "High";
}

export const hubsByCity: Record<string, HubData[]> = {
  "Delhi NCR": [
    {
      name: "Dwarka Hub",
      totalVehicles: 312,
      eolQueue: 18,
      vendorCapacity: 85,
      slaRisk: "Medium",
    },
    {
      name: "Rohini Hub",
      totalVehicles: 198,
      eolQueue: 11,
      vendorCapacity: 92,
      slaRisk: "Low",
    },
    {
      name: "Lajpat Hub",
      totalVehicles: 145,
      eolQueue: 7,
      vendorCapacity: 78,
      slaRisk: "High",
    },
  ],
  Bengaluru: [
    {
      name: "Koramangala Hub",
      totalVehicles: 267,
      eolQueue: 22,
      vendorCapacity: 71,
      slaRisk: "High",
    },
    {
      name: "Whitefield Hub",
      totalVehicles: 189,
      eolQueue: 9,
      vendorCapacity: 88,
      slaRisk: "Low",
    },
    {
      name: "MG Road Hub",
      totalVehicles: 134,
      eolQueue: 14,
      vendorCapacity: 65,
      slaRisk: "High",
    },
  ],
  Hyderabad: [
    {
      name: "Banjara Hills Hub",
      totalVehicles: 221,
      eolQueue: 16,
      vendorCapacity: 82,
      slaRisk: "Medium",
    },
    {
      name: "Hitech City Hub",
      totalVehicles: 178,
      eolQueue: 8,
      vendorCapacity: 90,
      slaRisk: "Low",
    },
  ],
  Pune: [
    {
      name: "Hinjawadi Hub",
      totalVehicles: 156,
      eolQueue: 12,
      vendorCapacity: 76,
      slaRisk: "Medium",
    },
    {
      name: "Kothrud Hub",
      totalVehicles: 124,
      eolQueue: 6,
      vendorCapacity: 84,
      slaRisk: "Low",
    },
  ],
  Mumbai: [
    {
      name: "Andheri Hub",
      totalVehicles: 289,
      eolQueue: 19,
      vendorCapacity: 69,
      slaRisk: "High",
    },
    {
      name: "Thane Hub",
      totalVehicles: 203,
      eolQueue: 13,
      vendorCapacity: 77,
      slaRisk: "Medium",
    },
    {
      name: "Bandra Hub",
      totalVehicles: 167,
      eolQueue: 7,
      vendorCapacity: 91,
      slaRisk: "Low",
    },
  ],
};

export interface TriageEntry {
  vehicleId: string;
  flaggedAt: string;
  hoursElapsed: number;
  hoursRemaining: number;
  status: "In Triage" | "ESCALATED";
}

export const triageData: TriageEntry[] = [
  {
    vehicleId: "ZE-DL-0042",
    flaggedAt: "2025-01-14 08:30",
    hoursElapsed: 14,
    hoursRemaining: 58,
    status: "In Triage",
  },
  {
    vehicleId: "ZE-BLR-0118",
    flaggedAt: "2025-01-14 18:45",
    hoursElapsed: 4,
    hoursRemaining: 68,
    status: "In Triage",
  },
  {
    vehicleId: "ZE-HYD-0312",
    flaggedAt: "2025-01-13 22:00",
    hoursElapsed: 34,
    hoursRemaining: 38,
    status: "In Triage",
  },
  {
    vehicleId: "ZE-PUN-0134",
    flaggedAt: "2025-01-13 10:15",
    hoursElapsed: 46,
    hoursRemaining: 26,
    status: "In Triage",
  },
  {
    vehicleId: "ZE-MUM-0389",
    flaggedAt: "2025-01-12 23:30",
    hoursElapsed: 68,
    hoursRemaining: 4,
    status: "In Triage",
  },
  {
    vehicleId: "ZE-DL-0156",
    flaggedAt: "2025-01-12 14:00",
    hoursElapsed: 76,
    hoursRemaining: 0,
    status: "ESCALATED",
  },
];

export interface AuctionLot {
  id: string;
  description: string;
  reservePrice: number;
  currentBid: number;
  bidders: number;
  timeRemaining: string;
  status: "LIVE" | "OPEN";
}

export const auctionLots: AuctionLot[] = [
  {
    id: "LOT-2401",
    description: "50x Motor assemblies (ZE-2W)",
    reservePrice: 125000,
    currentBid: 138000,
    bidders: 4,
    timeRemaining: "2h 14m",
    status: "LIVE",
  },
  {
    id: "LOT-2402",
    description: "30x Battery packs Grade-A",
    reservePrice: 105000,
    currentBid: 122500,
    bidders: 7,
    timeRemaining: "45m",
    status: "LIVE",
  },
  {
    id: "LOT-2403",
    description: "25x Battery packs Grade-B",
    reservePrice: 62500,
    currentBid: 71000,
    bidders: 3,
    timeRemaining: "6h 02m",
    status: "LIVE",
  },
  {
    id: "LOT-2404",
    description: "15x Certified chassis scrap",
    reservePrice: 82500,
    currentBid: 82500,
    bidders: 1,
    timeRemaining: "23h",
    status: "OPEN",
  },
  {
    id: "LOT-2405",
    description: "40x ECU + Controller sets",
    reservePrice: 48000,
    currentBid: 56200,
    bidders: 5,
    timeRemaining: "1h 33m",
    status: "LIVE",
  },
  {
    id: "LOT-2406",
    description: "20x Grade-C battery packs",
    reservePrice: 24000,
    currentBid: 24000,
    bidders: 0,
    timeRemaining: "3 days",
    status: "OPEN",
  },
];

export const vendorLeaderboard = [
  {
    name: "Attero Recycling",
    bids: 47,
    won: 18,
    winRate: "38.3%",
    totalValue: "₹8.4L",
  },
  {
    name: "Lohum Cleantech",
    bids: 38,
    won: 14,
    winRate: "36.8%",
    totalValue: "₹6.2L",
  },
  {
    name: "Exigo Recycling",
    bids: 29,
    won: 9,
    winRate: "31.0%",
    totalValue: "₹4.1L",
  },
  {
    name: "SunMobility Swap",
    bids: 22,
    won: 7,
    winRate: "31.8%",
    totalValue: "₹3.3L",
  },
  {
    name: "RegionalScrap Co.",
    bids: 15,
    won: 4,
    winRate: "26.7%",
    totalValue: "₹1.8L",
  },
];

export const eolForecastData = [
  { week: "Week 1", A: 4, B: 8, C: 5 },
  { week: "Week 2", A: 6, B: 12, C: 7 },
  { week: "Week 3", A: 5, B: 9, C: 6 },
  { week: "Week 4", A: 8, B: 14, C: 9 },
  { week: "Week 5", A: 7, B: 11, C: 8 },
  { week: "Week 6", A: 9, B: 16, C: 11 },
];

export const alerts = [
  {
    id: 1,
    time: "14 min ago",
    vehicleId: "ZE-BLR-0118",
    type: "SLA Breach Warning",
    severity: "critical" as const,
  },
  {
    id: 2,
    time: "1 hr ago",
    vehicleId: "ZE-DL-0042",
    type: "EOL Flagged",
    severity: "warning" as const,
  },
  {
    id: 3,
    time: "3 hrs ago",
    vehicleId: "ZE-HYD-0205",
    type: "Track B Assigned",
    severity: "success" as const,
  },
  {
    id: 4,
    time: "5 hrs ago",
    vehicleId: "ZE-PUN-0089",
    type: "EOL Flagged",
    severity: "warning" as const,
  },
  {
    id: 5,
    time: "7 hrs ago",
    vehicleId: "ZE-MUM-0312",
    type: "Track A Assigned",
    severity: "success" as const,
  },
];

export function generateSoHData(currentBhi: number) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const startSoH = 94;
  const totalDrop = startSoH - currentBhi;
  const data = months.map((month, i) => ({
    month,
    actual: Math.round(startSoH - (totalDrop * i) / 11),
    projected: null as number | null,
  }));
  // Add projected months
  const dropPerMonth = totalDrop / 11;
  ["Jan+", "Feb+", "Mar+"].forEach((month, i) => {
    data.push({
      month,
      actual: null as unknown as number,
      projected: Math.round(currentBhi - dropPerMonth * (i + 1)),
    });
  });
  return data;
}
