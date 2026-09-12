import type {Metadata} from "next";
import "./globals.css";
import {LocaleProvider} from "@/components/portfolio/locale-provider";
import {SiteHeader} from "@/components/portfolio/site-header";
import {PortfolioAssistant} from "@/components/portfolio/portfolio-assistant";

export const metadata: Metadata = {
  title: "Fresnel Kameni — Data & AI Portfolio",
  description: "Portfolio de Fresnel Kameni, élève ingénieur Data & IA à EFREI Paris, disponible pour un stage de cinq mois à partir du 2 novembre 2026.",
  icons: {icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en" suppressHydrationWarning><body><LocaleProvider><SiteHeader/>{children}<PortfolioAssistant/></LocaleProvider></body></html>;
}
