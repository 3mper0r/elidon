"use client";

import { useState } from "react";
import { challengeEpisodes as episodes, type ChallengeCategory } from "@/content/challenges";
import type { Locale } from "@/lib/i18n/locales";
import styles from "./challenges-gallery.module.css";

type IconName = ChallengeCategory | "canal" | "play" | "lock" | "arrow" | "video" | "calendar";

function ChallengeIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "running" && <><circle cx="15" cy="4" r="2" /><path d="m13 8-3 4 4 3-2 6M13 8l4 4h4M12 9l-5 1-3 4M10 14l-4 4H2" /></>}
      {name === "cycling" && <><circle cx="5.5" cy="16.5" r="4" /><circle cx="18.5" cy="16.5" r="4" /><path d="m5.5 16.5 4-9 5 9h-9l6-7h5M15 5h3l2 11.5M8 7.5h4" /></>}
      {name === "swimming" && <><circle cx="16.5" cy="5.5" r="2" /><path d="m5 10 5-6 4 5 4 2M2 14q2.5-3 5 0t5 0 5 0 5 0M2 20q2.5-3 5 0t5 0 5 0 5 0" /></>}
      {name === "outdoor" && <><path d="m2 20 7-13 5 8 3-5 5 10H2ZM7 11l2 2 2-2" /><circle cx="17.5" cy="4.5" r="1.5" /></>}
      {name === "strength" && <><path d="M2 3h20M5 3v5l4 4m10-9v5l-4 4M9 12v5l-2 5m8-10v5l2 5M9 14h6" /><circle cx="12" cy="9" r="2" /></>}
      {name === "canal" && <><path d="M7 2 5 22M17 2l2 20M10 5h4m-4 5h4m-5 5h6m-6 5h6" /></>}
      {name === "play" && <path d="m9 5 11 7L9 19V5Z" fill="currentColor" stroke="none" />}
      {name === "lock" && <><rect x="6" y="10" width="12" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>}
      {name === "arrow" && <path d="M4 12h15m-6-6 6 6-6 6" />}
      {name === "video" && <><rect x="2" y="5" width="14" height="14" rx="2" /><path d="m16 9 6-3v12l-6-3" /></>}
      {name === "calendar" && <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 2v6m10-6v6M3 11h18" /></>}
    </svg>
  );
}

const categories = ["all", "running", "cycling", "swimming", "outdoor", "canal"] as const;

