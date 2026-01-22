import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ExtraTime",
  description: "Track, rate, and remember football matches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>
        <header
          style={{
            borderBottom: "1px solid #e5e7eb",
            padding: "1rem 2rem",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ fontWeight: 600, textDecoration: "none" }}>
              ExtraTime
            </Link>
            <Link href="/feed">Feed</Link>
            <Link href="/match">Match</Link>
            <Link href="/profile">Profile</Link>
          </nav>
        </header>

        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}