"use client";

import Link from "next/link";
import {ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Server} from "lucide-react";
import {useLocale} from "./locale-provider";
import type {Project} from "@/app/content";

const copy = {
  fr: {
    back: "Retour aux projets",
    challenge: "PROBLÈME & SOLUTION",
    impact: "VALEUR APPORTÉE",
    stack: "STACK & MÉTHODES",
    metric: "PREUVES MESURABLES",
    resources: "RESSOURCES",
    noResources: "Les ressources seront ajoutées dès que les liens auront été validés.",
    demo: "LANCER LA DÉMONSTRATION",
    demoText: "Les serveurs gratuits peuvent se mettre en veille. Suivez les étapes dans l’ordre.",
    apiButton: "Réveiller l’API",
    apiNote: "S’ouvre dans un nouvel onglet",
    waitTitle: "Attendre 1 à 3 minutes",
    waitNote: "Lorsque l’API affiche une réponse, revenez ici. Si l’interface indique que l’API n’est pas connectée, actualisez sa page.",
    appButton: "Ouvrir l’application",
    appNote: "À faire après le réveil de l’API",
    directButton: "Ouvrir la démonstration",
    directNote: "L’application peut prendre quelques secondes pour sortir de veille.",
    next: "Projet suivant",
  },
  en: {
    back: "Back to projects",
    challenge: "PROBLEM & SOLUTION",
    impact: "DELIVERED VALUE",
    stack: "STACK & METHODS",
    metric: "MEASURABLE EVIDENCE",
    resources: "RESOURCES",
    noResources: "Resources will be added once the links have been validated.",
    demo: "LAUNCH LIVE DEMO",
    demoText: "Free servers may enter sleep mode. Follow the steps in order.",
    apiButton: "Wake up the API",
    apiNote: "Opens in a new browser tab",
    waitTitle: "Wait 1 to 3 minutes",
    waitNote: "When the API displays a response, come back here. If the interface says the API is disconnected, refresh its page.",
    appButton: "Open the application",
    appNote: "Use after waking up the API",
    directButton: "Open the live demo",
    directNote: "The application may need a few seconds to wake up.",
    next: "Next project",
  },
};

export function ProjectCase({project, nextProject}: {project: Project; nextProject: Project}) {
  const {locale} = useLocale();
  const t = copy[locale];
  const lead = project.description?.[locale] ?? project.summary[locale];

  return <main className="inner-page case-page">
    <section className={`case-hero category-${project.category}`}>
      <Link href="/work" className="back-link"><ArrowLeft/>{t.back}</Link>
      <div className="case-heading"><div><p>{project.category === "ai" ? "GENAI · AGENTS" : project.category === "ml" ? "ML · ENGINEERING" : "ANALYTICS · BI"}</p><h1>{project.title}</h1></div><span>{project.status}</span></div>
      <p className="case-lead">{lead}</p>
      <div className="case-signal"><span>DATA</span><i/><span>METHOD</span><i/><span>IMPACT</span></div>
    </section>

    <section className="case-content">
      <div className="case-block case-problem"><small>01 · {t.challenge}</small><h2>{project.summary[locale]}</h2></div>
      <div className="case-block case-impact"><small>02 · {t.impact}</small><p>{project.outcome[locale]}</p><CheckCircle2/></div>
      <div className="case-block case-stack"><small>03 · {t.stack}</small><div>{project.stack.map(item => <span key={item}>{item}</span>)}</div></div>

      {(project.evidence?.length || project.metric) && <div className="case-block case-metric"><small>04 · {t.metric}</small>{project.evidence?.length
        ? <ul className="evidence-list">{project.evidence.map(item => <li key={item.en}>{item[locale]}</li>)}</ul>
        : <strong>{project.metric}</strong>}
      </div>}

      {project.sleepingServer && project.liveDemo && <div className="case-block demo-block"><Server/><div><small>{t.demo}</small><p>{t.demoText}</p>{project.liveDemo.apiUrl
        ? <div className="demo-sequence">
            <a href={project.liveDemo.apiUrl} target="_blank" rel="noopener noreferrer"><span>01</span><div><strong>{t.apiButton}</strong><small>{t.apiNote}</small></div><ArrowRight/></a>
            <div className="wait-step"><span>02</span><div><strong>{t.waitTitle}</strong><small>{t.waitNote}</small></div></div>
            <a href={project.liveDemo.appUrl} target="_blank" rel="noopener noreferrer"><span>03</span><div><strong>{t.appButton}</strong><small>{t.appNote}</small></div><ArrowRight/></a>
          </div>
        : <div className="demo-sequence single"><a href={project.liveDemo.appUrl} target="_blank" rel="noopener noreferrer"><span>01</span><div><strong>{t.directButton}</strong><small>{t.directNote}</small></div><ArrowRight/></a></div>}
      </div></div>}

      <div className="case-block resources-block"><ExternalLink/><div><small>{t.resources}</small>{project.resources?.length
        ? <div className="resource-links">{project.resources.map(resource => <a key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer"><span>{resource.label[locale]}</span><ArrowRight/></a>)}</div>
        : <p>{t.noResources}</p>}
      </div></div>

      <Link className="next-case" href={`/work/${nextProject.slug}`}><span>{t.next}</span><strong>{nextProject.title}</strong><ArrowRight/></Link>
    </section>
  </main>;
}
