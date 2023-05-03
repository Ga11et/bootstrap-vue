import { defineStore } from 'pinia'
import { defaultAlerts } from './state/defaultAlerts'
import { filledAlerts } from './state/filledAlerts'
import { headingData } from './state/headingData'
import { outlinedAlerts } from './state/outlinedAlerts'
import { withIconAlerts } from './state/withIconAlerts'
import { withSeparatorAlerts } from './state/withSeparatorAlerts'

export const useAlertsStore = defineStore('alerts', {
  state: () => ({
    defaultAlerts: defaultAlerts,
    filledAlerts: filledAlerts,
    headingData: headingData,
    withIconAlerts: withIconAlerts,
    withSeparatorAlerts: withSeparatorAlerts,
    outlinedAlerts: outlinedAlerts,
  }),
  getters: {
    getDefaultAlerts(state) {
      return state.defaultAlerts
    },
    getHeadingData(state) {
      return state.headingData
    },
    getFilledAlerts(state) {
      return state.filledAlerts
    },
    getWithIconAlerts(state) {
      return state.withIconAlerts
    },
    getWithSeparatorAlerts(state) {
      return state.withSeparatorAlerts
    },
    getOutlinedAlerts(state) {
      return state.outlinedAlerts
    },
  },
})
