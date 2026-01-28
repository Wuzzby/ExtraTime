"use client";

import { useState } from "react";
import { addReview, type StoredReview } from "@/lib/storage";

export default function RateMatchForm({
  matchId,
  onSaved,
}: {
  matchId: string;
  onSaved?: (reviews: StoredReview[]) => void;
}) {
  const [rating, setRating] = useState<number>(7);
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const trimmed = text.trim();
    if (trimmed.length < 3) {
      setError("Write at least 3 characters.");
      return;
    }

    const now = new Date().toISOString();
    const review: StoredReview = {
      id: `${matchId}:${now}`,
      matchId,
      rating,
      text: trimmed,
      createdAt: now,
    };

    const next = addReview(review);
    setText("");
    onSaved?.(next);
  }

  return (
    <section style={{ marginTop: "1.5rem" }}>
      <h2>Rate this match</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "0.75rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Rating (0–10)
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            style={{ marginLeft: "0.75rem" }}
          >
            {Array.from({ length: 11 }, (_, i) => i).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Review
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
            placeholder="What stood out? How was the atmosphere, drama, quality?"
          />
        </label>

        {error ? <div style={{ color: "tomato" }}>{error}</div> : null}

        <button type="submit" style={{ marginTop: "0.75rem" }}>
          Save
        </button>
      </form>
    </section>
  );
}