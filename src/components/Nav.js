import Link from "next/link";
import { Menu } from "semantic-ui-react";

const Nav = () => {
  const activeItem = "home";

  return (
    <div>
      <Menu>
        <Menu.Item name="about" active={activeItem === "about"}>
          <Link href={`/about`}>
            <a>ABOUT</a>
          </Link>
        </Menu.Item>

        <Menu.Item name="stores" active={activeItem === "stores"}>
          <Link href={`/`}>
            <a>STORES</a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
