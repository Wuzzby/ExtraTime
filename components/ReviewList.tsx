"use client";

import { useEffect, useState } from "react";
import { reviewsForMatch, type StoredReview } from "@/lib/storage";

export default function ReviewList({ matchId }: { matchId: string }) {
  const [reviews, setReviews] = useState<StoredReview[]>([]);

  function refresh() {
    setReviews(reviewsForMatch(matchId));
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
    <section style={{ marginTop: "1.5rem" }}>
      <h2>Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul style={{ paddingLeft: "1.25rem" }}>
          {reviews.map((r) => (
            <li key={r.id} style={{ marginBottom: "0.75rem" }}>
              <div style={{ opacity: 0.85 }}>
                <strong>{r.rating}/10</strong> ·{" "}
                <span style={{ fontSize: "0.9rem" }}>{r.createdAt}</span>
              </div>
              <div>{r.text}</div>
              <button
                onClick={() => {
                  import("@/lib/storage").then(({ deleteReview }) => deleteReview(r.id));
                }}
                style={{ marginTop: "0.5rem" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}