import { useCardsStore } from '@/store/views/components/cards/cards'
import { computed } from 'vue'

export const getStore = (getter) => {
  const store = useCardsStore()
  const content = computed(() => store[getter])
  return content
}
