import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
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
        width={400}
        height={400}
      />
    </div>
  );
}
export default PieChart;