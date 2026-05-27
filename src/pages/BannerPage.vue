<script setup lang="ts">
import BannerAd from '../components/banner/BannerAd.vue'

const base = import.meta.env.BASE_URL

const specs = [
  'HTML + CSS + TypeScript · under 1 MB total',
  '3-frame animation: F1 statement → F2 capsule claim → F3 stat counter 0 → 412',
  'Fixed 300×300 ISI panel · scrolls independently of creative',
  'Chrome · Safari · Firefox · Edge',
]
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-10 py-12 max-[640px]:px-5 max-[640px]:py-8">

    <!-- Page header -->
    <div class="flex items-start justify-between gap-6 mb-10">
      <div>
        <p class="font-ds-mono text-[10px] tracking-[0.14em] uppercase text-ds-plasma-500 mb-2">01 / Banner Ad</p>
        <h1 class="text-[28px] font-medium tracking-[-0.02em] text-fg leading-tight">300 × 600 Animated HTML5</h1>
        <p class="text-[13px] text-faint mt-1 leading-relaxed">
          3-frame animated ad unit · HTML5 · under 1&nbsp;MB · scrollable ISI
        </p>
      </div>
      <a
        :href="`${base}banner/`"
        target="_blank"
        rel="noopener"
        class="shrink-0 font-ds-mono text-[11px] tracking-[0.1em] uppercase text-ds-plasma-500 no-underline border border-ds-plasma-500/30 px-3 py-2 rounded-[2px] transition-colors duration-150 hover:border-ds-plasma-500 hover:bg-ds-plasma-500/5 whitespace-nowrap"
      >Open standalone ↗</a>
    </div>

    <!-- Two-column layout: banner ad + specs -->
    <div class="flex gap-12 items-start max-[760px]:flex-col">

      <!-- The actual 300×600 banner, rendered as a Vue component -->
      <div class="shrink-0">
        <div class="border border-edge rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(111,228,243,0.06),0_24px_48px_rgba(0,0,0,0.6)]">
          <BannerAd />
        </div>
      </div>

      <!-- Specs + documentation -->
      <div class="flex flex-col gap-8 pt-1">

        <section>
          <h2 class="font-ds-mono text-[10px] tracking-[0.14em] uppercase text-faint mb-4">Specifications</h2>
          <ul class="flex flex-col gap-2">
            <li
              v-for="spec in specs"
              :key="spec"
              class="text-[13px] text-faint pl-4 relative leading-[1.5] before:content-['–'] before:absolute before:left-0 before:text-ds-plasma-500"
            >{{ spec }}</li>
          </ul>
        </section>

        <section>
          <h2 class="font-ds-mono text-[10px] tracking-[0.14em] uppercase text-faint mb-4">Animation Sequence</h2>
          <div class="flex flex-col gap-2">
            <div class="flex items-start gap-3 p-3 border border-edge rounded-[2px]">
              <span class="font-ds-mono text-[9px] tracking-[0.1em] uppercase text-ds-plasma-500 shrink-0 pt-0.5">F1</span>
              <div>
                <p class="text-[13px] text-fg font-medium">Cryo-ready. Wake clear.</p>
                <p class="text-[11px] text-faint mt-0.5">Hold 3.2 s · pure type statement · no CTA</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 border border-edge rounded-[2px]">
              <span class="font-ds-mono text-[9px] tracking-[0.1em] uppercase text-ds-plasma-500 shrink-0 pt-0.5">F2</span>
              <div>
                <p class="text-[13px] text-fg font-medium">Zero post-thaw hangover in clinical trials.</p>
                <p class="text-[11px] text-faint mt-0.5">Hold 3.2 s · capsule entrance animation · CTA</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 border border-edge rounded-[2px]">
              <span class="font-ds-mono text-[9px] tracking-[0.1em] uppercase text-ds-plasma-500 shrink-0 pt-0.5">F3</span>
              <div>
                <p class="text-[13px] text-fg font-medium">Cleared for missions ≥ 90 days.</p>
                <p class="text-[11px] text-faint mt-0.5">Final hold · counter 0 → 412 · staggered reveal · CTA</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="font-ds-mono text-[10px] tracking-[0.14em] uppercase text-faint mb-4">ISI Design Decision</h2>
          <p class="text-[13px] text-faint leading-relaxed">
            The ISI panel occupies the fixed lower 300&nbsp;×&nbsp;300 of the unit and scrolls
            independently via <code class="font-ds-mono text-[11px] text-ds-plasma-500">overflow-y: auto</code>.
            This keeps mandatory safety content accessible in all three frames without
            interrupting the creative animation above.
          </p>
        </section>

      </div>
    </div>
  </div>
</template>
