// src/ApexChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ChartTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [85, 75, 65],
      options: {
        chart: {
          height: 208,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
                color: "#888",
              },
              value: {
                fontSize: '16px',
                color: "#111",
                show:true,
              },
              total: {
                show: true,
                label: ' ',
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
        labels: ['Virtual No KYC', 'Virtual KYC', 'Physical'],
        legend: {
          show: true,
          position: 'right',
          verticalAlign: 'center',
          fontSize: '20px',
          fontWeight: '700',
          labels: {
            colors: ['#888'],
            useSeriesColors: false,
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={285}
          />
        </div>
      </div>
    );
  }
}

export default ChartTwo;
