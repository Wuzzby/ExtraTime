export type Match = {
  id: string;
  date: string;
  competition: string;
  stage: string;
  season: string;
  homeTeam: string;
  awayTeam: string;
};

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
  {
    id: "wc-2010-final",
    date: "2010-07-11",
    competition: "FIFA World Cup",
    stage: "Final",
    season: "2010",
    homeTeam: "Netherlands",
    awayTeam: "Spain",
  },
  {
    id: "wc-2006-final",
    date: "2006-07-09",
    competition: "FIFA World Cup",
    stage: "Final",
    season: "2006",
    homeTeam: "Italy",
    awayTeam: "France",
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
  {
    id: "euro-2016-final",
    date: "2016-07-10",
    competition: "UEFA European Championship",
    stage: "Final",
    season: "2016",
    homeTeam: "Portugal",
    awayTeam: "France",
  },
  {
    id: "euro-2012-final",
    date: "2012-07-01",
    competition: "UEFA European Championship",
    stage: "Final",
    season: "2012",
    homeTeam: "Spain",
    awayTeam: "Italy",
  },

  // Copa América
  {
    id: "copa-2021-final",
    date: "2021-07-10",
    competition: "Copa America",
    stage: "Final",
    season: "2021",
    homeTeam: "Brazil",
    awayTeam: "Argentina",
  },
  {
    id: "copa-2019-final",
    date: "2019-07-07",
    competition: "Copa America",
    stage: "Final",
    season: "2019",
    homeTeam: "Brazil",
    awayTeam: "Peru",
  },

  // Champions League Finals
  {
    id: "ucl-2023-final",
    date: "2023-06-10",
    competition: "UEFA Champions League",
    stage: "Final",
    season: "2022-23",
    homeTeam: "Manchester City",
    awayTeam: "Inter",
  },
  {
    id: "ucl-2022-final",
    date: "2022-05-28",
    competition: "UEFA Champions League",
    stage: "Final",
    season: "2021-22",
    homeTeam: "Liverpool",
    awayTeam: "Real Madrid",
  },
  {
    id: "ucl-2021-final",
    date: "2021-05-29",
    competition: "UEFA Champions League",
    stage: "Final",
    season: "2020-21",
    homeTeam: "Manchester City",
    awayTeam: "Chelsea",
  },
  {
    id: "ucl-2020-final",
    date: "2020-08-23",
    competition: "UEFA Champions League",
    stage: "Final",
    season: "2019-20",
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Bayern Munich",
  },

  // Iconic matches
  {
    id: "ucl-2017-barca-psg-comeback",
    date: "2017-03-08",
    competition: "UEFA Champions League",
    stage: "Round of 16",
    season: "2016-17",
    homeTeam: "Barcelona",
    awayTeam: "Paris Saint-Germain",
  },
  {
    id: "ucl-2019-liverpool-barcelona-anfield",
    date: "2019-05-07",
    competition: "UEFA Champions League",
    stage: "Semi-final",
    season: "2018-19",
    homeTeam: "Liverpool",
    awayTeam: "Barcelona",
  },
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

export function getMatchById(id: string) {
  return sampleMatches.find((m) => m.id === id);
}

export const featuredMatchId = "ucl-2024-final";

export const featuredMatchMeta = {
  reason: "Champions League Final",
  startsAt: "2024-05-25",
  endsAt: "2024-06-01",
};