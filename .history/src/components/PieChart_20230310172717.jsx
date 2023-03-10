import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>OVERALL STATISTICS OF COVID-19 </h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "PEOPLE RECOVERED FROM COVID-19"
            }
          }
        }}
       width='50px'
       height='20px'
      />
    </div>
  );
}
export default PieChart;