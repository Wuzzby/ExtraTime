import Link from "next/link";
import {
  featuredMatchId,
  featuredMatchMeta,
  getMatchById,
  sampleMatches,
} from "@/lib/sampleData";
import { formatDate, getWindowStatus } from "@/lib/format";

export default function HomePage() {
  const featured = getMatchById(featuredMatchId);
  const recent = [...sampleMatches]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5);

  const featuredStatus = getWindowStatus(
    featuredMatchMeta.startsAt,
    featuredMatchMeta.endsAt
  );

  return (
    <>
      <h1>ExtraTime</h1>
      <p>Rate matches. Write reviews. Share the moments.</p>

      <h2 style={{ marginTop: "2rem" }}>Match of the Week</h2>
      <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>
        The featured match the community is rating and discussing right now.
      </p>

      {!featured ? (
        <p style={{ marginTop: "0.75rem" }}>Featured match not set.</p>
      ) : (
        <div
          style={{
            marginTop: "0.75rem",
            padding: "1.25rem",
            border: "1px solid #333",
            borderRadius: "6px",
            background: "#111",
            color: "#f5f5f5",
          }}
        >
          <div style={{ fontSize: "1.15rem", fontWeight: 600 }}>
            <Link
              href={`/match/${featured.id}`}
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              {featured.homeTeam} vs {featured.awayTeam}
            </Link>
          </div>

          <div style={{ marginTop: "0.4rem", opacity: 0.85 }}>
            {featured.competition} · {featured.stage} · {featured.season} ·{" "}
            {formatDate(featured.date)}
          </div>

          <div style={{ marginTop: "0.6rem", opacity: 0.8 }}>
            {featuredMatchMeta.reason}
          </div>

          <div style={{ marginTop: "0.35rem", opacity: 0.7 }}>
            Status: {featuredStatus}
          </div>

          {featuredStatus === "ended" && (
            <div style={{ marginTop: "0.6rem", opacity: 0.7 }}>
              This featured window has ended. Browse matches to rate another one.
            </div>
          )}
        </div>
      )}

      <h2 style={{ marginTop: "2rem" }}>Recent matches</h2>
      <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
        {recent.map((m) => (
          <li key={m.id} style={{ marginBottom: "0.9rem" }}>
            <Link href={`/match/${m.id}`}>
              {m.homeTeam} vs {m.awayTeam}
            </Link>
            <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              {m.competition} · {m.stage} · {m.season} · {formatDate(m.date)}
            </div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "2rem" }}>
        {featured && featuredStatus !== "ended" && (
          <>
            <Link href={`/match/${featured.id}`}>Rate this match</Link>
            <br />
          </>
        )}
        <Link href="/match">Browse all matches</Link>
      </div>
    </>
  );
}