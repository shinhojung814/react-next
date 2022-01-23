import { Header } from "semantic-ui-react";
import Nav from "./Nav";
import topStyles from "../styles/Top.module.css";

const Top = () => {
  return (
    <div className={topStyles.top}>
      <Header className={topStyles.header} as="h1">
        AWESOME FOOD STORE
      </Header>
      <Nav />
    </div>
  );
};

export default Top;
