import { useCarouselStore } from '@/store/views/components/carousel/carousel'

export const getCarouselStore = (getter) => {
  const store = useCarouselStore()
  const content = store[getter]
  return content
}
