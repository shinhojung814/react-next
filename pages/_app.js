import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Top from "../components/Top";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
