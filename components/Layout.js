import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Head>
        <title>NEXT PRACTICE</title>
        <meta keyword="NEXT" />
        <meta contents="PRACTICE" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
