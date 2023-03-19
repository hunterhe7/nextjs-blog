import fs from "fs";
import RSS from "rss";
import { getSortedPostsData, getPostData } from "./posts";
import { renderToString } from "react-dom/server";
import { MDXRemote } from "next-mdx-remote";

export default async function generateRssFeed() {
  const site_url = "https://www.hunterhe.info";

  const feedOptions = {
    title: "Hunter's Home",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/favicon.ico`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  const allPosts = await getSortedPostsData();

  await Promise.all(
    allPosts.map(async (post) => {
      const postData = await getPostData(post.id);
      feed.item({
        title: post.title,
        url: `${site_url}/posts/${post.id}`,
        date: post.date,
        description: renderToString(<MDXRemote {...postData.source} />),
      });
    })
  );
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
