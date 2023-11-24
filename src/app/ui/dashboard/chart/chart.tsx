"use client"
import React from 'react'
import styles from './chart.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 

const data = [
    {
      name: "Sun",
      Product: 400,
      Sold: 24,
    },
    {
      name: "Mon",
      Product: 325,
      Sold: 13,
    },
    {
      name: "Tue",
      Product: 200,
      Sold: 38,
    },
    {
      name: "Wed",
      Product: 278,
      Sold: 39,
    },
    {
      name: "Thu",
      Product: 189,
      Sold: 48,
    },
    {
      name: "Fri",
      Product: 239,
      Sold: 180,
    },
    {
      name: "Sat",
      Product: 349,
      Sold: 30,
    },
  ];
  


const Chart = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Weekly Recap</h2>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line type="monotone" dataKey="Product" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Sold" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart