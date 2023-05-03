import { defineStore } from 'pinia'
import { headingData } from './state/headingData'
import { defaultBadges } from './state/defaultBadges'
import { pillBadges } from './state/pillBadges'
import { iconBadges } from './state/iconBadges'
import { borderBadges } from './state/borderBadges'
import { buttonBadges } from './state/buttonBadges'
import { headingBadges } from './state/headingBadges'

export const useBadgesStore = defineStore('badges', {
  state: () => ({
    headingData: headingData,
    defaultBadges: defaultBadges,
    pillBadges: pillBadges,
    iconBadges: iconBadges,
    borderBadges: borderBadges,
    buttonBadges: buttonBadges,
    headingBadges: headingBadges,
  }),
  getters: {
    getHeadingData(state) {
      return state.headingData
    },
    getDefaultBadges(state) {
      return state.defaultBadges
    },
    getPillBadges(state) {
      return state.pillBadges
    },
    getIconBadges(state) {
      return state.iconBadges
    },
    getBorderBadges(state) {
      return state.borderBadges
    },
    getButtonBadges(state) {
      return state.buttonBadges
    },
    getHeadingBadges(state) {
      return state.headingBadges
    },
  },
})
