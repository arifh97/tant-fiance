// src/CandlestickChart.js
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const CandlestickChart = () => {
  const options = {
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'AAPL Stock Price'
    },
    series: [{
      type: 'candlestick',
      name: 'AAPL Stock Price',
      data: [
        // Sample data
        [1588291200000, 282.97, 286.97, 281.24, 285.34],
        [1588377600000, 285.08, 286.45, 282.85, 285.92],
        [1588636800000, 289.17, 291.63, 288.14, 291.52],
        [1588723200000, 291.75, 302.17, 289.11, 301.74],
        [1588809600000, 303.22, 305.65, 300.63, 303.74]
      ]
    }]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
};

export default CandlestickChart;
