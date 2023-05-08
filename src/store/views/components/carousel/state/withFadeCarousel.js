import carouselImage1 from '@/store/assets/carouselImage1.jpg'
import carouselImage2 from '@/store/assets/carouselImage2.jpg'
import carouselImage3 from '@/store/assets/carouselImage3.jpg'

export const withFadeCarousel = {
  heading: 'Carousel with fade transition',
  description:
    'Add .carousel-fade to your carousel to animate slides with a fade transition instead of a slide.',
  slides: [
    { id: '1', image: carouselImage1 },
    { id: '2', image: carouselImage2 },
    { id: '3', image: carouselImage3 },
  ],
}
