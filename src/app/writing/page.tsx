import { SectionTitle } from "@/components/SectionTitle";
import { SubstackCard } from "@/components/SubstackCard";
import { ActionLink } from "@/components/ActionLink";
import { site } from "@/lib/site";
import { FeedItem } from "@/types/FeedItem";
import { getPosts } from "@/lib/helpers/getPosts";
import { formatDate } from "@/lib/helpers/formatDate";

const WritingPage = async () => {
  const { title, subtitle } = site.pageHeaders.writing;
  let posts: FeedItem[] = [];
  let substackUrl = "";

  try {
    const result = await getPosts();
    posts = result.posts;
    substackUrl = result.substackUrl;
  } catch {
    posts = [];
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <SectionTitle title={title} subtitle={subtitle} />

      <div className="mt-10 flex flex-wrap gap-3">
        {substackUrl && (
          <ActionLink href={substackUrl} variant="primary">
            View on Substack
          </ActionLink>
        )}

        <ActionLink href="/contact" variant="secondary">
          Contact
        </ActionLink>
      </div>

      <section className="mt-12 space-y-6">
        {posts.length === 0 ? (
          <SubstackCard>
            <div className="text-sm font-semibold tracking-tight text-neutral-900">
              No posts loaded
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Check back soon
            </p>
          </SubstackCard>
        ) : (
          posts.map((p) => (
            <a
              key={p.link}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-neutral-200 bg-white p-6 transition hover:bg-neutral-50"
            >
              <div className="flex items-baseline justify-between gap-6">
                <h2 className="text-base font-semibold tracking-tight text-neutral-900">
                  {p.title ?? "Untitled"}
                </h2>
                <div className="shrink-0 text-sm text-neutral-500">
                  {formatDate(p.pubDate)}
                </div>
              </div>

              {p.contentSnippet ? (
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  {p.contentSnippet}
                </p>
              ) : null}

              <div className="mt-4 text-sm font-medium text-neutral-900">
                Read →
              </div>
            </a>
          ))
        )}
      </section>
    </main>
  );
};

export default WritingPage;
