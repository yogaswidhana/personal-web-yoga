import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Yoga Swara Widhana&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Yoga Swara Widhana, S.Kom, Web Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Yoga Swara Widhana. A Web Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Yoga Swara Widhana, S.Kom"
      />

      <link
        rel="icon"
        href="/yoga.ico"
      />
    </Head>
  );
}
