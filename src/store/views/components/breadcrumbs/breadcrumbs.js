import { defineStore } from 'pinia'
import { centeredCrumbs } from './state/centeredCrumbs'
import { defaultCrumbs } from './state/defaultCrumbs'
import { headingData } from './state/headingData'
import { rightCrumbs } from './state/rightCrumbs'
import { withDividersCrumbs } from './state/WithDividersCrumbs'
import { withHomeIconCrumbs } from './state/withHomeIconCrumbs'
import { withTitleCrumbs } from './state/withTitleCrumbs'

export const useBreadcrumbsStore = defineStore('breadcrumbs', {
  state: () => ({
    headingData: headingData,
    defaultCrumbs: defaultCrumbs,
    centeredCrumbs: centeredCrumbs,
    rightCrumbs: rightCrumbs,
    withHomeIconCrumbs: withHomeIconCrumbs,
    withTitleCrumbs: withTitleCrumbs,
    withDividersCrumbs: withDividersCrumbs,
  }),
  getters: {
    getHeadingData(state) {
      return state.headingData
    },
    getDefaultCrumbs(state) {
      return state.defaultCrumbs
    },
    getCenteredCrumbs(state) {
      return state.centeredCrumbs
    },
    getRightCrumbs(state) {
      return state.rightCrumbs
    },
    getWithHomeIconCrumbs(state) {
      return state.withHomeIconCrumbs
    },
    getWithTitleCrumbs(state) {
      return state.withTitleCrumbs
    },
    getWithDividersCrumbs(state) {
      return state.withDividersCrumbs
    },
  },
})
