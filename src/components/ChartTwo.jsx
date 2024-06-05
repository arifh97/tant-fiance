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
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: false,
                formatter: function (w) {
                  return 99;
                },
              },
            },
          },
        },
        labels: ['Virtual No KYC', 'Virtual KYC', 'Physical'],
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
