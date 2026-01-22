import Link from "next/link";
import { sampleMatches, type Match } from "@/lib/sampleData";

export default function FeedPage() {
  return (
    <>
      <h1>Feed</h1>
      <p>Recent matches to rate and review (sample data for now).</p>

      <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem" }}>
        {sampleMatches.map((match: Match) => (
          <li key={match.id} style={{ marginBottom: "0.75rem" }}>
            <Link href={`/match/${match.id}`}>
              {match.homeTeam} vs {match.awayTeam}
            </Link>
            <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              {match.competition} · {match.stage} · {match.season} · {match.date}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}