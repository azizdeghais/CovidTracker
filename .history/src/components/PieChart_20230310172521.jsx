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
              text: "OVERALL STATICS"
            }
          }
        }}

      />
    </div>
  );
}
export default PieChart;