import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>OVERALL STATISTICS OF COVID-19</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Covid-19 Statistics of Germany"
            }
          }
        }}
       width={600}
       height={100}
      />
    </div>
  );
}
export default PieChart;