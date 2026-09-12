"use client";

import Link from "next/link";
import {ArrowDownRight, ArrowRight, CalendarDays, MapPin} from "lucide-react";
import {useEffect, useState} from "react";
import {DataFlow} from "@/components/portfolio/data-flow";
import {useLocale} from "@/components/portfolio/locale-provider";
import {projects} from "./content";

const roles = {
  fr: [
    ["Data Analyst", "Rendre les données lisibles pour guider la décision."],
    ["Data Scientist", "Détecter des patterns et construire des modèles prédictifs."],
    ["Data Engineer", "Faire circuler une donnée fiable, propre et disponible."],
    ["ML / DL Engineer", "Industrialiser des modèles robustes et mesurables."],
    ["AI Engineer", "Créer des RAG, assistants et systèmes agentiques utiles."],
  ],
  en: [
    ["Data Analyst", "Make data readable so decisions become clearer."],
    ["Data Scientist", "Find patterns and build predictive models."],
    ["Data Engineer", "Move reliable, clean and available data at scale."],
    ["ML / DL Engineer", "Industrialise robust and measurable models."],
    ["AI Engineer", "Build useful RAG, assistants and agentic systems."],
  ],
};

const copy = {
  fr: {
    eyebrow: "EN 2E ANNÉE DU CYCLE INGÉNIEUR À EFREI PARIS · DATA & INTELLIGENCE ARTIFICIELLE",
    first: "Je transforme la",
    raw: "donnée brute",
    last: "en décisions utiles.",
    statement: "Je suis un pétrolier du numérique : je transforme la donnée brute en une ressource fiable, puis en analyses, modèles et décisions qui créent de la valeur.",
    projects: "Explorer mes projets",
    profile: "Mon profil en 30 secondes",
    availability: "Stage de 5 mois",
    dates: "Du 2 novembre 2026 au 2 avril 2027",
    location: "Île-de-France · France",
    roleLabel: "PROFIL HYBRIDE · OBJECTIF DU RÔLE",
    selected: "PREUVES SÉLECTIONNÉES",
    selectedTitle: "Trois projets. Trois façons de transformer la donnée.",
    selectedBody: "La Home donne le signal. Les études de cas apportent les preuves.",
    allWork: "Voir tous les projets",
    final: "Analyse. Ingénierie. Intelligence.",
    finalBody: "Un seul profil pour relier le besoin métier, les données, les modèles et le déploiement.",
    talk: "Parlons de votre besoin",
  },
  en: {
    eyebrow: "SECOND-YEAR ENGINEERING STUDENT AT EFREI PARIS · DATA & ARTIFICIAL INTELLIGENCE",
    first: "I turn",
    raw: "raw data",
    last: "into useful decisions.",
    statement: "I am a digital oilman: I turn raw data into a reliable resource, then into analytics, models and decisions that create value.",
    projects: "Explore my projects",
    profile: "My profile in 30 seconds",
    availability: "5-month internship",
    dates: "2 November 2026 to 2 April 2027",
    location: "Île-de-France · France",
    roleLabel: "HYBRID PROFILE · ROLE OUTCOME",
    selected: "SELECTED EVIDENCE",
    selectedTitle: "Three projects. Three ways to transform data.",
    selectedBody: "The Home sends the signal. The case studies provide the evidence.",
    allWork: "View all projects",
    final: "Analysis. Engineering. Intelligence.",
    finalBody: "One profile connecting business needs, data, models and deployment.",
    talk: "Let’s discuss your need",
  },
};

export default function Home() {
  const {locale} = useLocale();
  const [role, setRole] = useState(0);
  const t = copy[locale];

  useEffect(() => {
    const timer = window.setInterval(() => setRole(current => (current + 1) % roles[locale].length), 3200);
    return () => window.clearInterval(timer);
  }, [locale]);

  const featured = ["real-estate-intelligence", "visionbank", "idfm-mobility-platform"]
    .map(slug => projects.find(project => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return <main className="home-page">
    <section className="home-hero">
      <div className="hero-noise"/>
      <div className="hero-glow glow-violet"/>
      <div className="hero-glow glow-cyan"/>
      <div className="hero-copy">
        <p className="eyebrow reveal-one"><span/> {t.eyebrow}</p>
        <h1 className="reveal-two"><span>{t.first}</span><strong>{t.raw}</strong><span>{t.last}</span></h1>
        <p className="hero-statement reveal-three">{t.statement}</p>
        <div className="hero-actions reveal-four">
          <Link className="primary-button" href="/work">{t.projects}<ArrowRight/></Link>
          <Link className="text-button" href="/profile">{t.profile}<ArrowDownRight/></Link>
        </div>
        <div className="availability-card reveal-five">
          <CalendarDays aria-hidden="true"/>
          <div><small>{t.availability}</small><strong>{t.dates}</strong></div>
          <span><MapPin aria-hidden="true"/>{t.location}</span>
        </div>
      </div>
      <div className="hero-visual reveal-visual"><DataFlow/></div>
      <div className="role-console" aria-live="polite">
        <div><small>{t.roleLabel}</small><span>0{role + 1} / 05</span></div>
        <div className="role-copy" key={`${locale}-${role}`}><strong>{roles[locale][role][0]}</strong><p>{roles[locale][role][1]}</p></div>
        <div className="role-progress">{roles[locale].map((item, index) => <button key={item[0]} onClick={() => setRole(index)} className={index === role ? "active" : ""} aria-label={item[0]}><i/></button>)}</div>
      </div>
    </section>

    <section className="featured-work">
      <div className="section-intro"><p>{t.selected}</p><h2>{t.selectedTitle}</h2><span>{t.selectedBody}</span></div>
      <div className="featured-list">
        {featured.map((project, index) => <Link href={`/work/${project.slug}`} className="featured-project" key={project.slug}>
          <span className="project-index">0{index + 1}</span>
          <div><small>{project.category === "ai" ? "GENAI · AGENTS" : project.category === "ml" ? "ML · MLOPS" : "ANALYTICS · BI"}</small><h3>{project.title}</h3><p>{project.description?.[locale] ?? project.summary[locale]}</p></div>
          <strong>{project.metric || project.status}</strong>
          <span className="project-arrow"><ArrowRight/></span>
        </Link>)}
      </div>
      <Link className="all-work-link" href="/work">{t.allWork}<ArrowRight/></Link>
    </section>

    <section className="home-closing">
      <div className="closing-orbit"><span>DATA</span><i/><span>AI</span><i/><span>IMPACT</span></div>
      <div><p>{t.final}</p><h2>{t.finalBody}</h2><Link href="/contact">{t.talk}<ArrowRight/></Link></div>
    </section>
  </main>;
}
