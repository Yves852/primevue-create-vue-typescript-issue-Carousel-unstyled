<script setup lang="ts">
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

const sliderItems = ref([
  { title: 'A1' },
  { title: 'A2' },
  { title: 'A3' },
  { title: 'A4' },
  { title: 'A5' },
  { title: 'A6' },
  { title: 'A7' },
  { title: 'A8' },
  { title: 'A9' },
  { title: 'A10' },
]);
</script>

<template>
  <Carousel
    :value="sliderItems"
    :circular="true"
    :autoplay-interval="2000"
    :num-visible="2"
    :num-scroll="2"
    :show-indicators="true"
  >
    <template #item="slotProps">
      <div style="margin: 1em; padding: 0.5em; background-color: gray">
        {{ slotProps.data.title }}
      </div>
    </template>
  </Carousel>
</template>
