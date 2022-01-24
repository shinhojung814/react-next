import Head from "next/head";
import Top from "./Top";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Top />
      <Head>
        <title>AWESOME FOOD STORE</title>
        <meta keyword="AWESOME FOOD STORE" />
        <meta contents="AWESOME FOOD STORE" />
      </Head>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
