<template>
  <base-card :content="content.heading">
    <div class="carousel slide" id="withControlsCarousel" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="content.slides[0].image" alt="slide" class="d-block w-100" />
        </div>
        <div class="carousel-item" v-for="item in content.slides.slice(1)">
          <img :src="item.image" alt="slide" class="d-block w-100" />
        </div>
      </div>
      <div
        class="carousel-control-prev"
        type="button"
        data-bs-target="#withControlsCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Предыдущий</span>
      </div>
      <div
        class="carousel-control-next"
        type="button"
        data-bs-target="#withControlsCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Следующий</span>
      </div>
    </div>
  </base-card>
</template>
<script setup>
import { getCarouselStore } from '../composites/getCarouselStore'

const content = getCarouselStore('getControlsCarousel')
</script>
<style lang="css" scoped></style>
