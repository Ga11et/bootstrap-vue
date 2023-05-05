import { defineStore } from 'pinia'
import { defaultCard } from './state/defaultCard'
import { headingData } from './state/headingData'
import { specialCard } from './state/specialCard'
import { withBottomImageCard } from './state/withBottomImageCard'
import { withHeaderAndFooterCard } from './state/withHeaderAndFooterCard'
import { withLeftImageCard } from './state/withLeftImageCard'
import { withOverlayImageCard } from './state/withOverlayImageCard'
import { withTitleButtonsLinksCard } from './state/withTitleButtonsLinksCard'
import { withTopImageCard } from './state/withTopImageCard'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    headingData: headingData,
    defaultCard: defaultCard,
    specialCard: specialCard,
    withBottomImageCard: withBottomImageCard,
    withLeftImageCard: withLeftImageCard,
    withTopImageCard: withTopImageCard,
    withOverlayImageCard: withOverlayImageCard,
    withHeaderAndFooterCard: withHeaderAndFooterCard,
    withTitleButtonsLinksCard: withTitleButtonsLinksCard,
  }),
  getters: {
    getHeadingData(state) {
      return state.headingData
    },
    getDefaultCard(state) {
      return state.defaultCard
    },
    getSpecialCard(state) {
      return state.specialCard
    },
    getWithBottomImageCard(state) {
      return state.withBottomImageCard
    },
    getWithLeftImageCard(state) {
      return state.withLeftImageCard
    },
    getWithTopImageCard(state) {
      return state.withTopImageCard
    },
    getWithOverlayImageCard(state) {
      return state.withOverlayImageCard
    },
    getWithHeaderAndFooterCard(state) {
      return state.withHeaderAndFooterCard
    },
    getWithTitleButtonsLinksCard(state) {
      return state.withTitleButtonsLinksCard
    },
  },
})
