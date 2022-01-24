import Image from "next/image";
import Link from "next/link";
import { Button, Header } from "semantic-ui-react";
import storeStyles from "../styles/Store.module.css";

const Store = ({ store }) => {
  const { name, url, description, image } = store;

  return (
    <>
      <div className={storeStyles.wrap}>
        <div className={storeStyles.store_image}>
          <Image src={image} alt={name} height={400} width={400} />
        </div>
      </div>
      <div
        className={storeStyles.store_info}
        style={{ marginTop: 20, marginBottom: 10 }}
      >
        <Header as="h3">{name}</Header>
        <a href={url}>{url ? `${url}/` : ""}</a>
      </div>
      <div>
        <p style={{ paddingBottom: 20, fontSize: 14 }}>{description}</p>
      </div>
      <br />
      <Link href={`/`}>
        <Button>
          <a>뒤로 가기</a>
        </Button>
      </Link>
    </>
  );
};

export default Store;
