/** @jsxImportSource @emotion/react */
import Chart from 'react-apexcharts'

const BarChart = () => {
  return <Chart options={options} series={series} type="bar" height={350} />
}

export default BarChart

const series = [
  {
    name: 'Actual',
    data: [
      {
        x: '2011',
        y: 12,
        goals: [
          {
            name: 'Expected',
            value: 14,
            strokeWidth: 5,
            strokeColor: '#775DD0',
          },
        ],
      },
      {
        x: '2012',
        y: 44,
        goals: [
          {
            name: 'Expected',
            value: 54,
            strokeWidth: 5,
            strokeColor: '#775DD0',
          },
        ],
      },
      {
        x: '2013',
        y: 54,
        goals: [
          {
            name: 'Expected',
            value: 52,
            strokeWidth: 5,
            strokeColor: '#775DD0',
          },
        ],
      },
      {
        x: '2014',
        y: 66,
        goals: [
          {
            name: 'Expected',
            value: 65,
            strokeWidth: 5,
            strokeColor: '#775DD0',
          },
        ],
      },
      {
        x: '2015',
        y: 81,
        goals: [
          {
            name: 'Expected',
            value: 66,
            strokeWidth: 5,
            strokeColor: '#775DD0',
          },
        ],
      },
      {
        x: '2016',
        y: 67,
        goals: [
          {
            name: 'Expected',
            value: 70,
            strokeWidth: 5,
            strokeColor: '#775DD0',
          },
        ],
      },
    ],
  },
]

const options = {
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function (val, opt) {
      const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals

      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    },
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#00E396', '#775DD0'],
    },
  },
}
