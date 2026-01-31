import { notFound } from "next/navigation";
import { getMatchById } from "@/lib/sampleData";
import MatchHeader from "@/components/MatchHeader";
import RatingBlock from "@/components/RatingBlock";
import RateMatchForm from "@/components/RateMatchForm";
import ReviewList from "@/components/ReviewList";
import ExternalLinks from "@/components/ExternalLinks";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function MatchDetailPage({ params }: PageProps) {
  const { id } = await params;
  const match = getMatchById(id);

  if (!match) return notFound();

  return (
    <>
      <MatchHeader match={match} />

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <RatingBlock matchId={match.id} />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <RateMatchForm matchId={match.id} />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <ReviewList matchId={match.id} />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <ExternalLinks matchId={match.id} />
      </section>
    </>
  );
}