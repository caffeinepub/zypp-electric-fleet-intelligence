import { auctionLots, vendorLeaderboard } from "../data/mockData";

const card: React.CSSProperties = {
  backgroundColor: "#161B22",
  border: "1px solid #30363D",
  borderRadius: 10,
  padding: "18px 20px",
  boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
};

export default function ZAXAuctionFeed() {
  const totalReserve = auctionLots.reduce((s, l) => s + l.reservePrice, 0);
  const totalBid = auctionLots.reduce((s, l) => s + l.currentBid, 0);
  const uplift = (((totalBid - totalReserve) / totalReserve) * 100).toFixed(1);

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        {/* Left: Auctions */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={card}>
            <div
              style={{
                color: "#E6EDF3",
                fontWeight: 600,
                fontSize: 15,
                marginBottom: 16,
              }}
            >
              Active Auctions
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13,
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #30363D" }}>
                  {[
                    "Lot ID",
                    "Description",
                    "Reserve Price",
                    "Current Bid",
                    "Bidders",
                    "Time Remaining",
                    "Status",
                  ].map((h) => (
                    <th
                      key={h}
                      style={{
                        color: "#8B949E",
                        fontWeight: 500,
                        padding: "8px 10px",
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
                {auctionLots.map((lot, i) => {
                  const bidColor =
                    lot.bidders === 0
                      ? "#C0392B"
                      : lot.currentBid > lot.reservePrice
                        ? "#2ECC71"
                        : "#8B949E";
                  return (
                    <tr
                      key={lot.id}
                      data-ocid={`auction.item.${i + 1}`}
                      style={{ borderBottom: "1px solid #21262D" }}
                    >
                      <td
                        style={{
                          padding: "12px 10px",
                          color: "#E6EDF3",
                          fontWeight: 600,
                        }}
                      >
                        {lot.id}
                      </td>
                      <td style={{ padding: "12px 10px", color: "#8B949E" }}>
                        {lot.description}
                      </td>
                      <td style={{ padding: "12px 10px", color: "#8B949E" }}>
                        ₹{lot.reservePrice.toLocaleString()}
                      </td>
                      <td
                        style={{
                          padding: "12px 10px",
                          color: bidColor,
                          fontWeight: 600,
                        }}
                      >
                        ₹{lot.currentBid.toLocaleString()}
                      </td>
                      <td
                        style={{
                          padding: "12px 10px",
                          color: "#E6EDF3",
                          textAlign: "center",
                        }}
                      >
                        {lot.bidders}
                      </td>
                      <td style={{ padding: "12px 10px", color: "#E6EDF3" }}>
                        {lot.timeRemaining}
                      </td>
                      <td style={{ padding: "12px 10px" }}>
                        {lot.status === "LIVE" ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <span
                              className="pulse-dot"
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: "#2ECC71",
                                display: "inline-block",
                              }}
                            />
                            <span
                              style={{
                                color: "#2ECC71",
                                fontWeight: 600,
                                fontSize: 12,
                              }}
                            >
                              LIVE
                            </span>
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <span
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: "#8B949E",
                                display: "inline-block",
                              }}
                            />
                            <span
                              style={{
                                color: "#8B949E",
                                fontWeight: 600,
                                fontSize: 12,
                              }}
                            >
                              OPEN
                            </span>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Summary stats */}
            <div
              data-ocid="auction.summary.panel"
              style={{
                display: "flex",
                gap: 24,
                marginTop: 16,
                paddingTop: 16,
                borderTop: "1px solid #30363D",
              }}
            >
              {[
                { label: "Total Active Lots", value: "6", color: "#E6EDF3" },
                {
                  label: "Lot Value at Reserve",
                  value: "₹5.47L",
                  color: "#E6EDF3",
                },
                {
                  label: "Current Bid Total",
                  value: "₹5.95L",
                  color: "#E6EDF3",
                },
                {
                  label: "Uplift vs Reserve",
                  value: `+${uplift}%`,
                  color: "#2ECC71",
                },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ color: "#8B949E", fontSize: 11 }}>
                    {s.label}
                  </div>
                  <div
                    style={{ color: s.color, fontWeight: 700, fontSize: 18 }}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Vendor leaderboard */}
        <div style={{ ...card, width: 300, flexShrink: 0 }}>
          <div
            style={{
              color: "#E6EDF3",
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            Vendor Leaderboard — This Month
          </div>
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #30363D" }}>
                {["Vendor", "Bids", "Won", "Win %", "Value"].map((h) => (
                  <th
                    key={h}
                    style={{
                      color: "#8B949E",
                      fontWeight: 500,
                      padding: "6px 6px",
                      textAlign: "left",
                      fontSize: 11,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {vendorLeaderboard.map((v, i) => (
                <tr
                  key={v.name}
                  data-ocid={`vendor.item.${i + 1}`}
                  style={{ borderBottom: "1px solid #21262D" }}
                >
                  <td
                    style={{
                      padding: "9px 6px",
                      color: "#E6EDF3",
                      fontSize: 12,
                    }}
                  >
                    {v.name}
                  </td>
                  <td
                    style={{
                      padding: "9px 6px",
                      color: "#8B949E",
                      textAlign: "center",
                    }}
                  >
                    {v.bids}
                  </td>
                  <td
                    style={{
                      padding: "9px 6px",
                      color: "#8B949E",
                      textAlign: "center",
                    }}
                  >
                    {v.won}
                  </td>
                  <td
                    style={{
                      padding: "9px 6px",
                      color: "#2ECC71",
                      fontWeight: 600,
                    }}
                  >
                    {v.winRate}
                  </td>
                  <td
                    style={{
                      padding: "9px 6px",
                      color: "#E6EDF3",
                      fontWeight: 500,
                    }}
                  >
                    {v.totalValue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
