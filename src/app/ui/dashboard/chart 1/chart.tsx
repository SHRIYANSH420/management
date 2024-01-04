"use client";
import React from "react";
import styles from "./chart.module.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: 'Basket',
    gross_sales: 143815.50,
    returns: -4439.69,
  },
  {
    name: 'Art&Sculpture',
    gross_sales: 90316.60,
    returns: -2879,
  },
  {
    name: 'Jewelry',
    gross_sales: 31048.00,
    returns: -509.20,
  },
  {
    name: 'Home Decor',
    gross_sales: 27114.55,
    returns: -423.35,
  },
  {
    name: 'Kitchen',
    gross_sales: 16096.00,
    returns: -328.07,
  },
  {
    name: 'Christmas',
    gross_sales: 15476.00,
    returns: -670.00,
  },
  {
    name: 'Accessories	',
    gross_sales: 3892.40,
    returns: 0.00,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gross Sales vs Returns by Product </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="gross_sales" fill="#8884d8" />
          <Bar dataKey="returns" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
