import { defineStore } from 'pinia'
import { defaultAccordion } from './state/defaultAccordion'
import { headingData } from './state/headingData'
import { withoutBordersAccordion } from './state/withoutBordersAccordion'

export const useAccordionStore = defineStore('accordion', {
  state: () => ({
    headingData: headingData,
    defaultAccordion: defaultAccordion,
    withoutBordersAccordion: withoutBordersAccordion,
  }),
  getters: {
    getHeadingData(state) {
      return state.headingData
    },
    getDefaultAccordion(state) {
      return state.defaultAccordion
    },
    getWithoutBordersAccordion(state) {
      return state.withoutBordersAccordion
    },
  },
})
