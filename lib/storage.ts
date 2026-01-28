export type StoredReview = {
  id: string;
  matchId: string;
  rating: number; // 0-10
  text: string;
  createdAt: string; // ISO
};

const KEY = "extratime:reviews:v1";

export function loadReviews(): StoredReview[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as StoredReview[];
  } catch {
    return [];
  }
}

export function saveReviews(reviews: StoredReview[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(reviews));
}

export function addReview(review: StoredReview) {
  const existing = loadReviews();
  const next = [review, ...existing];
  saveReviews(next);
    // Notify client components to refresh from localStorage immediately
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("extratime:reviews-changed"));
  }
  return next;
}

export function reviewsForMatch(matchId: string) {
  return loadReviews().filter((r) => r.matchId === matchId);
}

export function averageRatingForMatch(matchId: string) {
  const list = reviewsForMatch(matchId);
  if (list.length === 0) return null;
  const sum = list.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / list.length) * 10) / 10; // 1 decimal
}