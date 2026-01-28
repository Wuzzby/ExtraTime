import { notFound } from "next/navigation";
import { getMatchById } from "@/lib/sampleData";
import MatchHeader from "@/components/MatchHeader";
import MatchCommunity from "@/components/MatchCommunity";
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

      <hr style={{ margin: "1.5rem 0" }} />

      <MatchCommunity matchId={match.id} />
      <ExternalLinks matchId={match.id} />
   </>
  );
}