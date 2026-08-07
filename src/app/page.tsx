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
          <Pill>Reliable Execution</Pill>
          <Pill>Revenue-Critical Systems</Pill>
        </div>

        <h1 className="mt-7 text-4xl font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[3.25rem]">
          I lead engineering teams responsible for complex, high-scale systems.
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          I’m drawn to challenging problems where reliability and scale matter.
          I bring clarity to ambiguous environments and help teams consistently
          deliver high-quality, resilient software even when requirements are
          unclear.
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
            Owning complex systems end to end, from roadmap and reliability to
            on-call and cross-team coordination.
          </Card>

          <Card title="Execution & predictability">
            Turning ambiguous priorities into clear plans, measurable outcomes,
            and consistent delivery.
          </Card>

          <Card title="Pragmatic modernization">
            Replacing brittle legacy systems with simpler, more maintainable
            services that improve reliability, performance, and cost.
          </Card>

          <Card title="Technical leadership">
            Giving teams clear direction while staying close enough to the
            architecture and systems to make sound engineering decisions.
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
