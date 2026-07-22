import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuração da cor do tema para mobile (Android/iOS)
export const viewport: Viewport = {
  themeColor: "#030819",
  colorScheme: "dark",
};

// Metadata completa para SEO, Open Graph e Compartilhamento
export const metadata: Metadata = {
  title: "Sala de Decisão | Conselho Executivo sob demanda",
  description:
    "Discuta decisões críticas com executivos C-Level experientes e reduza riscos antes que eles aconteçam.",
  keywords: [
    "Conselho Executivo",
    "C-Level sob demanda",
    "Consultoria Estratégica",
    "Tomada de Decisão",
    "Governança Corporativa",
  ],
  authors: [{ name: "Sala de Decisão" }],
  openGraph: {
    title: "Sala de Decisão | Conselho Executivo sob demanda",
    description:
      "Discuta decisões críticas com executivos C-Level experientes e reduza riscos antes que eles aconteçam.",
    url: "https://sala-de-decisao.netlify.app/", // Altere para o seu domínio real
    siteName: "Sala de Decisão",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://sala-de-decisao.netlify.app/images/card-whatssapp.webp", // Imagem de pré-visualização no WhatsApp/LinkedIn
        width: 1200,
        height: 630,
        alt: "Sala de Decisão - Luísa e Júlio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sala de Decisão | Conselho Executivo sob demanda",
    description:
      "Discuta decisões críticas com executivos C-Level experientes e reduza riscos antes que eles aconteçam.",
    images: ["/images/hero-duo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030819] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}