export function ChallengesGallery({ locale }: { locale: Locale }) {
  const de = locale === "de";
  const [category, setCategory] = useState<(typeof categories)[number]>("all");
  const labels = de
    ? { all: "Alle", running: "Laufen", cycling: "Radfahren", swimming: "Schwimmen", outdoor: "Outdoor", canal: "Kanal Series" }
    : { all: "All", running: "Running", cycling: "Cycling", swimming: "Swimming", outdoor: "Outdoor", canal: "Kanal Series" };
  const filtered = episodes.filter((episode) => category === "all" || (category === "canal" ? episode.series === "canal" : episode.category === category));
  const canalEpisodes = episodes.filter((episode) => episode.series === "canal");
  const episodeRange = `${String(Math.min(...episodes.map((episode) => episode.number))).padStart(2, "0")}—${String(Math.max(...episodes.map((episode) => episode.number))).padStart(2, "0")}`;

  return (
    <div className={styles.gallery}>
      <section className={styles.hero}>
        <div className={`${styles.inner} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{de ? "HERAUSFORDERUNGEN" : "CHALLENGES"}</p>
            <h1>{de ? "Sport. Natur." : "Sport. Nature."} <span>Challenges.</span></h1>
            <p className={styles.introduction}>{de ? "Eine persönliche Serie sportlicher Herausforderungen – Schwimmen, Klimmzüge, Sprünge und Laufen. Echte Anstrengung und besondere Orte." : "A personal series of challenges — swimming, pull-ups, jumps and running. Real effort, and the places that make it special."}</p>
            <div className={styles.statistics}>
              <div className={styles.statistic}><ChallengeIcon name="running" /><div><strong>{episodes.length}</strong><span>Challenges</span></div></div>
              <div className={styles.statistic}><ChallengeIcon name="canal" /><div><strong>{canalEpisodes.length}</strong><span>Kanal Series</span></div></div>
              <div className={styles.statistic}><ChallengeIcon name="video" /><div><strong>{episodeRange}</strong><span>{de ? "Episoden" : "Episodes"}</span></div></div>
            </div>
          </div>
          <div className={styles.heroDisciplines} aria-hidden="true">
            {(["running", "cycling", "swimming", "outdoor"] as const).map((item) => <span key={item}>{labels[item]}</span>)}
          </div>
        </div>
      </section>

      <section className={`${styles.inner} ${styles.episodes}`} aria-label={de ? "Challenge-Episoden" : "Challenge episodes"}>
        <div className={styles.filters} role="group" aria-label={de ? "Challenges filtern" : "Filter challenges"}>
          {categories.map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item}>
              {item !== "all" && <ChallengeIcon name={item} />}{labels[item]}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((episode) => (
            <article key={episode.number} className={styles.card}>
              <a href={episode.url} target="_blank" rel="noopener noreferrer" aria-label={de ? `Episode ${episode.number}: ${episode.title} auf Instagram ansehen (öffnet in neuem Tab)` : `Watch Episode ${episode.number}: ${episode.title} on Instagram (opens in a new tab)`}>
                <div className={styles.cover} data-episode-cover>
                  <div className={styles.coverImage} style={{ backgroundImage: `url("${episode.image}")` }} />
                  <span className={styles.episodeNumber}>Episode {episode.number}</span>
                  <h2 className={styles.coverTitle} data-cover-title>{episode.title}</h2>
                  <span className={styles.play} data-play-control><ChallengeIcon name="play" /></span>
                  <span className={styles.coverCaption} data-cover-caption>Instagram ↗</span>
                </div>
                <div className={styles.cardDetails}>
                  <ChallengeIcon className={styles.sportIcon} name={episode.category} />
                  <div><h3>Episode {episode.number} — {episode.title}</h3><p>{episode.description[locale]}</p></div>
                  <ChallengeIcon className={styles.cardArrow} name="arrow" />
                </div>
              </a>
            </article>
          ))}
          {category === "all" && (
            <article className={`${styles.card} ${styles.upcoming}`}>
              <div className={styles.cover} data-episode-cover>
                <div className={styles.coverImage} />
                <span className={styles.episodeNumber}>{de ? "ALS NÄCHSTES" : "NEXT"}</span>
                <h2 className={styles.coverTitle}>{de ? "Was kommt als Nächstes?" : "What’s Next?"}</h2>
                <span className={styles.play}><ChallengeIcon name="lock" /></span>
                <span className={styles.coverCaption}>{de ? "Bald verfügbar" : "Coming soon"}</span>
              </div>
              <div className={styles.cardDetails}>
                <ChallengeIcon className={styles.sportIcon} name="calendar" />
                <div><h3>{de ? "Episode 7 — Neue Challenge" : "Episode 7 — New Challenge"}</h3><p>{de ? "Eine neue Herausforderung. Bald mehr." : "A new challenge. More to come."}</p></div>
              </div>
            </article>
          )}
        </div>
        <p role="status" className={filtered.length === 0 ? styles.empty : "sr-only"}>{filtered.length === 0 ? (de ? "Noch keine Challenges in dieser Kategorie." : "No challenges in this category yet.") : (de ? `${filtered.length} Challenges angezeigt.` : `${filtered.length} challenges shown.`)}</p>
        <p className={styles.note}>{de ? "KI-generierte Illustrationen als vorläufige Cover. Die Originaltitel bleiben in beiden Sprachen erhalten; Beschreibungen sind Entwürfe." : "AI-generated illustrations are temporary covers. Original titles are preserved in both languages; descriptions are drafts."}</p>
      </section>
    </div>
  );
}
