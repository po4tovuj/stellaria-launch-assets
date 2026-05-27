<script setup lang="ts">
import { useBannerAnimation } from '../../composables/useBannerAnimation'
import BannerFrame1 from './BannerFrame1.vue'
import BannerFrame2 from './BannerFrame2.vue'
import BannerFrame3 from './BannerFrame3.vue'
import BannerISI from './BannerISI.vue'

const { frameState, counterValue } = useBannerAnimation()
</script>

<template>
  <!--
    300 × 600 ad unit.
    Top 300 × 300: 3-frame animated creative (F1 → F2 → F3).
    Bottom 300 × 300: fixed ISI panel that scrolls independently.
    Dimensions are hard-coded — banner format is fixed spec.
  -->
  <div class="banner-shell">

    <!-- Creative region: frames overlap absolutely, transitions via data-state -->
    <div class="banner-creative">
      <BannerFrame1 :state="frameState(1)" />
      <BannerFrame2 :state="frameState(2)" />
      <BannerFrame3 :state="frameState(3)" :counter="counterValue" />
    </div>

    <!-- ISI: always visible, scrolls independently -->
    <BannerISI />

  </div>
</template>

<style scoped>
.banner-shell {
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: #05070c;
  /* Starfield */
  background-image:
    radial-gradient(0.8px 0.8px at  6% 12%, rgba(234,239,248,.9)  50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 14% 47%, rgba(234,239,248,.75) 50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 22% 78%, rgba(234,239,248,.8)  50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 31% 23%, rgba(234,239,248,.65) 50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 38% 62%, rgba(234,239,248,.85) 50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 47%  9%, rgba(234,239,248,.7)  50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 54% 41%, rgba(234,239,248,.9)  50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 63% 71%, rgba(234,239,248,.75) 50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 71% 18%, rgba(234,239,248,.8)  50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 79% 53%, rgba(234,239,248,.7)  50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 87% 84%, rgba(234,239,248,.85) 50%, transparent 51%),
    radial-gradient(0.8px 0.8px at 94% 31%, rgba(234,239,248,.65) 50%, transparent 51%),
    radial-gradient(0.6px 0.6px at 11% 33%, rgba(234,239,248,.35) 50%, transparent 51%),
    radial-gradient(0.6px 0.6px at 26% 55%, rgba(234,239,248,.3)  50%, transparent 51%),
    radial-gradient(0.6px 0.6px at 43% 88%, rgba(234,239,248,.4)  50%, transparent 51%),
    radial-gradient(0.6px 0.6px at 57% 17%, rgba(234,239,248,.25) 50%, transparent 51%),
    radial-gradient(0.6px 0.6px at 68% 44%, rgba(234,239,248,.35) 50%, transparent 51%),
    radial-gradient(0.6px 0.6px at 81% 27%, rgba(234,239,248,.3)  50%, transparent 51%),
    radial-gradient(0.6px 0.6px at 91% 61%, rgba(234,239,248,.4)  50%, transparent 51%),
    radial-gradient(0.6px 0.6px at  4% 69%, rgba(234,239,248,.25) 50%, transparent 51%),
    radial-gradient(0.6px 0.6px at 19%  8%, rgba(234,239,248,.35) 50%, transparent 51%),
    radial-gradient(0.6px 0.6px at 36% 39%, rgba(234,239,248,.3)  50%, transparent 51%),
    radial-gradient(1px   1px   at 49% 72%, rgba(181,241,248,.55) 50%, transparent 51%),
    radial-gradient(1px   1px   at 73%  8%, rgba(187,161,255,.45) 50%, transparent 51%),
    radial-gradient(1px   1px   at 16% 91%, rgba(181,241,248,.4)  50%, transparent 51%);
}

/* Creative region: top 300 × 300 */
.banner-creative {
  position: relative;
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  overflow: hidden;
}
</style>
