"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { allReviews, type StoredReview } from "@/lib/storage";
import { getMatchById } from "@/lib/sampleData";

export default function ProfilePage() {
  const [reviews, setReviews] = useState<StoredReview[]>([]);

  useEffect(() => {
    setReviews(allReviews());
    function onChanged() {
      setReviews(allReviews());
    }
    window.addEventListener("extratime:reviews-changed", onChanged);
    return () => window.removeEventListener("extratime:reviews-changed", onChanged);
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <p>Local-only for now. Shows reviews stored on this device.</p>

      <h2 style={{ marginTop: "1.5rem" }}>Your reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul style={{ paddingLeft: "1.25rem" }}>
          {reviews.map((r) => {
            const match = getMatchById(r.matchId);
            const title = match ? `${match.homeTeam} vs ${match.awayTeam}` : r.matchId;

            return (
              <li key={r.id} style={{ marginBottom: "1rem" }}>
                <div>
                  <Link href={`/match/${r.matchId}`}>{title}</Link>
                </div>
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
            );
          })}
        </ul>
      )}
    </>
  );
}