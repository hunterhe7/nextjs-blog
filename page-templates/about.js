import { MDXProvider } from "@mdx-js/react";

import Head from "next/head";
import layout from "../components/layout";

export default (meta) =>
  ({ children }) =>
    (
      <MDXProvider>
        <>
          <Head>
            <title>{meta.title}</title>
          </Head>
          <layout.Main>
            <layout.Headline head="About" />
            <layout.Navbar url={meta.url} />
            <div className="prose">{children}</div>
            <layout.Footer />
          </layout.Main>
        </>
      </MDXProvider>
    );
