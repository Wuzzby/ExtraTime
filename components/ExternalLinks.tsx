import { getLinksForMatch } from "@/lib/sampleData";

export default function ExternalLinks({ matchId }: { matchId: string }) {
  const links = getLinksForMatch(matchId);

  return (
    <section style={{ marginTop: "1.5rem" }}>
      <h2>Highlights & Replays</h2>

      {links.length === 0 ? (
        <p>No links yet.</p>
      ) : (
        <ul style={{ paddingLeft: "1.25rem" }}>
          {links.map((l) => (
            <li key={`${l.kind}-${l.url}`}>
              <a href={l.url} target="_blank" rel="noreferrer">
                {l.label}
              </a>
              <span style={{ opacity: 0.75 }}> ({l.kind})</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}