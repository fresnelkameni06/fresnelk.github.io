"use client";

import Link from "next/link";
import {ArrowRight, Bot, Sparkles, X} from "lucide-react";
import {useState} from "react";
import {useLocale} from "./locale-provider";

const text = {
  fr: {label: "Guide du portfolio", title: "Que voulez-vous vérifier ?", note: "Version guidée — l’assistant IA connecté arrivera dans une phase dédiée.", links: [["/work", "Voir les projets Data Science"], ["/work", "Voir les preuves Data Engineering"], ["/profile", "Résumer le profil en 30 secondes"], ["/contact", "Contacter Fresnel"]]},
  en: {label: "Portfolio guide", title: "What would you like to verify?", note: "Guided version — the connected AI assistant will arrive in a dedicated phase.", links: [["/work", "Explore Data Science projects"], ["/work", "See Data Engineering evidence"], ["/profile", "Summarise the profile in 30 seconds"], ["/contact", "Contact Fresnel"]]},
};

export function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const {locale} = useLocale();
  const t = text[locale];
  return <>
    <button className="assistant-launcher" onClick={() => setOpen(true)} aria-label={t.label}><span><Sparkles/></span><b>{t.label}</b></button>
    {open && <aside className="assistant-panel" aria-label={t.label}>
      <div className="assistant-top"><span><Bot/><small>FRESNEL AI</small></span><button onClick={() => setOpen(false)} aria-label="Fermer"><X/></button></div>
      <div className="assistant-body"><p>{t.title}</p>{t.links.map(([href,label]) => <Link href={href} key={label} onClick={() => setOpen(false)}>{label}<ArrowRight/></Link>)}</div>
      <p className="assistant-note">{t.note}</p>
    </aside>}
  </>;
}
