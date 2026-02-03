import MatchList from "@/components/MatchList";
import { sampleMatches } from "@/lib/sampleData";

export default function MatchIndexPage() {
  return (
    <MatchList
      matches={sampleMatches}
      title="Matches"
      subtitle="Browse matches by competition, season, or date."
    />
  );
}