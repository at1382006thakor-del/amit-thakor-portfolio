import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Amit Kumar Thakor | Data Analyst | AI/ML Enthusiast",
  description:
    "Portfolio of Amit Kumar Thakor, a final-year B.E. Information Technology student passionate about Data Analytics, Artificial Intelligence, Machine Learning, Python, and modern web development.",
  keywords: [
    "Amit Kumar Thakor",
    "Data Analyst Portfolio",
    "AI ML Developer",
    "B.E. IT Student",
    "Python Developer",
    "Power BI Dashboards",
    "Machine Learning Engineer",
    "Gujarat India",
  ],
  authors: [{ name: "Amit Kumar Thakor" }],
  creator: "Amit Kumar Thakor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amit-thakor-portfolio.vercel.app",
    title: "Amit Kumar Thakor | Data Analyst | AI/ML Enthusiast",
    description:
      "Final-year B.E. IT student passionate about Data Analytics, Artificial Intelligence, Machine Learning, Python, and web development.",
    siteName: "Amit Kumar Thakor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kumar Thakor | Data Analyst | AI/ML Enthusiast",
    description:
      "Final-year B.E. IT student passionate about Data Analytics, Artificial Intelligence, Machine Learning, Python, and web development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
