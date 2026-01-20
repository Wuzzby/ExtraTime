import Link from "next/link";

export default function ProfilePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Profile</h1>
      <p>User profile and review history will live here.</p>

      <p style={{ marginTop: "1rem" }}>
        <Link href="/feed">Back to Feed</Link>
      </p>
    </main>
  );
}