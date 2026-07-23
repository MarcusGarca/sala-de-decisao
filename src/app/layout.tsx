import type { Metadata, Viewport } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#030819",
  colorScheme: "dark",
};

// URL Base para garantir links absolutos em todo o site
const siteUrl = "https://sala-de-decisao.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    siteName: "Sala de Decisão",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/card-whatsapp.png`, // RECOMENDADO: Usar .jpg ou .png para máxima compatibilidade
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Sala de Decisão - Luísa e Júlio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sala de Decisão | Conselho Executivo sob demanda",
    description:
      "Discuta decisões críticas com executivos C-Level experientes e reduza riscos antes que eles aconteçam.",
    images: [`${siteUrl}/images/card-whatsapp.png`],
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
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030819] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}