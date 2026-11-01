"use client";

import { useState } from "react";
import { challengeEpisodes as episodes, type ChallengeCategory as Category } from "@/content/challenges";
import type { Locale } from "@/lib/i18n/locales";

const icons: Record<Category, string> = { running: "↗", cycling: "◎", swimming: "≋", outdoor: "△" };

export function ChallengesGallery({ locale }: { locale: Locale }) {
  const de = locale === "de";
  const [category, setCategory] = useState<Category | "all">("all");
  const categories: Array<Category | "all"> = ["all", "running", "cycling", "swimming", "outdoor"];
  const labels: Record<Category | "all", string> = de
    ? { all: "Alle", running: "Laufen", cycling: "Radfahren", swimming: "Schwimmen", outdoor: "Outdoor" }
    : { all: "All", running: "Running", cycling: "Cycling", swimming: "Swimming", outdoor: "Outdoor" };
  const filtered = episodes.filter((episode) => category === "all" || episode.category === category);

  return (
    <div className="min-h-screen bg-[#091b14] text-[#e5e9d9]">
      <section className="relative isolate overflow-hidden border-b border-[#c7cbb8]/15">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,#3e5a3f85,transparent_54%)]" />
        <div className="absolute right-[-8%] bottom-[-52%] -z-10 h-[35rem] w-[65rem] rotate-[-18deg] rounded-[50%] border border-[#c7cbb8]/30 shadow-[0_0_80px_#6b7f6730]" />
        <div className="mx-auto grid max-w-[1480px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:px-16 lg:py-28">
          <div>
            <p className="mb-6 text-xs font-medium tracking-[.35em] text-[#c7cbb8]">{de ? "HERAUSFORDERUNGEN" : "CHALLENGES"}</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-.06em] sm:text-6xl lg:text-7xl">
              {de ? "Sport. Natur." : "Sport. Nature."} <span className="text-[#b9d47f]">Challenges.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#c7cbb8]">{de ? "Eine persönliche Serie sportlicher Herausforderungen – Laufen, Radfahren, Schwimmen und mehr. Echte Strecken, echte Anstrengung und besondere Orte." : "A personal series of endurance challenges — running, cycling, swimming and more. Real routes, real effort, and the places that make it special."}</p>
            <div className="mt-10 flex flex-wrap gap-9 border-t border-[#c7cbb8]/15 pt-7">
              <div><strong className="text-3xl">{episodes.length}</strong><p className="text-sm text-[#c7cbb8]">Challenges</p></div>
              <div><strong className="text-3xl">{new Set(episodes.map((episode) => episode.category)).size}</strong><p className="text-sm text-[#c7cbb8]">{de ? "Sportarten" : "Disciplines"}</p></div>
              <div><strong className="text-3xl">01—05</strong><p className="text-sm text-[#c7cbb8]">{de ? "Episoden" : "Episodes"}</p></div>
            </div>
          </div>
          <div aria-hidden="true" className="relative hidden min-h-52 items-end justify-end lg:flex">
            <div className="absolute inset-x-0 bottom-0 h-44 opacity-60" style={{background:"repeating-radial-gradient(ellipse at 75% 130%, transparent 0 15px, #b9d47f38 16px 17px, transparent 18px 30px)"}} />
            <div className="relative space-y-3 text-right text-xs uppercase tracking-[.16em] text-[#c7cbb8]">{(["running", "cycling", "swimming", "outdoor"] as const).map((item) => <p key={item}>{labels[item]}</p>)}<div className="ml-auto h-[2px] w-10 bg-[#b9d47f]" /></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-6 py-10 sm:px-10 lg:px-16">
        <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label={de ? "Nach Sportart filtern" : "Filter by discipline"}>
          {categories.map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item}
              className={`min-h-11 rounded-xl border px-5 py-2 text-sm transition-colors ${category === item ? "border-[#dceaa5] bg-[#dceaa5] text-[#091b14]" : "border-[#c7cbb8]/25 text-[#e5e9d9] hover:border-[#c7cbb8]/65 hover:bg-[#1e3a2e]"}`}>
              {item !== "all" && <span aria-hidden="true">{icons[item]}{"  "}</span>}{labels[item]}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((episode) => (
            <article key={episode.number} className="group overflow-hidden rounded-2xl border border-[#c7cbb8]/15 bg-[#10261d] transition-colors hover:border-[#b9d47f]/50">
              <a href={episode.url} target="_blank" rel="noopener noreferrer" aria-label={de ? `Episode ${episode.number}: ${episode.title[locale]} auf Instagram ansehen (öffnet in neuem Tab)` : `Watch Episode ${episode.number}: ${episode.title[locale]} on Instagram (opens in a new tab)`} className="relative block aspect-[1.8] min-h-52 overflow-hidden bg-[#1e3a2e]">
                <div className="absolute inset-0 bg-cover bg-center motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105" style={{ backgroundImage: `linear-gradient(90deg,#091b14c9,transparent 78%),url("${episode.image}")` }} />
                <span className="absolute left-6 top-6 text-[10px] font-semibold uppercase tracking-[.24em] text-[#dceaa5]">Episode {episode.number}</span>
                <h2 className="absolute bottom-14 left-6 right-6 break-words text-2xl font-semibold italic leading-tight tracking-tight text-white sm:text-3xl">{episode.title[locale]}</h2>
                <span aria-hidden="true" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/80 bg-[#091b14]/60 text-xl text-white">▶</span>
                <span className="absolute bottom-4 right-4 rounded-md bg-[#091b14]/75 px-2 py-1 text-xs text-white">{de ? "Auf Instagram ansehen" : "Watch on Instagram"}</span>
              </a>
              <div className="flex items-start gap-4 p-5">
                <span className="text-xl text-[#b9d47f]" aria-hidden="true">{icons[episode.category]}</span>
                <div className="min-w-0 flex-1"><h3 className="font-semibold">Episode {episode.number} — {episode.title[locale]}</h3><p className="mt-2 text-sm leading-relaxed text-[#c7cbb8]">{episode.description[locale]}</p></div>
                <span aria-hidden="true" className="text-xl">↗</span>
              </div>
            </article>
          ))}
          {category === "all" && (
            <article className="overflow-hidden rounded-2xl border border-[#c7cbb8]/15 bg-[#10261d]">
              <div className="relative flex aspect-[1.8] flex-col justify-between bg-[radial-gradient(ellipse_at_65%_40%,#6b7f6766,transparent_65%),linear-gradient(135deg,#1e3a2e,#091b14)] p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#dceaa5]">{de ? "ALS NÄCHSTES" : "UP NEXT"}</span>
                <span className="self-center text-4xl" aria-hidden="true">◇</span>
                <h2 className="text-3xl font-semibold italic">{de ? "Was kommt als Nächstes?" : "What's Next?"}</h2>
              </div>
              <div className="p-5"><h3 className="font-semibold">{de ? "Episode 7 — Neue Challenge" : "Episode 7 — New Challenge"}</h3><p className="mt-2 text-sm text-[#c7cbb8]">{de ? "Bald verfügbar." : "Coming soon."}</p></div>
            </article>
          )}
        </div>
        <p role="status" className={filtered.length === 0 ? "py-16 text-center text-[#c7cbb8]" : "sr-only"}>{filtered.length === 0 ? (de ? "Noch keine Challenges in dieser Kategorie." : "No challenges in this category yet.") : (de ? `${filtered.length} Challenges angezeigt.` : `${filtered.length} challenges shown.`)}</p>
        <p className="mt-8 text-xs text-[#c7cbb8]/70">{de ? "Vorschaubilder, Titel und Beschreibungen sind Platzhalter. Die Links zu Episoden 1–5 führen zu den Original-Reels." : "Preview images, titles and descriptions are placeholders. Episode links 1–5 open the original Instagram Reels."}</p>
      </section>
    </div>
  );
}
