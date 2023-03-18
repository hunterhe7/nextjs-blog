import { MDXProvider } from "@mdx-js/react";

import Head from "next/head";
import layout from "../components/layout";

export default (meta) =>
  ({ children }) =>
    (
      <MDXProvider>
        <>
          <Head>
            <title>{meta.url}</title>
          </Head>
          <layout.Main>
            <layout.Headline head="About" />
            <layout.Navbar url={meta.url} />
            {children}
            <layout.Footer />
          </layout.Main>
        </>
      </MDXProvider>
    );
