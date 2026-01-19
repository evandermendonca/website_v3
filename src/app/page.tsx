import Link from "next/link";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
  );
}

function ActionLink({
  href,
  children,
  external,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : "border border-neutral-200 text-neutral-900 hover:bg-neutral-50";

  const cls = `${base} ${styles}`;

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
        {children}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <section className="max-w-3xl">
        <div className="flex flex-wrap gap-2">
          <Pill>Engineering Manager</Pill>
          <Pill>Platform & Reliability</Pill>
          <Pill>Execution</Pill>
        </div>

        <h1 className="mt-7 text-4xl font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[3.25rem]">
          I lead engineering teams responsible for revenue-critical systems.
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          I’m drawn to problems where reliability matters, where ambiguity and
          scale test leadership decisions. I focus on clear ownership and
          predictable execution in environments that aren’t forgiving.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ActionLink href="/resume.pdf" variant="primary">
            Download resume
          </ActionLink>
          <ActionLink href="/experience" variant="secondary">
            View experience
          </ActionLink>
          <ActionLink href="/writing" variant="secondary">
            Read writing
          </ActionLink>
          <ActionLink href="/contact" variant="secondary">
            Contact
          </ActionLink>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-sm font-semibold tracking-tight text-neutral-900">
          What I’m known for
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Card title="Operating at scale">
            Owning critical services end-to-end: reliability, on-call, roadmap,
            and cross-team coordination.
          </Card>

          <Card title="Execution & predictability">
            Turning messy priorities into a plan: clear goals, measurable
            outcomes, and fewer surprises.
          </Card>

          <Card title="Modernization that pays">
            Replacing brittle legacy components with maintainable services
            focused on cost, performance, and operational simplicity.
          </Card>

          <Card title="Currently">
            Engineering Manager at SelectQuote, leading teams across CRM and
            quote engine systems.
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-sm font-semibold tracking-tight text-neutral-900">
          Quick links
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <a
            className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:bg-neutral-50"
            href="/resume.pdf"
          >
            <div className="text-sm font-semibold text-neutral-900">Resume</div>
            <div className="mt-2 text-sm text-neutral-700">One-page PDF</div>
          </a>

          <Link
            className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:bg-neutral-50"
            href="/experience"
          >
            <div className="text-sm font-semibold text-neutral-900">
              Experience
            </div>
            <div className="mt-2 text-sm text-neutral-700">
              Roles, scope, outcomes
            </div>
          </Link>

          <Link
            className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:bg-neutral-50"
            href="/writing"
          >
            <div className="text-sm font-semibold text-neutral-900">
              Writing
            </div>
            <div className="mt-2 text-sm text-neutral-700">
              Notes and essays (Substack)
            </div>
          </Link>

          <Link
            className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:bg-neutral-50"
            href="/contact"
          >
            <div className="text-sm font-semibold text-neutral-900">
              Contact
            </div>
            <div className="mt-2 text-sm text-neutral-700">Email + links</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
