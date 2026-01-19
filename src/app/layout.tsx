import { Inter, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const { contactInfo } = site;

const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${serif.variable} min-h-screen bg-white text-neutral-900 antialiased`}
      >
        <Header />

        {children}

        <footer className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-10 text-sm text-neutral-600">
            <span>© {new Date().getFullYear()} Evander Mendonca</span>
            <span className="flex gap-4">
              <a className="hover:text-neutral-900" href="/resume.pdf">
                Resume
              </a>
              <a
                className="hover:text-neutral-900"
                href={`${contactInfo.socials.linkedIn}`}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="hover:text-neutral-900"
                href={`mailto:${contactInfo.email}`}
              >
                Email
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
