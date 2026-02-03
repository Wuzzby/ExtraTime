"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Match } from "@/lib/sampleData";

type Props = {
  matches: Match[];
  title: string;
  subtitle?: string;
};

export default function MatchList({ matches, title, subtitle }: Props) {
  const [query, setQuery] = useState("");
  const [competition, setCompetition] = useState("All");
  const [sort, setSort] = useState<"Newest" | "Oldest">("Newest");

  const competitions = useMemo(() => {
    const set = new Set(matches.map((m) => m.competition));
    return ["All", ...Array.from(set)];
  }, [matches]);

  const filtered = useMemo(() => {
    return matches
      .filter((m) => {
        const q = query.toLowerCase();
        const matchesQuery =
          m.homeTeam.toLowerCase().includes(q) ||
          m.awayTeam.toLowerCase().includes(q) ||
          m.competition.toLowerCase().includes(q) ||
          m.season.toLowerCase().includes(q);

        const matchesCompetition =
          competition === "All" || m.competition === competition;

        return matchesQuery && matchesCompetition;
      })
      .sort((a, b) =>
        sort === "Newest" ? (a.date < b.date ? 1 : -1) : a.date > b.date ? 1 : -1
      );
  }, [matches, query, competition, sort]);

  return (
    <>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}

      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "1.5rem",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search teams, competition, season"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: 1,
            minWidth: "320px",
            width: "100%",
            padding: "0.5rem",
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
        />

        <select
          value={competition}
          onChange={(e) => setCompetition(e.target.value)}
          style={{
            padding: "0.5rem",
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
        >
          {competitions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "Newest" | "Oldest")}
          style={{
            padding: "0.5rem",
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>

        <div style={{ opacity: 0.7 }}>{filtered.length} matches</div>
      </div>

      {/* List */}
      <ul style={{ marginTop: "1.5rem", paddingLeft: "1.25rem" }}>
        {filtered.map((m) => (
          <li key={m.id} style={{ marginBottom: "1rem" }}>
            <Link href={`/match/${m.id}`}>
              {m.homeTeam} vs {m.awayTeam}
            </Link>
            <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              {m.competition} · {m.stage} · {m.season} · {formatDate(m.date)}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}