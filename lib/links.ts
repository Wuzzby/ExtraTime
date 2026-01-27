export type ExternalLink = {
  matchId: string;
  label: string;
  url: string;
  kind: "highlights" | "replay" | "analysis";
};