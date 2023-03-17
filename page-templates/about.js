import { MDXProvider } from "@mdx-js/react";

import Head from "next/head";
import components from "../components";

export default (meta) =>
  ({ children }) =>
    (
      <MDXProvider>
        <>
          <Head>
            <title>{meta.url}</title>
          </Head>

          <components.Main>
            <components.Headline head="About" />
            <components.Navbar url={meta.url} />
            {children}
            <components.Footer />
          </components.Main>
        </>
      </MDXProvider>
    );
