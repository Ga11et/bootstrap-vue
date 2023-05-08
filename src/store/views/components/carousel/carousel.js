import { defineStore } from 'pinia'
import { defaultCarousel } from './state/defaultCarousel'
import { withCaptionsCarousel } from './state/withCaptionsCarousel'
import { withControlsCarousel } from './state/withControlsCarousel'
import { withIndicatorsCarousel } from './state/withIndicatorsCarousel'
import { withFadeCarousel } from './state/withFadeCarousel'
import { headingData } from './state/headingData'

export const useCarouselStore = defineStore('carousel', {
  state: () => ({
    headingData: headingData,
    defaultCarousel: defaultCarousel,
    withCaptionsCarousel: withCaptionsCarousel,
    withControlsCarousel: withControlsCarousel,
    withFadeCarousel: withFadeCarousel,
    withIndicatorsCarousel: withIndicatorsCarousel,
  }),
  getters: {
    getHeadingData(state) {
      return state.headingData
    },
    getDefaultCarousel(state) {
      return state.defaultCarousel
    },
    getCaptionsCarousel(state) {
      return state.withCaptionsCarousel
    },
    getControlsCarousel(state) {
      return state.withControlsCarousel
    },
    getFadeCarousel(state) {
      return state.withFadeCarousel
    },
    getIndicatorsCarousel(state) {
      return state.withIndicatorsCarousel
    },
  },
})
