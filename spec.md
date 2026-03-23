# Zypp Electric Fleet Intelligence Dashboard

## Current State
New project. No existing application files.

## Requested Changes (Diff)

### Add
- Full dark-themed SPA with React, Tailwind CSS, Recharts, React Router
- 5 pages: Fleet Overview, Vehicle List, Vehicle Detail, Hub Management, ZAX Auction Feed
- Fixed sidebar navigation with icons, labels, active state, and live status indicator
- Top header bar with page title, live clock, notifications bell (badge=3), and avatar
- All data hardcoded as JS arrays/objects — no API calls

**Fleet Overview page:**
- 4 KPI cards: Total Active Vehicles (1,247), Vehicles Flagged for EOL (83), Avg Fleet Battery Health (74%), Projected Recovery This Month (₹18.4L)
- Donut/horizontal bar chart: Healthy 68%, Degrading 19%, Critical 13%
- EOL Pipeline summary table: Track A/B/C with queue count, avg days, expected recovery
- Alert feed: last 5 alerts with timestamp, vehicle ID, alert type, severity color

**Vehicle List page:**
- Filters: City, Track, Health Status
- Searchable table: 20 mock vehicles (ZE-DL-XXXX format)
- Columns: Vehicle ID, Hub, BHI (colored progress bar), OES, Repair Trajectory, Days to EOL (countdown badge), Track (colored pill), Action (View button)
- Row click navigates to Vehicle Detail

**Vehicle Detail page:**
- Back button to Vehicle List
- Header: Vehicle ID, Hub, City, Deployment date, Days in fleet
- 3 health score cards: BHI (circular ring), OES (circular ring), Repair Trajectory (pill)
- Battery SoH line chart (12 months history + 90-day projection), threshold lines at 65% and 40%
- EOL Prediction box: predicted date, confidence range, recommended track, recovery value
- Repair History table (5-6 rows) with total
- Trip Stats for last 30 days

**Hub Management page:**
- City selector tabs: Delhi NCR / Bengaluru / Hyderabad / Pune / Mumbai
- Hub summary cards per city (2-3 hubs)
- 72-Hour Triage Clock table with progress bars and ESCALATED badge
- Stacked bar chart: projected EOL volume by week for 6 weeks (Track A/B/C)

**ZAX Auction Feed page:**
- Active auctions table with 6 mock lots
- LIVE status with pulsing green dot animation
- Current bid color: green if above reserve, gray if at reserve, red if no bids
- Auction summary stats row
- Vendor leaderboard right panel (top 5 vendors)

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Set up React Router with 5 routes
2. Create shared components: Sidebar, TopBar, KPICard, CircularProgress
3. Implement FleetOverview page with KPI cards, donut chart, pipeline table, alert feed
4. Implement VehicleList page with filter controls, searchable table with BHI bars and track pills
5. Implement VehicleDetail page with SoH line chart (Recharts), EOL box, repair history
6. Implement HubManagement page with city tabs, hub cards, triage table, stacked bar chart
7. Implement ZAXAuctionFeed page with lots table, pulse animation, vendor leaderboard
8. Wire up all mock data as hardcoded JS objects in each page/component file
