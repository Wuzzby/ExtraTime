"use client";

import { useState } from "react";
import RatingBlock from "@/components/RatingBlock";
import RateMatchForm from "@/components/RateMatchForm";
import ReviewList from "@/components/ReviewList";
import type { StoredReview } from "@/lib/storage";

export default function MatchCommunity({ matchId }: { matchId: string }) {
  const [version, setVersion] = useState(0);

  function handleSaved(_reviews: StoredReview[]) {
    setVersion((v) => v + 1);
  }

  return (
    <>
      <RatingBlock key={`rating-${matchId}-${version}`} matchId={matchId} />
      <RateMatchForm matchId={matchId} onSaved={handleSaved} />
      <ReviewList key={`reviews-${matchId}-${version}`} matchId={matchId} />
    </>
  );
}