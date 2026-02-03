import MatchList from "@/components/MatchList";
import { sampleMatches } from "@/lib/sampleData";

export default function FeedPage() {
  return (
    <MatchList
      matches={sampleMatches}
      title="Feed"
      subtitle="Discover matches to rate and review."
    />
  );
}