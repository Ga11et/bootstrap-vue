import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isActive: false,
    activeLink: '1',
    nav: [
      { id: '1', text: 'Dashboard', image: 'bi bi-grid', link: 'Dashboard' },
      {
        id: '2',
        text: 'Components',
        image: 'bi bi-menu-button-wide',
        link: '#',
        components: [
          { id: '21', text: 'Alerts', link: 'Alerts' },
          { id: '22', text: 'Accordion', link: 'Accordion' },
          { id: '23', text: 'Badges', link: 'Badges' },
          { id: '24', text: 'BreadCrumbs', link: 'BreadCrumbs' },
          { id: '25', text: 'Buttons', link: 'Buttons' },
          { id: '26', text: 'Cards', link: 'Cards' },
          { id: '27', text: 'Carusel', link: 'Carusel' },
          { id: '28', text: 'List group', link: 'Listgroup' },
          { id: '29', text: 'Modal', link: 'Modal' },
          { id: '210', text: 'Tabs', link: 'Tabs' },
          { id: '211', text: 'Pagination', link: 'Pagination' },
          { id: '212', text: 'Progress', link: 'Progress' },
          { id: '213', text: 'Spinners', link: 'Spinners' },
          { id: '214', text: 'Tooltips', link: 'Tooltips' },
        ],
      },
      {
        id: '3',
        text: 'Forms',
        image: 'bi bi-journal-text',
        link: '#',
        components: [
          { id: '31', text: 'Form Elements', link: 'FormElements' },
          { id: '32', text: 'Form Layouts', link: 'FormLayouts' },
          { id: '33', text: 'Form Editors', link: 'FormEditors' },
          { id: '34', text: 'Form Validation', link: 'FormValidation' },
        ],
      },
      {
        id: '4',
        text: 'Tables',
        image: 'bi bi-layout-text-window-reverse',
        link: '#',
        components: [
          { id: '41', text: 'General Tables', link: 'GeneralTables' },
          { id: '42', text: 'Data Tables', link: 'DataTables' },
        ],
      },
      {
        id: '5',
        text: 'Charts',
        image: 'bi bi-bar-chart',
        link: '#',
        components: [
          { id: '51', text: 'Chart.js', link: 'Chartjs' },
          { id: '52', text: 'ApexCharts', link: 'ApexCharts' },
          { id: '53', text: 'Echarts', link: 'Echarts' },
        ],
      },
      {
        id: '6',
        text: 'Icons',
        image: 'bi bi-gem',
        link: '#',
        components: [
          { id: '61', text: 'Bootstrap Icons', link: '#' },
          { id: '62', text: 'Remix Icons', link: '#' },
          { id: '63', text: 'Boxicons', link: '#' },
        ],
      },
    ],
  }),
  getters: {
    getSidebarActive(state) {
      return state.isActive
    },
    getSidebarNav(state) {
      return state.nav
    },
    getActiveLink(state) {
      return state.activeLink
    },
  },
  actions: {
    toggleActiveSidebar(state) {
      this.isActive = !this.isActive
    },
    setActiveLink(newValue) {
      this.activeLink = newValue
    },
  },
})
