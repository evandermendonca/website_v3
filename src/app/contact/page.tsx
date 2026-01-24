import { site } from "@/lib/site";
import { removeHttp } from "@/lib/helpers/removeHttp";
import { SectionTitle } from "@/components/SectionTitle";
import { ActionLink } from "@/components/ActionLink";
import { ContactDetailsCard } from "@/components/ContactDetailsCard";
import { ContactDetailsRow } from "@/components/ContactDetailsRow";

const ContactPage = () => {
  const { title, subtitle } = site.pageHeaders.contact;
  const { contactInfo } = site;

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <SectionTitle title={title} subtitle={subtitle} />

      <div className="mt-10 flex flex-wrap gap-3">
        <ActionLink href={`mailto:${contactInfo.email}`} variant="primary">
          Email me
        </ActionLink>
        <ActionLink href="/resume.pdf" variant="secondary">
          Download resume
        </ActionLink>
        <ActionLink href="/experience" variant="secondary">
          View experience
        </ActionLink>
      </div>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <ContactDetailsCard>
          <div className="text-sm font-semibold tracking-tight text-neutral-900">
            Details
          </div>

          <div className="mt-4 space-y-1">
            <ContactDetailsRow
              label="Email"
              value={contactInfo.email}
              href={`mailto:${contactInfo.email}`}
            />
            <ContactDetailsRow
              label="LinkedIn"
              value={removeHttp(contactInfo.socials.linkedIn)}
              href={`${contactInfo.socials.linkedIn}`}
            />
            <ContactDetailsRow
              label="GitHub"
              value={removeHttp(contactInfo.socials.github)}
              href={`${contactInfo.socials.github}`}
            />
          </div>

          <div className="mt-4 text-xs text-neutral-500">
            I will respond as soon as possible.
          </div>
        </ContactDetailsCard>

        <ContactDetailsCard>
          <div className="text-sm font-semibold tracking-tight text-neutral-900">
            What to reach out about
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-800">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
              <span>
                Engineering leadership roles where product or platform teams own
                production systems end-to-end.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
              <span>
                Teams dealing with reliability, on-call pain, or delivery
                bottlenecks.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
              <span>
                Replacing legacy systems when it clearly improves delivery and
                team health.
              </span>
            </li>
          </ul>

          <div className="mt-4 text-sm text-neutral-700">
            If one of these aligns with what you’re working on, feel free to
            reach out.
          </div>
        </ContactDetailsCard>
      </section>
    </main>
  );
};

export default ContactPage;
