import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import { CountProducts } from "@/app/api/data/route";

const Card1 = async ( searchParams ) => {
  const q = searchParams?.q || "";
  const user = await CountProducts(q);
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Products</span>
        <span className={styles.number}>{user}</span>
      </div>
    </div>
  );
};

export default Card1;
