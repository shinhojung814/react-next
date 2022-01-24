import { Header } from "semantic-ui-react";
import Nav from "./Nav";
import topStyles from "../styles/top.module.css";

const Top = () => {
  return (
    <div>
      <div className={topStyles.top}>
        <Header className={topStyles.header} as="h1">
          AWESOME FOOD STORE
        </Header>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Top;
