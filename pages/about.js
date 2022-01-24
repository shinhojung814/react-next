import React from "react";
import Link from "next/link";
import { Button } from "semantic-ui-react";
import aboutStyles from "../src/styles/About.module.css";

const about = () => {
  return (
    <div className={aboutStyles.about}>
      <h1>AWESOME FOOD STORE에 오신 것을 환영합니다.</h1>
      <h3>
        브런치 카페, 아메리칸 그릴 레스토랑부터 푸드트럭, 야시장까지
        <br />
        AWESOME FOOD STORE에서는 다양한 음식과 맛을 즐길 수 있습니다.
      </h3>
      <br />
      <Link href={`/`}>
        <Button className={aboutStyles.button}>
          <a>뒤로 가기</a>
        </Button>
      </Link>
    </div>
  );
};

export default about;
