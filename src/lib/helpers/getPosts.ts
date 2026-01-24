import Parser from "rss-parser";
import { FeedItem } from "@/types/FeedItem";

export const getPosts = async () => {
  const substackUrl = process.env.SUBSTACK_URL;
  if (!substackUrl) {
    return { posts: [] as FeedItem[], substackUrl: "" };
  }

  const feedUrl = `${substackUrl.replace(/\/+$/, "")}/feed`;

  const parser: Parser<unknown, FeedItem> = new Parser({
    timeout: 10_000,
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const feed = await parser.parseURL(feedUrl);
  const posts = (feed.items ?? []).slice(0, 12);

  return { posts, substackUrl };
};
