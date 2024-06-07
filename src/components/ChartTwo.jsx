// src/ApexChart.js

import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [85, 75, 65],
      colors: ['red'],
      options: {
        chart: {
          height: 400,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "40%"
            },
             track: {
              show: true,
              background: '#121824',
              
            },
            dataLabels: {
              showOn: "always",
              name: {
                fontSize: "22px",
                color: "#A8ABB3",
              },
              value: {
                fontSize: "24px",
                color: "#A8ABB3",
                show: true,
              },
              total: {
                show: true,
                formatter: function (w) {
                  return 99;
                },
              },
            },
          },
        },

        stroke: {
          lineCap: "round",
        },
        fill: {
          opacity: 1,
          colors: ["#0257FF", "#01C1FF", "#01FFA4"],
        },
        labels: ["Virtual No KYC", "Virtual KYC", "Physical"],
        legend: {
          show: true,
          position: "right",
          right: "70px",
          verticalAlign: "center",
          fontSize: "20px",
          fontWeight: "700",
          labels: {
            colors: ["#fff"],
            fontWeight: "500",
            useSeriesColors: false,
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="w-[330px] md:w-full" id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={400}
        />
      </div>
    );
  }
}

export default ChartTwo;
