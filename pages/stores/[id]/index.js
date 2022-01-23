import Image from "next/image";
import Link from "next/link";

const index = ({ store }) => {
  const { name, image, description } = store;

  return (
    <div>
      <h1>{name}</h1>
      <Image src={image} alt={name} height={400} width={400} />
      <h4>{description}</h4>
      <Link href="/stores">
        <a href="">뒤로 가기</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`http://localhost:9000/stores/${id}`);
  const store = await res.json();
  return {
    props: {
      store,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:9000/stores`);
  const stores = await res.json();

  const ids = stores.map((store) => store.id);
  const paths = ids.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default index;
