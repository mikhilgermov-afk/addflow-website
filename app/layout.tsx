import type { Metadata } from "next";
import { Geologica, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";

const mont = Montserrat({ variable: "--font-mont", subsets: ["latin", "cyrillic"] });
const geologica = Geologica({ variable: "--font-geologica", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "AddFlow - реклама входит в эфир",
  description: "AddFlow соединяет бренды и стримеров: нативные интеграции, прозрачные условия и живая аналитика кампаний.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "64x64" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "AddFlow - реклама входит в эфир",
    description: "Нативная реклама для прямых эфиров - с понятными условиями для брендов и стримеров.",
    url: "https://add-flow.ru/",
    siteName: "AddFlow",
    images: [{ url: "https://add-flow.ru/addflow-social-card.png", width: 1728, height: 909, alt: "AddFlow - бренд входит в эфир" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AddFlow - реклама входит в эфир",
    description: "Нативная реклама для прямых эфиров - с понятными условиями для брендов и стримеров.",
    images: ["https://add-flow.ru/addflow-social-card.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${mont.variable} ${geologica.variable}`}><LanguageProvider>{children}</LanguageProvider></body></html>;
}
