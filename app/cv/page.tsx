"use client";

import Link from "next/link";
import {ArrowLeft, Download, ExternalLink, FileText} from "lucide-react";
import {useLocale} from "@/components/portfolio/locale-provider";

const resumes = [
  {role: "Data Analyst", file: "cv/cv-data-analyst.pdf"},
  {role: "Data Scientist & Machine Learning", file: "cv/cv-data-scientist.pdf"},
  {role: "Data Engineer", file: "cv/cv-data-engineer.pdf"},
];

export default function CvPage() {
  const {locale} = useLocale();
  const text = locale === "fr"
    ? {eyebrow: "CV", title: "Le bon CV pour le bon rôle.", body: "Choisissez la version correspondant au poste recherché.", ready: "PDF disponible", view: "Visualiser", download: "Télécharger", back: "Retour au profil"}
    : {eyebrow: "RESUMES", title: "The right resume for the right role.", body: "Choose the version that best matches the target position.", ready: "PDF available", view: "Open resume", download: "Download", back: "Back to profile"};

  return <main className="inner-page cv-page">
    <section className="page-hero"><p className="eyebrow"><span/>{text.eyebrow}</p><h1>{text.title}</h1><p>{text.body}</p></section>
    <section className="cv-grid">{resumes.map((resume, index) => {
      const file = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${resume.file}`;
      return <article key={resume.role}><span>0{index + 1}</span><FileText/><h2>{resume.role}</h2><p>{text.ready}</p><div className="cv-actions"><a href={file} target="_blank" rel="noopener noreferrer">{text.view}<ExternalLink/></a><a href={file} download>{text.download}<Download/></a></div></article>;
    })}</section>
    <Link href="/profile" className="back-link"><ArrowLeft/>{text.back}</Link>
  </main>;
}
