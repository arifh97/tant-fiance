import { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import dataGrouping from 'highcharts/modules/datagrouping';

dataGrouping(Highcharts);

const CandlestickChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      backgroundColor: 'transparent',
      borderRadius:8,
      height: 440,
    },
    plotOptions: {
      candlestick: {
        color: '#F82B37',
        upColor: '#16C777',
        lineColor: '#1B2130'
      },
      series: {
        lastPrice: {
          color: '#c0c0c0',
          enabled: true,
          label: {
            backgroundColor: '#fbfbfb',
            borderRadius: 0,
            enabled: true,
            padding: 3,
            style: {
              color: '#000'
            }
          }
        }
      }
    },
    xAxis: {
      gridLineColor: '#1B2130',
      gridLineWidth: 0,
      lineColor: '#1B2130',
      tickColor: '#1B2130',
      tickLength: 1,
      
      labels: {
        style: {
          color: '#8591B1',
        },
        formatter: function () {
          return Highcharts.dateFormat('%I:%M %p', this.value);
        }
      }
    },
    yAxis: {
      tickAmount: 11,
      crosshair: {
        label: {
          backgroundColor: '#fbfbfb',
          borderRadius: 0,
          enabled: true,
          padding: 3,
          style: {
            color: '#8591B1'
          },
          // formatter: function () {
          //     let value = this.value;
          //     return `${(value / 1000).toFixed(0)}k`;
          // }
        }
      },
      gridLineColor: '#1B213066',
      lineColor: '#10131F',
      gridLineWidth: 1,
      lineWidth: 0,
      labels: {
        align: 'left',
        style: {
          color: '#c5c7c9'
        }
      }
    },
    rangeSelector: {
      enabled:false,
      allButtonsEnabled: true,
      buttons: [{
        type: 'day',
        count: 1,
        text: '1D',
        dataGrouping: {
          forced: true,
          units: [['day', [1]]]
        }
      }, {
        type: 'day',
        count: 7,
        text: '7D',
        dataGrouping: {
          forced: true,
          units: [['day', [7]]]
        }
      }, {
        type: 'month',
        count: 1,
        text: '1M',
        dataGrouping: {
          forced: true,
          units: [['month', [1]]]
        }
      }, {
        type: 'year',
        count: 1,
        text: '1Y',
        dataGrouping: {
          forced: true,
          units: [['year', [1]]]
        }
      }, {
        type: 'all',
        text: 'All',
        dataGrouping: {
          forced: true,
          units: [['year', [1]]]
        }
      }],
      buttonTheme: {
        width: 32,
        fill: '#121722',
        padding: 1,
        states: {
          hover: {
            style: {
              color: '#fff',
              fill: '#121722',
            }
          }
        },
        style: {
          color: '#6B7280'
        }
      },
      selected: 7,
    },
    navigator: {
      enabled: false
    }, scrollbar: {
      enabled: false
    },
    title: {
      text: " "
    },
    series: [{
      type: 'candlestick',
      spacing: [150, 100, 150, 100],
      name: 'AAPL Stock Price',
      marker: {
        enabled: null, // auto
        lineWidth: 1,
        lineColor: '#999',
        borderRadius:6,
      },
      data: [],
    }]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://demo-live-data.highcharts.com/aapl-ohlc.json');
        const data = await response.json();

        setChartOptions(prevOptions => ({
          ...prevOptions,
          series: [{
            ...prevOptions.series[0],
            data: data
          }]
        }));
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={chartOptions}
      />
    </div>
  );
};

export default CandlestickChart;
