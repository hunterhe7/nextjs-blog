import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote"; // 渲染有组件的MDX文件

import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import components from "../../components";

export default function Post({ source, frontMatter }) {
  console.log("source:", source);
  return (
    // {/* 可以改写一些markdown的样式 */}
    <MDXProvider components={components}> // 这个放改写的样式
      <>
        <Head>
          <title>{frontMatter.title}</title>
        </Head>
        <components.Main>
          <components.Headline head={frontMatter.title} />
          <div>
            <components.Date dateString={frontMatter.date} />
          </div>
          <MDXRemote {...source} />
          <components.Footer />
        </components.Main>
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
