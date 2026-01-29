import Link from "next/link";
import {
  featuredMatchId,
  featuredMatchMeta,
  getMatchById,
  sampleMatches,
} from "@/lib/sampleData";
import { formatDate } from "@/lib/format";

export default function HomePage() {
  const featured = getMatchById(featuredMatchId);
  const recent = [...sampleMatches]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5);

  return (
    <>
      <h1>ExtraTime</h1>
      <p>Rate matches. Write reviews. Share the moments.</p>

      <h2 style={{ marginTop: "1.5rem" }}>Match of the Week</h2>

      <p style={{ opacity: 0.8 }}>
        The match we’re watching, rating, and discussing right now.
      </p>

      {!featured ? (
        <p>Featured match not set.</p>
      ) : (
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            border: "1px solid #ddd",
          }}
        >
          <div style={{ fontSize: "1.1rem" }}>
            <Link href={`/match/${featured.id}`}>
              {featured.homeTeam} vs {featured.awayTeam}
            </Link>
          </div>

          <div style={{ opacity: 0.8 }}>
            {featured.competition} · {featured.stage} · {featured.season} ·{" "}
            {formatDate(featured.date)}
          </div>

          <div style={{ marginTop: "0.5rem", opacity: 0.7 }}>
            {featuredMatchMeta.reason}
          </div>
        </div>
      )}

      <h2 style={{ marginTop: "1.5rem" }}>Recent matches</h2>
      <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
        {recent.map((m) => (
          <li key={m.id} style={{ marginBottom: "0.75rem" }}>
            <Link href={`/match/${m.id}`}>
              {m.homeTeam} vs {m.awayTeam}
            </Link>
            <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              {m.competition} · {m.stage} · {m.season} · {formatDate(m.date)}
            </div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1.5rem" }}>
        {featured && (
          <Link href={`/match/${featured.id}`}>Rate this match</Link>
        )}
        <br />
        <Link href="/match">Browse all matches</Link>
      </div>
    </>
  );
}