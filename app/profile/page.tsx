"use client";

import Link from "next/link";
import {ArrowRight, BriefcaseBusiness, Cloud, Code2, Database, FileDown, Languages, LineChart, Network, Sparkles, UsersRound} from "lucide-react";
import {useState} from "react";
import {useLocale} from "@/components/portfolio/locale-provider";

const disciplines = [
  {name: "Data Analysis & BI", icon: LineChart, tools: "SQL · Excel · Power BI · DAX · Power Query · KPI", fr: "Contrôler, explorer et visualiser la donnée pour rendre une situation compréhensible et guider l’action.", en: "Control, explore and visualise data to clarify a situation and guide action."},
  {name: "Data Science", icon: Sparkles, tools: "Statistics · EDA · Forecasting · Classification · Clustering", fr: "Transformer un problème métier en hypothèses, modèles, métriques et recommandations explicables.", en: "Turn a business problem into hypotheses, models, metrics and explainable recommendations."},
  {name: "ML & Deep Learning", icon: Network, tools: "scikit-learn · PyTorch · Transfer Learning · Computer Vision", fr: "Entraîner, comparer et évaluer des modèles, puis expliquer leurs résultats et leurs limites.", en: "Train, compare and evaluate models, then explain their results and limitations."},
  {name: "Data Engineering", icon: Database, tools: "ETL / ELT · PostgreSQL · APIs · Data quality · Pipelines", fr: "Construire les fondations fiables qui rendent la donnée disponible, traçable et exploitable.", en: "Build reliable foundations that make data available, traceable and usable."},
  {name: "AI Engineering", icon: Sparkles, tools: "LLM · RAG · AI Agents · Evaluation · Guardrails", fr: "Concevoir des assistants et systèmes agentiques ancrés dans des données validées et évaluables.", en: "Design assistants and agentic systems grounded in validated, evaluable data."},
  {name: "Cloud & MLOps", icon: Cloud, tools: "AWS · Docker · MLflow · DVC · CI/CD · Monitoring", fr: "Passer du notebook à un système reproductible, testé, déployé et observable.", en: "Move from notebooks to reproducible, tested, deployed and observable systems."},
  {name: "Software Engineering", icon: Code2, tools: "Python · FastAPI · Flask · Streamlit · Git · Testing", fr: "Développer des API et interfaces maintenables autour des produits Data et IA.", en: "Build maintainable APIs and interfaces around Data and AI products."},
];

const copy = {
  fr: {
    eyebrow: "PROFIL EN 30 SECONDES",
    title: "Hybride par construction, précis dans l’exécution.",
    intro: "Élève ingénieur en deuxième année du cycle ingénieur à EFREI Paris, je relie analyse, ingénierie des données, Machine Learning et systèmes intelligents pour construire des solutions de bout en bout.",
    foundation: "FONDATIONS",
    foundationTitle: "Mathématiques, logiciel et ingénierie des données.",
    foundationBody: "Mon parcours scientifique et informatique me permet de comprendre la logique des modèles, la qualité des données et la construction des systèmes qui les rendent utiles.",
    language: "Bilingue français et anglais",
    languageNote: "Niveau C1 en anglais",
    skills: "CAPACITÉS TECHNIQUES",
    skillsTitle: "Choisissez un domaine pour voir ce que j’en fais.",
    management: "GESTION DE PROJET & COMMUNICATION",
    managementTitle: "Structurer le travail, coordonner et rendre les résultats compréhensibles.",
    managementBody: "Mon autonomie, ma discipline, mon adaptabilité et ma rigueur soutiennent ma capacité à cadrer un besoin, organiser l’exécution et communiquer avec les équipes techniques comme avec les interlocuteurs métier.",
    managementItems: ["Autonomie", "Discipline", "Adaptabilité", "Rigueur", "Communication", "Gestion de projet"],
    experience: "EXPÉRIENCE",
    asecn: "Assistant Data & Systèmes d’information",
    asecnName: "ASECNA · Agence pour la Sécurité de la Navigation Aérienne en Afrique et à Madagascar",
    asecnDetails: [
      "Recueil des besoins auprès des équipes opérationnelles et modélisation relationnelle des données de qualification du personnel.",
      "Conception de la base MySQL, développement des requêtes SQL d’extraction et de transformation, nettoyage et contrôles qualité avec Excel et SQL.",
      "Fiabilisation et documentation des données, validation des besoins de reporting et exploration d’une segmentation K-Means des profils de qualification.",
    ],
    certs: "CERTIFICATIONS",
    progress: "En cours",
    preparing: "En préparation",
    examReady: "Formation presque terminée · Examen à passer",
    cv: "Consulter mes CV",
    contact: "Discuter d’une opportunité",
  },
  en: {
    eyebrow: "PROFILE IN 30 SECONDS",
    title: "Hybrid by design, precise in execution.",
    intro: "As a second-year engineering student at EFREI Paris, I connect analytics, data engineering, Machine Learning and intelligent systems to build end-to-end solutions.",
    foundation: "FOUNDATIONS",
    foundationTitle: "Mathematics, software and data engineering.",
    foundationBody: "My scientific and computing background helps me understand model logic, data quality and the systems that make them useful.",
    language: "Bilingual in French and English",
    languageNote: "C1 level in English",
    skills: "TECHNICAL CAPABILITIES",
    skillsTitle: "Choose a field to see what I do with it.",
    management: "PROJECT MANAGEMENT & COMMUNICATION",
    managementTitle: "Structure the work, coordinate people and make results understandable.",
    managementBody: "My autonomy, discipline, adaptability and rigour support my ability to frame needs, organise delivery and communicate with both technical teams and business stakeholders.",
    managementItems: ["Autonomy", "Discipline", "Adaptability", "Rigour", "Communication", "Project management"],
    experience: "EXPERIENCE",
    asecn: "Data & Information Systems Assistant",
    asecnName: "ASECNA · Agency for Air Navigation Safety in Africa and Madagascar",
    asecnDetails: [
      "Gathered requirements with operational teams and modelled personnel qualification data in a relational structure.",
      "Designed the MySQL database, developed SQL extraction and transformation queries, and performed cleaning and quality checks with Excel and SQL.",
      "Improved data reliability and documentation, validated reporting needs and explored K-Means segmentation of qualification profiles.",
    ],
    certs: "CERTIFICATIONS",
    progress: "In progress",
    preparing: "In preparation",
    examReady: "Training nearly completed · Exam remaining",
    cv: "View my CVs",
    contact: "Discuss an opportunity",
  },
};

