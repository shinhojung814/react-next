import React from "react";
import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword="{keyword}" />
      <meta contents="{contents" />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "NEXT PRACTICE",
  keyword: "NEXT",
  contents: "PRACTICE",
};

export default HeadInfo;
