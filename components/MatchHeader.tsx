import type { Match } from "@/lib/sampleData";

export default function MatchHeader({ match }: { match: Match }) {
  return (
    <>
      <h1>
        {match.homeTeam} vs {match.awayTeam}
      </h1>

      <div style={{ marginTop: "0.5rem", opacity: 0.85 }}>
        {match.competition} · {match.stage} · {match.season}
      </div>

      <div style={{ marginTop: "0.25rem", opacity: 0.85 }}>
        Date: {match.date}
        {match.venue ? ` · Venue: ${match.venue}` : ""}
      </div>
    </>
  );
}