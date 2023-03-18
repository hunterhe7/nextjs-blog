import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote"; // 渲染有组件的MDX文件

import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

import layout from "../../components/layout";
import theme from "../../components/theme";

export default function Post({ source, frontMatter }) {
  return (
    <MDXProvider components={{ ...layout, ...theme }} className="prose">
      <>
        <Head>
          <title>{frontMatter.title}</title>
        </Head>
        <layout.Main>
          <layout.Headline head={frontMatter.title} />
          <div>
            <layout.Date dateString={frontMatter.date} />
          </div>
          <div className="prose">
            <MDXRemote {...source} />
          </div>
          <layout.Footer />
        </layout.Main>
      </>
    </MDXProvider>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      source: postData.source,
      frontMatter: postData.frontMatter,
    },
  };
}
