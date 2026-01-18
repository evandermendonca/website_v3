import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export type ContactInfo = {
  email: string;
  phone: string;
  socials: {
    linkedIn: string;
  };
};

export const metadata: Metadata = {
  title: "Evander Mendonca",

  description:
    "Engineering Manager — revenue-critical systems, reliability, execution.",
  metadataBase: new URL("https://evander.co"),
};

export const contactInfo: ContactInfo = {
  email: "evander.m.mendonca@gmail.com",
  phone: "206-519-4190",
  socials: {
    linkedIn: "https://linkedin.com/in/evandermendonca",
  },
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-neutral-600 hover:text-neutral-900"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${serif.variable} min-h-screen bg-white text-neutral-900 antialiased`}
      >
        <header className="border-b border-neutral-200">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-10">
              <Link href="/" className="text-sm font-semibold tracking-tight">
                Evander Mendonca
              </Link>

              <nav className="hidden items-center gap-6 sm:flex">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/writing">Writing</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </nav>
            </div>

            <a
              className="hidden rounded-xl border border-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 sm:inline-flex"
              href="/resume.pdf"
            >
              Resume
            </a>
          </div>
        </header>

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
