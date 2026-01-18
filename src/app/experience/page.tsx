import Link from "next/link";

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 text-lg leading-relaxed text-neutral-700">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

function RoleHeader({
  company,
  location,
  title,
  dates,
}: {
  company: string;
  location: string;
  title: string;
  dates: string;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <div>
        <div className="text-lg font-semibold tracking-tight text-neutral-900">
          {company}
        </div>
        <div className="mt-0.5 text-sm text-neutral-500">{location}</div>
      </div>
      <div className="text-sm text-neutral-600">
        <span className="font-medium text-neutral-800">{title}</span>{" "}
        <span className="text-neutral-400">•</span> {dates}
      </div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      {children}
    </div>
  );
}

function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-800">
      {children}
    </ul>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
      <span>{children}</span>
    </li>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 text-sm font-semibold tracking-tight text-neutral-900">
      {children}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <SectionTitle
        title="Experience"
        subtitle="Engineering leadership and hands-on delivery across revenue-critical platforms, modernization, and operational reliability."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          href="/resume.pdf"
        >
          Download resume (PDF)
        </a>
        <Link
          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          href="/contact"
        >
          Contact
        </Link>
      </div>

      <section className="mt-12 space-y-12">
        <Card>
          <RoleHeader
            company="SelectQuote Insurance Services"
            location="Remote — Kansas City, MO (remote)"
            title="Engineering Manager"
            dates="Apr 2022 – Present"
          />

          <Subheading>Scope</Subheading>
          <div className="mt-3 grid gap-4 rounded-2xl border border-neutral-100 bg-neutral-100/60 p-5 sm:grid-cols-2">
            <div>
              <div className="text-xs font-semibold text-neutral-900">Org</div>
              <div className="mt-1 text-sm text-neutral-700">
                Two teams; 12+ engineers, 4 QA, 2 PMs, 2 BPOs
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-neutral-900">
                Platforms
              </div>
              <div className="mt-1 text-sm text-neutral-700">
                Senior CRM & Senior Quote Engine
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-neutral-900">
                Business impact
              </div>
              <div className="mt-1 text-sm text-neutral-700">
                ~$250M annual revenue
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-neutral-900">
                Operating model
              </div>
              <div className="mt-1 text-sm text-neutral-700">
                Delivery + reliability, on-call health, cross-team coordination
              </div>
            </div>
          </div>

          <Subheading>Selected impact</Subheading>
          <BulletList>
            <Bullet>
              Led annual AEP readiness and execution, aligning delivery, system
              hardening, and staffing to keep platforms stable during peak
              business risk.
            </Bullet>
            <Bullet>
              Improved delivery predictability, sustaining 90%+ sprint
              completion for committed work.
            </Bullet>
            <Bullet>
              Modernized critical paths to reduce operational risk and improve
              maintainability across revenue-critical systems.
            </Bullet>
            <Bullet>
              Established durable execution rhythms with clear ownership,
              measurable goals, and fewer surprise escalations.
            </Bullet>
          </BulletList>

          <Subheading>Core responsibilities</Subheading>
          <BulletList>
            <Bullet>
              Owned operational health and delivery for Senior CRM and Senior
              Quote Engine platforms.
            </Bullet>
            <Bullet>
              Managed performance, growth, and stakeholder alignment to drive
              accountable execution.
            </Bullet>
          </BulletList>
        </Card>

        <Card>
          <RoleHeader
            company="SelectQuote Insurance Services"
            location="Remote — Kansas City, MO (remote)"
            title="Senior Software Engineer"
            dates="Sep 2021 – Apr 2022"
          />

          <Subheading>Selected impact</Subheading>
          <BulletList>
            <Bullet>
              Tech led modernization replacing a legacy lead-ingestion system
              with a Node-based service, delivering hundreds of thousands in
              annual cost savings.
            </Bullet>
            <Bullet>
              Delivered full-stack improvements across revenue-critical systems
              supporting the Senior division.
            </Bullet>
            <Bullet>
              Promoted from Software Engineer I to Senior Software Engineer
              within six months based on impact and growth.
            </Bullet>
          </BulletList>
        </Card>

        <Card>
          <RoleHeader
            company="Allusion Software"
            location="Wellington, FL"
            title="Software Engineer"
            dates="May 2021 – Sep 2021"
          />

          <BulletList>
            <Bullet>
              Built full-stack applications using React, Node, and Google Cloud
              (Firebase) for custom CRM and tracking solutions.
            </Bullet>
            <Bullet>
              Developed reusable components and backend services to support
              rapid delivery across multiple client projects.
            </Bullet>
          </BulletList>
        </Card>

        <Card>
          <RoleHeader
            company="Genesis Global Technologies"
            location="Remote — Fort Myers, FL"
            title="Software Engineer"
            dates="Oct 2020 – May 2021"
          />

          <BulletList>
            <Bullet>
              Developed backend services and REST APIs using C#, ASP.NET,
              JavaScript, and SQL for CRM and marketing platforms.
            </Bullet>
            <Bullet>
              Integrated third-party services (Twilio, Zapier) to enable
              cross-system automation and communication.
            </Bullet>
          </BulletList>
        </Card>
      </section>
    </main>
  );
}
