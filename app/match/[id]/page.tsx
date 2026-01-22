import { notFound } from "next/navigation";
import { getMatchById } from "@/lib/sampleData";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function MatchDetailPage({ params }: PageProps) {
  const { id } = await params;
  const match = getMatchById(id);

  if (!match) return notFound();

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

      <hr style={{ margin: "1.5rem 0" }} />

      <section>
        <h2>Community Rating</h2>
        <p>Placeholder. Will be computed from user ratings later.</p>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Reviews</h2>
        <p>Placeholder. Reviews will appear here later.</p>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Highlights & Replays</h2>
        <p>Placeholder. External links will appear here later.</p>
      </section>
    </>
  );
}