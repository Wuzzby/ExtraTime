import MatchList from "@/components/MatchList";
import { sampleMatches } from "@/lib/sampleData";

export default function FeedPage() {
  return (
    <MatchList
      matches={sampleMatches}
      title="Feed"
      subtitle="Search and explore matches. Click any match to rate and review."
    />
  );
}