import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Store from "../../src/components/Store";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const url = `http://localhost:9000/stores/${id}`;
  const [store, setStore] = useState([]);

  function getData() {
    axios.get(url).then((res) => {
      console.log(res);
      setStore(res.data);
    });
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Store store={store} />;
};

export default Post;
