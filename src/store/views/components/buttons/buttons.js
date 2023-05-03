import { defineStore } from 'pinia'
import { defaultButtons } from './state/defaultButtons'
import { groupedButtons } from './state/groupedButtons'
import { headingData } from './state/headingData'
import { iconButtons } from './state/iconButtons'
import { outlineButtons } from './state/outlineButtons'
import { roundedButtons } from './state/roundedButtons'
import { sizedButtons } from './state/sizedButtons'
import { statedButtons } from './state/statedButtons'

export const useButtonsStore = defineStore('buttons', {
  state: () => ({
    headingData: headingData,
    defaultButtons: defaultButtons,
    roundedButtons: roundedButtons,
    iconButtons: iconButtons,
    outlineButtons: outlineButtons,
    sizedButtons: sizedButtons,
    statedButtons: statedButtons,
    groupedButtons: groupedButtons,
  }),
  getters: {
    getHeadingData(state) {
      return state.headingData
    },
    getDefaultButtons(state) {
      return state.defaultButtons
    },
    getRoundedButtons(state) {
      return state.roundedButtons
    },
    getIconButtons(state) {
      return state.iconButtons
    },
    getOutlinedButtons(state) {
      return state.outlineButtons
    },
    getSizedButtons(state) {
      return state.sizedButtons
    },
    getStatedButtons(state) {
      return state.statedButtons
    },
    getGroupedButtons(state) {
      return state.groupedButtons
    },
  },
})
