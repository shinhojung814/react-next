import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
