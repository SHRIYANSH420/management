"use client"
import React from 'react'
import styles from './chart.module.css'; 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Basket',
    qty: 1461,
    sale: 143815,
  },
  {
    name: 'Art&Sculpture',
    qty: 1427,
    sale: 90316,
  },
  {
    name: 'Jewelry',
    qty: 991,
    sale: 31048,
  },
  {
    name: 'Home Decor',
    qty: 404,
    sale: 27114,
  },
  {
    name: 'Kitchen',
    qty: 809,
    sale: 16096,
  },
  {
    name: 'Christmas',
    qty: 575,
    sale: 15476,
  },
  {
    name: 'Accessories	',
    qty: 84,
    sale: 3892,
  },
];



const Chart2 = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Gross Sales by Product </h2>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="sale" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="qty" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart2