export function formatDate(isoDate: string) {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export type WindowStatus = "upcoming" | "active" | "ended";

export function getWindowStatus(startsAt: string, endsAt?: string): WindowStatus {
  const now = new Date();
  const start = new Date(startsAt);
  const end = endsAt ? new Date(endsAt) : null;

  if (!Number.isNaN(start.getTime()) && now < start) return "upcoming";
  if (end && !Number.isNaN(end.getTime()) && now > end) return "ended";
  return "active";
}