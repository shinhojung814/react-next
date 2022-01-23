import Head from "next/head";
import "semantic-ui-css/semantic.min.css";

export default function Home({ stores }) {
  console.log(stores);

  return <div>{/* <h1>AWESOME FOOD STORE</h1> */}</div>;
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:9000/stores`);
  const stores = await res.json();

  return {
    props: {
      stores,
    },
    revalidate: 20,
  };
};
