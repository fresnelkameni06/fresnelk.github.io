"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {ArrowUpRight, Globe2, Menu, X} from "lucide-react";
import {useState} from "react";
import {useLocale} from "./locale-provider";

const labels = {
  fr: {home: "Accueil", work: "Projets", profile: "Profil", contact: "Contact", stage: "Stage · nov. 2026", auto: "auto"},
  en: {home: "Home", work: "Projects", profile: "Profile", contact: "Contact", stage: "Internship · Nov. 2026", auto: "auto"},
};

export function SiteHeader() {
  const pathname = usePathname();
  const {locale, automatic, toggleLocale} = useLocale();
  const [open, setOpen] = useState(false);
  const t = labels[locale];
  const nav = [
    ["/", t.home],
    ["/work", t.work],
    ["/profile", t.profile],
    ["/contact", t.contact],
  ];

  return <header className="site-header">
    <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="Fresnel Kameni — Accueil">
      <span className="brand-mark">FK</span>
      <span className="brand-copy"><strong>FRESNEL KAMENI</strong><small>DATA × AI × ENGINEERING</small></span>
    </Link>
    <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Navigation principale">
      {nav.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""}>{label}</Link>)}
      <Link href="/contact" className="nav-stage" onClick={() => setOpen(false)}>{t.stage}<ArrowUpRight aria-hidden="true"/></Link>
    </nav>
    <div className="header-actions">
      <button className="language-button" onClick={toggleLocale} aria-label={locale === "fr" ? "Passer en anglais" : "Switch to French"}>
        <Globe2 aria-hidden="true"/><span>{locale.toUpperCase()}</span>{automatic && <i title={t.auto}/>} 
      </button>
      <button className="menu-button" onClick={() => setOpen(value => !value)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}
