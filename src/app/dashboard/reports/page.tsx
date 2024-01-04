import React from 'react'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Chart from "@/app/ui/dashboard/chart/chart";
import style from "@/app/ui/dashboard/report/report.module.css"
import Chart1 from "@/app/ui/dashboard/chart 1/chart";
import Chart2 from "@/app/ui/dashboard/chart 2/chart"

const report = async () => {
    const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <Chart1 />
        <Chart2 />
      </div>
    </div>
  )
}

export default report