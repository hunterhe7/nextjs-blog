import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import generateRssFeed from "../lib/rss";
import Main from "../components/main";
import Headline from "../components/headline";
import Navbar from "../components/navbar";
import ArticleList from "../components/articlelist";
import Footer from "../components/footer";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Thoughts</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Main>
        <Headline head="Thoughts" />
        <Navbar url="/" />
        <ArticleList allPostsData={allPostsData} />
        <Footer />
      </Main>
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
