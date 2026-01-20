import Link from "next/link";

export default function MatchPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Match</h1>
      <p>Match details, reviews, and highlights will live here.</p>

      <p style={{ marginTop: "1rem" }}>
        <Link href="/feed">Back to Feed</Link>
      </p>
    </main>
  );
}
