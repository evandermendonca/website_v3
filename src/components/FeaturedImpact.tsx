export const FeaturedImpact = ({
  organization,
  businessImpact,
  platforms,
  operatingModel,
}: {
  organization: string;
  businessImpact: string;
  platforms: string;
  operatingModel: string;
}) => {
  return (
    <>
      <div className="mt-3 grid gap-4 rounded-2xl border border-neutral-100 bg-neutral-100/60 p-5 sm:grid-cols-2">
        <div>
          <div className="text-xs font-semibold text-neutral-900">Org</div>
          <div className="mt-1 text-sm text-neutral-700">{organization}</div>
        </div>

        <div>
          <div className="text-xs font-semibold text-neutral-900">
            Platforms
          </div>
          <div className="mt-1 text-sm text-neutral-700">{platforms}</div>
        </div>

        <div>
          <div className="text-xs font-semibold text-neutral-900">
            Business impact
          </div>
          <div className="mt-1 text-sm text-neutral-700">{businessImpact}</div>
        </div>

        <div>
          <div className="text-xs font-semibold text-neutral-900">
            Operating model
          </div>
          <div className="mt-1 text-sm text-neutral-700">{operatingModel}</div>
        </div>
      </div>
    </>
  );
};
