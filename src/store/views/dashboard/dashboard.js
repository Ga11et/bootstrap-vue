import { defineStore } from 'pinia'
import { apexChartData } from './state/apexChartData'
import { headingData } from './state/headingData'
import { resentSales } from './state/resentSales'
import { smallCardsData } from './state/smallCardsData'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    headingData: headingData,
    smallCardsData: smallCardsData,
    apexChartData: apexChartData,
    reventSales: resentSales,
  }),
  getters: {
    getHeadingData(state) {
      return state.headingData
    },
    getSmallCardsData(state) {
      return state.smallCardsData
    },
    getApexChartData(state) {
      return state.apexChartData
    },
    getRecentSales(state) {
      return state.reventSales
    },
  },
})
