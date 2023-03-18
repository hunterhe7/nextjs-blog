import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import generateRssFeed from "../lib/rss";
import layout from "../components/layout";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Thoughts</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <layout.Main>
        <layout.Headline head="Thoughts" />
        <layout.Navbar url="/" />
        <layout.ArticleList allPostsData={allPostsData} />
        <layout.Footer />
      </layout.Main>
    </>
  );
}

export async function getStaticProps() {
  await generateRssFeed();
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
