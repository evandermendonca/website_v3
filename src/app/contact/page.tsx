import Link from "next/link";
import { site } from "@/lib/site";
import { removeHttp } from "@/lib/removeHttp";
import { SectionTitle } from "@/components/SectionTitle";

const { contactInfo } = site;

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      {children}
    </div>
  );
}

function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : "border border-neutral-200 text-neutral-900 hover:bg-neutral-50";
  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      className="flex items-start justify-between gap-6 rounded-xl px-3 py-3 transition hover:bg-neutral-50"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="text-sm font-medium text-neutral-900">{label}</div>
      <div className="text-sm text-neutral-700">{value}</div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <SectionTitle
        title="Contact"
        subtitle="If you want to connect, email is the best way to reach me. I’m also available on LinkedIn."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        <ActionLink href={`mailto:${contactInfo.email}`} variant="primary">
          Email me
        </ActionLink>
        <ActionLink href="/resume.pdf" variant="secondary">
          Download resume
        </ActionLink>
        <Link
          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          href="/experience"
        >
          View experience
        </Link>
      </div>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <Card>
          <div className="text-sm font-semibold tracking-tight text-neutral-900">
            Details
          </div>

          <div className="mt-4 space-y-1">
            <Row
              label="Email"
              value={contactInfo.email}
              href={`mailto:${contactInfo.email}`}
            />
            <Row
              label="LinkedIn"
              value={removeHttp(contactInfo.socials.linkedIn)}
              href={`${contactInfo.socials.linkedIn}`}
            />
            <Row
              label="GitHub"
              value={removeHttp(contactInfo.socials.github)}
              href={`${contactInfo.socials.github}`}
            />
          </div>

          <div className="mt-4 text-xs text-neutral-500">
            I try to respond within a couple days.
          </div>
        </Card>

        <Card>
          <div className="text-sm font-semibold tracking-tight text-neutral-900">
            What to reach out about
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-800">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
              <span>Engineering leadership roles (EM/Senior EM).</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
              <span>
                Platform reliability, on-call health, and modernization work.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
              <span>
                Speaking/training sessions on execution and engineering
                management.
              </span>
            </li>
          </ul>

          <div className="mt-4 text-sm text-neutral-700">
            Include context and what you’re looking for. If there’s a job link,
            send it.
          </div>
        </Card>
      </section>
    </main>
  );
}
