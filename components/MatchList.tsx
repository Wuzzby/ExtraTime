"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Match } from "@/lib/sampleData";
import { formatDate } from "@/lib/format";

type SortMode = "newest" | "oldest";

export default function MatchList({
  matches,
  title,
  subtitle,
}: {
  matches: Match[];
  title: string;
  subtitle?: string;
}) {
  const [query, setQuery] = useState("");
  const [competition, setCompetition] = useState("all");
  const [sort, setSort] = useState<SortMode>("newest");

  const competitions = useMemo(() => {
    const set = new Set(matches.map((m) => m.competition));
    return ["all", ...Array.from(set).sort()];
  }, [matches]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = matches;

    if (competition !== "all") {
      list = list.filter((m) => m.competition === competition);
    }

    if (q.length > 0) {
      list = list.filter((m) => {
        const hay = `${m.homeTeam} ${m.awayTeam} ${m.competition} ${m.stage} ${m.season}`.toLowerCase();
        return hay.includes(q);
      });
    }

    list = [...list].sort((a, b) => {
      if (a.date === b.date) return 0;
      return sort === "newest" ? (a.date < b.date ? 1 : -1) : a.date < b.date ? -1 : 1;
    });

    return list;
  }, [matches, query, competition, sort]);

  return (
    <>
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search teams, competition, season..."
          style={{ padding: "0.5rem", minWidth: "260px" }}
        />

        <label>
          Competition{" "}
          <select value={competition} onChange={(e) => setCompetition(e.target.value)}>
            {competitions.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "All" : c}
              </option>
            ))}
          </select>
        </label>

        <label>
          Sort{" "}
          <select value={sort} onChange={(e) => setSort(e.target.value as SortMode)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </label>

        <div style={{ opacity: 0.75 }}>{filtered.length} match{filtered.length === 1 ? "" : "es"}</div>
      </div>

      <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem" }}>
        {filtered.map((match) => (
          <li key={match.id} style={{ marginBottom: "0.9rem" }}>
            <Link href={`/match/${match.id}`}>
              {match.homeTeam} vs {match.awayTeam}
            </Link>
            <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              {match.competition} · {match.stage} · {match.season} · {formatDate(match.date)}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}