import { Navbar } from "@/components/Navbar";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Card from "../ui/dashboard/card/card";
import style from "../ui/dashboard/dashboard.module.css";
import Chart from "../ui/dashboard/chart/chart";

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.cards}>
          <Card />
          <Card />
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
