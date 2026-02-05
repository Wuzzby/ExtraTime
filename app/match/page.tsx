import MatchList from "@/components/MatchList";
import { sampleMatches } from "@/lib/sampleData";

export default function MatchIndexPage() {
  return (
    <MatchList
      matches={sampleMatches}
      title="Matches"
      subtitle="Browse the match catalog. Search by teams, competition, or season."
    />
  );
}