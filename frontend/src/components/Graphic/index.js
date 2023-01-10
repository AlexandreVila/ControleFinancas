
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";


export default function Graphic({ item }) {
   
  return (
    <BarChart
      width={500}
      height={300}
      data={item}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="valor" tickFormatter={(value)=> {return `R$ ${value}`}}/>
      <YAxis domain={[0, 'dataMax' ]}/>
      <Bar dataKey="valor" />
    </BarChart>
  );
}