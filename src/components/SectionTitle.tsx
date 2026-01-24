export const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
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
};
