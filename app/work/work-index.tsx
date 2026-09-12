"use client";

import Link from "next/link";
import {ArrowRight, Layers3} from "lucide-react";
import {useMemo, useState} from "react";
import {useLocale} from "@/components/portfolio/locale-provider";
import {projects, type Project} from "../content";

const copy = {
  fr: {eyebrow: "ÉTUDES DE CAS", title: "Des projets, pas une liste de technologies.", body: "Chaque étude relie un problème, des données, une méthode, un résultat et la valeur apportée. Un projet peut prouver plusieurs dimensions de mon profil hybride.", filters: {all: "Tous", analytics: "Analytics & BI", ml: "Data Science · ML/DL", ai: "GenAI · Agents"}, open: "Explorer le cas", stack: "OUTILS", results: "RÉSULTAT"},
  en: {eyebrow: "CASE STUDIES", title: "Projects, not a list of technologies.", body: "Each study connects a problem, data, method, result and delivered value. One project can prove several dimensions of my hybrid profile.", filters: {all: "All", analytics: "Analytics & BI", ml: "Data Science · ML/DL", ai: "GenAI · Agents"}, open: "Explore case", stack: "TOOLS", results: "OUTCOME"},
};

export function WorkIndex() {
  const {locale} = useLocale();
  const [filter, setFilter] = useState<"all" | Project["category"]>("all");
  const t = copy[locale];
  const shown = useMemo(() => projects.filter(project => filter === "all" || project.category === filter), [filter]);
  return <main className="inner-page work-page">
    <section className="page-hero work-hero">
      <p className="eyebrow"><span/>{t.eyebrow}</p>
      <h1>{t.title}</h1>
      <p>{t.body}</p>
      <div className="work-counter"><Layers3/><strong>{projects.length}</strong><span>CASE STUDIES</span></div>
    </section>
    <section className="work-browser">
      <div className="filter-bar" aria-label="Filtres de projets">{(["all", "analytics", "ml", "ai"] as const).map(key => <button className={filter === key ? "active" : ""} onClick={() => setFilter(key)} key={key}>{t.filters[key]}<span>{projects.filter(project => key === "all" || project.category === key).length}</span></button>)}</div>
      <div className="work-grid">{shown.map((project, index) => <Link className={`work-card category-${project.category}`} href={`/work/${project.slug}`} key={project.slug}>
        <div className="work-card-top"><span>{String(index + 1).padStart(2, "0")}</span><small>{project.status}</small></div>
        <div className="work-card-main"><p>{project.category === "analytics" ? "DATA ANALYSIS & BI" : project.category === "ml" ? "DATA SCIENCE · ML/DL · ENGINEERING" : "GENERATIVE AI · AGENTS"}</p><h2>{project.title}</h2><span>{project.description?.[locale] ?? project.summary[locale]}</span></div>
        <div className="work-card-proof"><div><small>{t.stack}</small><p>{project.stack.slice(0, 4).join(" · ")}</p></div><div><small>{t.results}</small><strong>{project.metric || project.status}</strong></div></div>
        <div className="work-card-link">{t.open}<ArrowRight/></div>
      </Link>)}</div>
    </section>
  </main>;
}
