import Image from "next/image";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import storeListStyles from "../styles/StoreList.module.css";

export default function StoreList({ stores }) {
  return (
    <div className={storeListStyles.store_list}>
      <Grid columns={4}>
        <Grid.Row>
          {stores.map((store) => (
            <Grid.Column key={store.id}>
              <Link href={`/store/${store.id}`}>
                <a>
                  <div className={storeListStyles.wrap}>
                    <Image
                      className={storeListStyles.store_image}
                      src={store.thumb}
                      alt={store.name}
                      height={200}
                      width={200}
                    />
                    <strong className={storeListStyles.store_name}>
                      {store.name}
                    </strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
