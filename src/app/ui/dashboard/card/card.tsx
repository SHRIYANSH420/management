import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({}) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}  />
      <div className={styles.texts}>
        <span className={styles.title}>Total User</span>
        <span className={styles.number}>13</span>        
      </div>
    </div>
  );
};

export default Card;