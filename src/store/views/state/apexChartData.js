export const apexChartData = {
  heading: 'Reports',
  filter: 'Today',
  filterNav: [
    { id: '1', text: 'Today' },
    { id: '2', text: 'This Month' },
    { id: '3', text: 'This Year' },
  ],
  series: [
    {
      name: 'Sales',
      data: [31, 40, 28, 51, 42, 82, 56],
    },
    {
      name: 'Revenue',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'Customers',
      data: [15, 11, 32, 18, 9, 24, 11],
    },
  ],
  options: {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
}
