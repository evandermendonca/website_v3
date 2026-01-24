import Link from "next/link";
import { WorkExperience } from "@/components/WorkExperience";
import { SectionTitle } from "@/components/SectionTitle";

const ExperiencePage = () => {
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
        <WorkExperience />
      </section>
    </main>
  );
};

export default ExperiencePage;
