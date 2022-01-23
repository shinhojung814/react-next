import Link from "next/link";

const Nav = () => {
  return (
    <div className="ui two item menu">
      <Link href={`/about`}>
        <a className="item">ABOUT</a>
      </Link>
      <Link href={`/stores`}>
        <a className="item">STORES</a>
      </Link>
    </div>
  );
};

export default Nav;
