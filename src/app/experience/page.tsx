import { WorkExperience } from "@/components/WorkExperience";
import { SectionTitle } from "@/components/SectionTitle";
import { ActionLink } from "@/components/ActionLink";
import { site } from "@/lib/site";

const ExperiencePage = () => {
  const { title, subtitle } = site.pageHeaders.experience;

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <SectionTitle title={title} subtitle={subtitle} />

      <div className="mt-10 flex flex-wrap gap-3">
        <ActionLink href="/resume.pdf" variant="primary">
          Download resume (PDF)
        </ActionLink>

        <ActionLink href="/contact" variant="secondary">
          Contact
        </ActionLink>
      </div>

      <section className="mt-12 space-y-12">
        <WorkExperience />
      </section>
    </main>
  );
};

export default ExperiencePage;
