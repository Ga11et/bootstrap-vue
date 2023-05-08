import carouselImage1 from '@/store/assets/carouselImage1.jpg'
import carouselImage2 from '@/store/assets/carouselImage2.jpg'
import carouselImage3 from '@/store/assets/carouselImage3.jpg'

export const withCaptionsCarousel = {
  heading: 'With captions',
  slides: [
    {
      id: '1',
      image: carouselImage1,
      heading: 'Second slide label',
      description: 'Some representative placeholder content for the third slide.',
    },
    {
      id: '2',
      image: carouselImage2,
      heading: 'Third slide label',
      description: 'Some representative placeholder content for the third slide.',
    },
    {
      id: '3',
      image: carouselImage3,
      heading: 'First slide label',
      description: 'Some representative placeholder content for the third slide.',
    },
  ],
}
