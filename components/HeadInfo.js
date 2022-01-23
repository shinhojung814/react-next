import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "AWESOME FOOD STORE",
  keyword: "AWESOME",
  contents: "FOOD STORE",
};

export default HeadInfo;
