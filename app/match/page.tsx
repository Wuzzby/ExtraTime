import MatchList from "@/components/MatchList";
import { sampleMatches } from "@/lib/sampleData";

export default function MatchIndexPage() {
  return (
    <MatchList
      matches={sampleMatches}
      title="Match"
      subtitle="Browse matches (sample data for now)."
    />
  );
}