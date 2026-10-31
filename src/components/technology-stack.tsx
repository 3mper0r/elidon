import type { ReactNode } from "react";

const technologies = ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "Python", "AWS", "SQL", "NoSQL"];

function TechnologyIcon({ name }: { name: string }) {
  let drawing: ReactNode;
  switch (name) {
    case "React": drawing = <><circle cx="24" cy="24" r="3" fill="currentColor" />{[0, 60, 120].map((angle) => <ellipse key={angle} cx="24" cy="24" rx="21" ry="8" transform={`rotate(${angle} 24 24)`} />)}</>; break;
    case "Next.js": drawing = <><circle cx="24" cy="24" r="21" /><path d="M15 34V14l23 28M32 14v15" /></>; break;
    case "JavaScript":
    case "TypeScript": drawing = <><rect x="3" y="3" width="42" height="42" rx="4" /><text x="24" y="33" textAnchor="middle" fill="currentColor" stroke="none" fontSize="23" fontWeight="600">{name === "JavaScript" ? "JS" : "TS"}</text></>; break;
    case "Node.js": drawing = <><path d="m24 3 19 11v21L24 46 5 35V14L24 3Z" /><text x="24" y="31" textAnchor="middle" fill="currentColor" stroke="none" fontSize="20">N</text></>; break;
    case "Python": drawing = <><path d="M24 24H12c-10 0-10 17 0 17h6v-7c0-4 3-6 7-6h9V11c0-5-20-5-20 0v8h20M24 24h12c10 0 10-17 0-17h-6m-6 17H14v13c0 5 20 5 20 0v-4" /><circle cx="20" cy="12" r="1" /><circle cx="28" cy="36" r="1" /></>; break;
    case "AWS": drawing = <><path d="M8 29a8 8 0 0 1-1-16 12 12 0 0 1 23-2 9 9 0 1 1 8 18H8ZM10 38c9 6 20 6 29-1m-7-1 8 0-2 7" /></>; break;
    default: drawing = <><ellipse cx="24" cy="10" rx="17" ry="6" /><path d="M7 10v27c0 8 34 8 34 0V10M7 23c0 8 34 8 34 0" />{name === "NoSQL" && <path d="m20 27-4 5 4 5m8-10 4 5-4 5" />}</>;
  }
  return <svg viewBox="0 0 48 48" className="h-9 w-9 text-[#c4dc92]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawing}</svg>;
}

export function TechnologyStack({ label }: { label: string }) {
  return <div className="mt-12">
    <h3 className="text-sm font-medium tracking-widest text-secondary uppercase">{label}</h3>
    <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {technologies.map((name) => <li key={name} className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-secondary/20 bg-surface/30 p-4"><TechnologyIcon name={name} /><span className="text-sm">{name}</span></li>)}
    </ul>
  </div>;
}
