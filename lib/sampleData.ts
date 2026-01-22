export type Match = {
  id: string;
  competition: string;
  season: string;
  stage: string;
  date: string; // ISO date string
  homeTeam: string;
  awayTeam: string;
  venue?: string;
};

export const sampleMatches: Match[] = [
  {
    id: "ucl-2024-final",
    competition: "UEFA Champions League",
    season: "2023–24",
    stage: "Final",
    date: "2024-06-01",
    homeTeam: "Borussia Dortmund",
    awayTeam: "Real Madrid",
    venue: "Wembley Stadium",
  },
  {
    id: "ucl-2025-final",
    competition: "UEFA Champions League",
    season: "2024–25",
    stage: "Final",
    date: "2025-05-31",
    homeTeam: "PSG",
    awayTeam: "Inter",
  },
  {
    id: "ucl-2019-semifinal-2ndleg",
    competition: "UEFA Champions League",
    season: "2018–19",
    stage: "Semi-final (2nd leg)",
    date: "2019-05-07",
    homeTeam: "Liverpool",
    awayTeam: "Barcelona",
    venue: "Anfield",
  },
  {
    id: "ucl-2005-final",
    competition: "UEFA Champions League",
    season: "2004–05",
    stage: "Final",
    date: "2005-05-25",
    homeTeam: "AC Milan",
    awayTeam: "Liverpool",
    venue: "Atatürk Olympic Stadium",
  },
  {
    id: "wc-2022-final",
    competition: "FIFA World Cup",
    season: "2022",
    stage: "Final",
    date: "2022-12-18",
    homeTeam: "Argentina",
    awayTeam: "France",
    venue: "Lusail Stadium",
  },
];

export function getMatchById(id: string): Match | undefined {
  return sampleMatches.find((m) => m.id === id);
}