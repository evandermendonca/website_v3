export const ContactDetailsRow = ({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) => {
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
};
