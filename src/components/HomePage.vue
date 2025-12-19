<script setup>
import ContentHere from '@/components/ContentHere.vue'
import HeroImage from '@/components//HeroImage.vue'

</script>

<template>
  <section class="heroimage">
    <HeroImage/>
  </section>

  <section class="content">
    <content-here/>
  </section>
</template>

<style scoped>
section.heroimage {
  width: 100vw;
  height: 98vh;
  background-image: url('/images/hero.png');
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0;
  padding: 0;
}
</style>

