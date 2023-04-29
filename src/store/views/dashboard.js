import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    headingData: {
      heading: 'Dashboard',
      crumbs: [
        { id: '1', text: 'Home' },
        { id: '2', text: 'Dashboard' },
      ],
    },
    smallCardsData: [
      {
        id: '1',
        heading: 'Sales',
        filter: 'Today',
        filterNav: [
          { id: '1', text: 'Today' },
          { id: '2', text: 'This Month' },
          { id: '3', text: 'This Year' },
        ],
        amount: '145',
        change: -12,
        type: 'sales',
      },
      {
        id: '2',
        heading: 'Revenue',
        filter: 'This Month',
        filterNav: [
          { id: '1', text: 'Today' },
          { id: '2', text: 'This Month' },
          { id: '3', text: 'This Year' },
        ],
        amount: '145',
        change: -12,
        type: 'revenue',
      },
      {
        id: '3',
        heading: 'Customers',
        filter: 'This Year',
        filterNav: [
          { id: '1', text: 'Today' },
          { id: '2', text: 'This Month' },
          { id: '3', text: 'This Year' },
        ],
        amount: '145',
        change: -12,
        type: 'customers',
      },
    ],
  }),
  getters: {
    getHeadingData(state) {
      return state.headingData
    },
    getSmallCardsData(state) {
      return state.smallCardsData
    },
  },
})
