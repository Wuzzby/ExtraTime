"use client";

import { useEffect, useState } from "react";
import { averageRatingForMatch, reviewsForMatch } from "@/lib/storage";

export default function RatingBlock({ matchId }: { matchId: string }) {
  const [avg, setAvg] = useState<number | null>(null);
  const [count, setCount] = useState<number>(0);

  function refresh() {
    const list = reviewsForMatch(matchId);
    setCount(list.length);
    setAvg(averageRatingForMatch(matchId));
  }

  useEffect(() => {
    refresh();

    function onChanged() {
      refresh();
    }

    window.addEventListener("extratime:reviews-changed", onChanged);
    return () => {
      window.removeEventListener("extratime:reviews-changed", onChanged);
    };
  }, [matchId]);

  return (
    <section>
      <h2>Community Rating</h2>
      {count === 0 ? (
        <p>No ratings yet.</p>
      ) : (
        <p>
          {avg}/10 from {count} rating{count === 1 ? "" : "s"}.
        </p>
      )}
    </section>
  );
}