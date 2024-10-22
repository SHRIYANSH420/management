import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import { fetchEmpCount } from "@/app/api/data/route";
const Card = async ( searchParams ) => {
  const q = searchParams?.q || "";

  const user = await fetchEmpCount(q);
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total User</span>
        <span className={styles.number}>{user}</span>
      </div>
    </div>
  );
};

export default Card;
