export type Match = {
  id: string;
  date: string;
  competition: string;
  stage: string;
  season: string;
  homeTeam: string;
  awayTeam: string;
};

export type ExternalLink = {
  label: string;
  url: string;
};

/* =========================
   MATCH CATALOG
========================= */

export const sampleMatches: Match[] = [
  {
    id: "ucl-2024-final",
    date: "2024-06-01",
    competition: "UEFA Champions League",
    stage: "Final",
    season: "2023-24",
    homeTeam: "Borussia Dortmund",
    awayTeam: "Real Madrid",
  },

  // World Cup Finals
  {
    id: "wc-2022-final",
    date: "2022-12-18",
    competition: "FIFA World Cup",
    stage: "Final",
    season: "2022",
    homeTeam: "Argentina",
    awayTeam: "France",
  },
  {
    id: "wc-2018-final",
    date: "2018-07-15",
    competition: "FIFA World Cup",
    stage: "Final",
    season: "2018",
    homeTeam: "France",
    awayTeam: "Croatia",
  },
  {
    id: "wc-2014-final",
    date: "2014-07-13",
    competition: "FIFA World Cup",
    stage: "Final",
    season: "2014",
    homeTeam: "Germany",
    awayTeam: "Argentina",
  },

  // Euros
  {
    id: "euro-2021-final",
    date: "2021-07-11",
    competition: "UEFA European Championship",
    stage: "Final",
    season: "2020",
    homeTeam: "Italy",
    awayTeam: "England",
  },

  // Iconic matches
  {
    id: "wc-2014-brazil-germany-7-1",
    date: "2014-07-08",
    competition: "FIFA World Cup",
    stage: "Semi-final",
    season: "2014",
    homeTeam: "Brazil",
    awayTeam: "Germany",
  },
  {
    id: "prem-2012-city-qpr",
    date: "2012-05-13",
    competition: "Premier League",
    stage: "Matchday 38",
    season: "2011-12",
    homeTeam: "Manchester City",
    awayTeam: "Queens Park Rangers",
  },
];

/* =========================
   HELPERS
========================= */

export function getMatchById(id: string): Match | null {
  const match = sampleMatches.find((m) => m.id === id);
  return match ?? null;
}

/* =========================
   FEATURED MATCH
========================= */

export const featuredMatchId = "ucl-2024-final";

export const featuredMatchMeta = {
  reason: "Champions League Final",
  startsAt: "2024-05-25",
  endsAt: "2024-06-01",
};

/* =========================
   EXTERNAL LINKS
========================= */

const externalLinksByMatch: Record<string, ExternalLink[]> = {
  "ucl-2024-final": [
    {
      label: "Highlights (YouTube)",
      url: "https://www.youtube.com/results?search_query=borussia+dortmund+real+madrid+2024+final",
    },
    {
      label: "Official Match Page (UEFA)",
      url: "https://www.uefa.com/uefachampionsleague/",
    },
  ],
};

export function getLinksForMatch(matchId: string): ExternalLink[] {
  return externalLinksByMatch[matchId] ?? [];
}