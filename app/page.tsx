import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>ExtraTime</h1>
      <p>Track, rate, and remember football matches.</p>

      <nav style={{ marginTop: "2rem" }}>
        <ul>
          <li><Link href="/feed">Feed</Link></li>
          <li><Link href="/match">Match</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </nav>
    </main>
  );
}