export default function ProfilePage() {
  const {locale} = useLocale();
  const [active, setActive] = useState(0);
  const t = copy[locale];
  const ActiveIcon = disciplines[active].icon;

  return <main className="inner-page profile-page">
    <section className="page-hero profile-hero"><p className="eyebrow"><span/>{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p><div className="profile-monogram">FK<span>DATA<br/>AI<br/>ENG.</span></div></section>

    <section className="foundation-section"><div><small>01 · {t.foundation}</small><h2>{t.foundationTitle}</h2></div><div className="foundation-copy"><p>{t.foundationBody}</p><div className="language-proof"><Languages/><span><strong>{t.language}</strong><small>{t.languageNote}</small></span></div></div></section>

    <section className="discipline-section"><div className="section-intro"><p>02 · {t.skills}</p><h2>{t.skillsTitle}</h2></div><div className="discipline-browser"><div className="discipline-tabs">{disciplines.map((discipline, index) => <button className={index === active ? "active" : ""} onClick={() => setActive(index)} key={discipline.name}><span>0{index + 1}</span>{discipline.name}</button>)}</div><div className="discipline-detail" key={active}><ActiveIcon/><small>CAPABILITY 0{active + 1}</small><h3>{disciplines[active].name}</h3><p>{disciplines[active][locale]}</p><div>{disciplines[active].tools.split(" · ").map(tool => <span key={tool}>{tool}</span>)}</div></div></div></section>

    <section className="management-section"><div className="management-heading"><p>03 · {t.management}</p><h2>{t.managementTitle}</h2><span>{t.managementBody}</span></div><div className="management-wheel"><UsersRound/>{t.managementItems.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></section>

    <section className="journey-section"><div className="journey-column experience-column"><p>04 · {t.experience}</p><article><BriefcaseBusiness/><div><small>{t.asecnName}</small><h3>{t.asecn}</h3><ul>{t.asecnDetails.map(detail => <li key={detail}>{detail}</li>)}</ul></div></article></div><div className="journey-column"><p>05 · {t.certs}</p><article><strong>AWS</strong><div><small>{t.progress}</small><h3>AWS Certified Solutions Architect Associate</h3></div></article><article><strong>ML</strong><div><small>{t.preparing}</small><h3>AWS Certified Machine Learning Engineer Associate</h3></div></article><article><strong>AIF</strong><div><small>{t.examReady}</small><h3>AWS Certified AI Practitioner AIF-C01</h3></div></article><article><strong>AZ</strong><div><small>{t.progress}</small><h3>Microsoft Azure AI-901 Fundamentals</h3></div></article></div></section>

    <section className="profile-actions"><Link href="/cv"><FileDown/>{t.cv}<ArrowRight/></Link><Link href="/contact"><UsersRound/>{t.contact}<ArrowRight/></Link></section>
  </main>;
}
