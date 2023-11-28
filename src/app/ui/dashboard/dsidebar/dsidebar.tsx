"use client";
import React from "react";
import styles from "./dsidebar.module.css";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { signOut, useSession } from "next-auth/react";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Employee",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Contact",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "AboutUs",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Dsidebar = () => {
  const { data: session }: any = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/admin.jpg"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          {session ? (
            <>
              <span className={styles.username}>{session.user?.name}</span>
              <span className={styles.userTitle}>Administrator</span>
            </>
          ) : (
            <span className={styles.username}>Guest User</span> // You can provide a default value or handle it as needed
          )}
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button
        className={styles.logout}
        onClick={() => {
          signOut();
        }}
      >
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Dsidebar;
