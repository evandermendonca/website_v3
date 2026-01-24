import { ExperienceCard } from "./ExperienceCard";
import { resume } from "@/lib/resume";

const RoleHeader = ({
  company,
  location,
  title,
  dates,
}: {
  company: string;
  location: string;
  title: string;
  dates: string;
}) => {
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

export const WorkExperience = () => {
  const workExperience = resume.experience;

  return (
    <>
      {workExperience.length === 0 ? (
        <div className="mt-4 text-sm font-medium text-neutral-900">
          Nothing here
        </div>
      ) : (
        workExperience.map((experience, index) => {
          <ExperienceCard key={index}>
            {index === 0 ? (
              <div>This is a test message</div>
            ) : (
              <>
                <RoleHeader
                  company={experience.company}
                  location={experience.location}
                  title={experience.title}
                  dates={`${experience.startDate} – ${experience.endDate}`}
                />

                {experience.impact.length === 0 ? (
                  <div>No impact bullets.</div>
                ) : (
                  experience.impact.map((bullet) => {
                    <BulletList>
                      <Bullet>{bullet}</Bullet>
                    </BulletList>;
                  })
                )}
              </>
            )}
          </ExperienceCard>;
        })
      )}
    </>
  );
};
