import Image from "next/image";
import Link from "next/link";
import HeadInfo from "../components/HeadInfo";
import storesStyles from "../styles/Stores.module.css";

const stores = ({ stores }) => {
  return (
    <div>
      <HeadInfo title="STORES" />
      <h1>STORES</h1>
      <ul className={storesStyles.stores}>
        {stores.map((store) => (
          <li key={store.id}>
            <Link href={`/stores/${store.id}`}>
              <a>
                <Image
                  src={store.thumb}
                  alt={store.name}
                  height={100}
                  width={100}
                />
                <span>{store.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

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

export default stores;
