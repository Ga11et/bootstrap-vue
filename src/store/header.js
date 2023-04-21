import { defineStore } from 'pinia'
import LogoPNG from './assets/logo.png'
import person1 from './assets/person1.jpg'
import person2 from './assets/person2.jpg'
import person3 from './assets/person3.jpg'
import profile from './assets/profile.jpg'

export const useHeaderStore = defineStore('header', {
  state: () => {
    return {
      logo: LogoPNG,
      notifications: [
        {
          id: '1',
          heading: 'Lorem Impsum',
          description: 'Quae dolorem earum veritatis oditseno',
          type: 'warning',
        },
        {
          id: '2',
          heading: 'Lorem Impsum',
          description: 'Quae dolorem earum veritatis oditseno',
          type: 'error',
        },
        {
          id: '3',
          heading: 'Lorem Impsum',
          description: 'Quae dolorem earum veritatis oditseno',
          type: 'info',
        },
        {
          id: '4',
          heading: 'Lorem Impsum',
          description: 'Quae dolorem earum veritatis oditseno',
          type: 'success',
        },
      ],
      messages: [
        {
          id: '1',
          name: 'Maria Hadson',
          message: 'Velit asperiores et ducimus soluta repudiandae labore officia est',
          time: '4 hrs. ago',
          image: person1,
        },
        {
          id: '2',
          name: 'Anna Nelson',
          message: 'Velit asperiores et ducimus soluta repudiandae labore officia est',
          time: '6 hrs. ago',
          image: person2,
        },
        {
          id: '3',
          name: 'Devid Muldon',
          message: 'Velit asperiores et ducimus soluta repudiandae labore officia est',
          time: '8 hrs. ago',
          image: person3,
        },
      ],
      activeAccount: {
        id: '1',
        image: profile,
        name: 'Kevin Anderson',
        work: 'Web Digigner',
      },
      accountNav: [
        { id: '1', text: 'My Profile', link: '#', type: 'profile' },
        { id: '2', text: 'Accaunt Settings', link: '#', type: 'settings' },
        { id: '3', text: 'Need Help?', link: '#', type: 'help' },
        { id: '4', text: 'Sign out', link: '#', type: 'out' },
      ],
    }
  },
  getters: {
    getLogo(state) {
      return state.logo
    },
    getNotifications(state) {
      return state.notifications
    },
    getNotificationsCount(state) {
      return state.notifications.length
    },
    getMessages(state) {
      return state.messages
    },
    getMessagesCount(state) {
      return state.messages.length
    },
    getActiveAccaunt(state) {
      return state.activeAccount
    },
    getAccauntNav(state) {
      return state.accountNav
    },
    getSmallAccauntName(state) {
      const parts = state.activeAccount.name.split(' ')
      return `${parts[0][0]}. ${parts[1]}`
    },
  },
  actions: {},
})
