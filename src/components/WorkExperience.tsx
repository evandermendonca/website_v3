import { ExperienceCard } from "./ExperienceCard";
import { FeaturedImpact } from "./FeaturedImpact";
import { resume } from "@/lib/resume";

type Experience = (typeof resume.experience)[number];

const CompanyHeader = ({
  company,
  location,
  dates,
}: {
  company: string;
  location: string;
  dates?: string;
}) => {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <div>
        <div className="text-lg font-semibold tracking-tight text-neutral-900">
          {company}
        </div>
        <div className="mt-0.5 text-sm text-neutral-500">{location}</div>
      </div>

      {dates && <div className="text-sm text-neutral-500">{dates}</div>}
    </div>
  );
};

const RoleHeader = ({ title, dates }: { title: string; dates: string }) => {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <div className="text-sm font-semibold tracking-tight text-neutral-900">
        {title}
      </div>

      <div className="text-sm text-neutral-500">{dates}</div>
    </div>
  );
};

const BulletList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-800">
      {children}
    </ul>
  );
};

const Bullet = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
      <span>{children}</span>
    </li>
  );
};

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 text-sm font-semibold tracking-tight text-neutral-900">
      {children}
    </div>
  );
}

const RoleTimeline = ({
  roles,
  showFeaturedImpact,
}: {
  roles: Experience[];
  showFeaturedImpact: boolean;
}) => {
  return (
    <div className="mt-8">
      {roles.map((experience, index) => {
        const isCurrentRole = index === 0;
        const isLastRole = index === roles.length - 1;

        return (
          <div
            key={`${experience.title}-${experience.startDate}`}
            className="relative pl-8"
          >
            {/* Timeline line */}
            {!isLastRole && (
              <div className="absolute left-[6px] top-4 h-full w-px bg-neutral-200" />
            )}

            {/* Timeline dot */}
            <div
              className={[
                "absolute left-0 top-1 h-[13px] w-[13px] rounded-full",
                isCurrentRole
                  ? "bg-neutral-900"
                  : "border-2 border-neutral-400 bg-white",
              ].join(" ")}
            />

            <RoleHeader
              title={experience.title}
              dates={`${experience.startDate} – ${experience.endDate}`}
            />

            {showFeaturedImpact && isCurrentRole && (
              <>
                {resume.featuredImpact && (
                  <>
                    <Subheading>Scope</Subheading>
                    <FeaturedImpact
                      organization={resume.featuredImpact.org}
                      platforms={resume.featuredImpact.platforms}
                      operatingModel={resume.featuredImpact.operatingModel}
                      businessImpact={resume.featuredImpact.businessImpact}
                    />
                  </>
                )}
              </>
            )}

            <Subheading>Impact</Subheading>

            {experience.impact.length === 0 ? (
              <div className="mt-4 text-sm text-neutral-600">
                No impact bullets.
              </div>
            ) : (
              <BulletList>
                {experience.impact.map((bullet) => (
                  <Bullet key={bullet}>{bullet}</Bullet>
                ))}
              </BulletList>
            )}

            {!isLastRole && <div className="h-6" />}
          </div>
        );
      })}
    </div>
  );
};

export const WorkExperience = () => {
  const workExperience = resume.experience;

  if (workExperience.length === 0) {
    return (
      <div className="mt-4 text-sm font-medium text-neutral-900">
        Nothing here
      </div>
    );
  }

  const groupedExperience = workExperience.reduce<Experience[][]>(
    (groups, experience) => {
      const lastGroup = groups[groups.length - 1];

      if (lastGroup && lastGroup[0].company === experience.company) {
        lastGroup.push(experience);
      } else {
        groups.push([experience]);
      }

      return groups;
    },
    []
  );

  return (
    <>
      {groupedExperience.map((roles, groupIndex) => {
        const company = roles[0].company;
        const location = roles[0].location;
        const hasMultipleRoles = roles.length > 1;

        const companyDates = hasMultipleRoles
          ? `${roles[roles.length - 1].startDate} – ${roles[0].endDate}`
          : undefined;

        return (
          <ExperienceCard
            key={`${company}-${roles[roles.length - 1].startDate}`}
          >
            {hasMultipleRoles ? (
              <>
                <CompanyHeader
                  company={company}
                  location={location}
                  dates={companyDates}
                />

                <RoleTimeline
                  roles={roles}
                  showFeaturedImpact={groupIndex === 0}
                />
              </>
            ) : (
              <>
                <CompanyHeader company={company} location={location} />

                <div className="mt-6">
                  <RoleHeader
                    title={roles[0].title}
                    dates={`${roles[0].startDate} – ${roles[0].endDate}`}
                  />

                  <Subheading>Impact</Subheading>

                  {roles[0].impact.length === 0 ? (
                    <div className="mt-4 text-sm text-neutral-600">
                      No impact bullets.
                    </div>
                  ) : (
                    <BulletList>
                      {roles[0].impact.map((bullet) => (
                        <Bullet key={bullet}>{bullet}</Bullet>
                      ))}
                    </BulletList>
                  )}
                </div>
              </>
            )}
          </ExperienceCard>
        );
      })}
    </>
  );
};
