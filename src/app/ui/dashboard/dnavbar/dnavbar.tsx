"use client";
import { usePathname } from "next/navigation";
import styles from "./dnavbar.module.css";
import { useSession } from "next-auth/react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Dnavbar = () => {
  const pathname = usePathname();
  const { data: session }: any = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div>{session ? session.user?.email : "Guest User"}</div>
      </div>
    </div>
  );
};

export default Dnavbar;
