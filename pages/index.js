import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import StoreList from "../src/components/StoreList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [stores, setStores] = useState([]);
  const url = `http://localhost:9000/stores`;

  function getData() {
    axios.get(url).then((res) => {
      console.log(res);
      setStores(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>AWESOME FOOD STORE</title>
      </Head>
      <StoreList stores={stores} />
    </div>
  );
}
