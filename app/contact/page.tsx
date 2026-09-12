"use client";

import {ArrowRight, BriefcaseBusiness, CalendarDays, CheckCircle2, Code2, Mail, MapPin, Phone} from "lucide-react";
import {FormEvent, useState} from "react";
import {useLocale} from "@/components/portfolio/locale-provider";

const copy = {
  fr: {eyebrow: "CONTACT", title: "Une opportunité, une mission, une idée ?", body: "Écrivez-moi depuis ce portfolio. Le formulaire est conçu pour transmettre le message directement à ma boîte mail une fois l’adresse de réception connectée.", availability: "DISPONIBILITÉ", date: "Stage de 5 mois · 02 nov. 2026 → 02 avr. 2027", location: "Île-de-France · France", reply: "Je réponds dès que possible.", name: "Votre nom", email: "Votre email", subject: "Objet", message: "Votre message", send: "Envoyer le message", sending: "Envoi en cours…", success: "Message envoyé. Merci, je vous répondrai rapidement.", error: "Le service d’envoi n’est pas encore connecté. Vous pourrez réessayer dès que l’adresse de réception sera configurée."},
  en: {eyebrow: "CONTACT", title: "An opportunity, a project, an idea?", body: "Write to me directly from this portfolio. The form is designed to deliver the message to my inbox once the receiving address is connected.", availability: "AVAILABILITY", date: "5-month internship · 2 Nov. 2026 → 2 Apr. 2027", location: "Île-de-France · France", reply: "I will reply as soon as possible.", name: "Your name", email: "Your email", subject: "Subject", message: "Your message", send: "Send message", sending: "Sending…", success: "Message sent. Thank you. I will reply shortly.", error: "The delivery service is not connected yet. Please try again once the receiving address has been configured."},
};

export default function ContactPage() {
  const {locale} = useLocale();
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const t = copy[locale];
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_API_URL;
    if (!contactEndpoint) {
      setState("error");
      return;
    }
    const response = await fetch(contactEndpoint, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(Object.fromEntries(new FormData(form)))}).catch(() => null);
    if (response?.ok) {setState("sent"); form.reset();} else setState("error");
  }
  return <main className="inner-page contact-page">
    <section className="contact-stage"><div className="contact-message"><p className="eyebrow"><span/>{t.eyebrow}</p><h1>{t.title}</h1><p>{t.body}</p><div className="contact-facts"><div><CalendarDays/><span><small>{t.availability}</small><strong>{t.date}</strong></span></div><div><MapPin/><span><small>LOCATION</small><strong>{t.location}</strong></span></div><div><Mail/><span><small>RESPONSE</small><strong>{t.reply}</strong></span></div></div><div className="contact-links"><a href="https://github.com/fresnelkameni06" target="_blank" rel="noopener noreferrer"><Code2/><span><small>GITHUB</small><strong>fresnelkameni06</strong></span><ArrowRight/></a><a href="https://www.linkedin.com/in/fresnel-kameni/" target="_blank" rel="noopener noreferrer"><BriefcaseBusiness/><span><small>LINKEDIN</small><strong>Fresnel Kameni</strong></span><ArrowRight/></a><a href="tel:+33764194676"><Phone/><span><small>PHONE</small><strong>+33 7 64 19 46 76</strong></span><ArrowRight/></a><a href="mailto:fresnelkameni07@gmail.com"><Mail/><span><small>EMAIL</small><strong>fresnelkameni07@gmail.com</strong></span><ArrowRight/></a></div></div>
      <form className="message-form" onSubmit={submit}><div className="form-heading"><span>NEW MESSAGE</span><i/><i/><i/></div><label><span>{t.name}</span><input name="name" required minLength={2} autoComplete="name"/></label><label><span>{t.email}</span><input name="email" type="email" required autoComplete="email"/></label><label><span>{t.subject}</span><input name="subject" required minLength={3}/></label><label><span>{t.message}</span><textarea name="message" required minLength={10} rows={7}/></label><button className="primary-button" disabled={state === "sending"} type="submit">{state === "sending" ? t.sending : t.send}<ArrowRight/></button>{state === "sent" && <p className="form-feedback success"><CheckCircle2/>{t.success}</p>}{state === "error" && <p className="form-feedback error">{t.error}</p>}</form>
    </section>
  </main>;
}
