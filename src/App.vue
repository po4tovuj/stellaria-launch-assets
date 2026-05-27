<script setup lang="ts">
import { useTheme } from './composables/useTheme'

const base = import.meta.env.BASE_URL
const { theme, toggle } = useTheme()

const bannerSpecs = [
  '3-frame animation: statement → capsule claim → stat counter 0→412',
  'Fixed 300×300 ISI panel — visible in all frames',
  'HTML + CSS + TypeScript · under 1 MB total',
  'Chrome · Safari · Firefox · Edge',
]

const emailSpecs = [
  'Table-based · all inline CSS · bulletproof markup',
  'Gmail · Apple Mail · Outlook 365 web · Outlook 2016 (VML fallback)',
  'Dark palette · Helvetica throughout · ISI above footer',
]
</script>

<template>
  <div class="min-h-screen bg-canvas text-fg font-ds-body antialiased transition-colors duration-200">

    <!-- ── PAGE HEADER ── -->
    <header class="border-b border-edge">
      <div class="max-w-[1200px] mx-auto px-10 py-6 flex items-center gap-5">

        <!-- DSP lockup (inline SVG so currentColor inherits) -->
        <div class="shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 56" role="img" aria-label="Deep Space Pharma" class="h-10 w-auto block text-fg">
            <g transform="translate(4 4)">
              <ellipse cx="24" cy="24" rx="22" ry="9" fill="none" stroke="currentColor" stroke-width="1.25" opacity="0.55" transform="rotate(-18 24 24)"/>
              <ellipse cx="24" cy="24" rx="9" ry="22" fill="none" stroke="currentColor" stroke-width="1.25" opacity="0.85" transform="rotate(-18 24 24)"/>
              <circle cx="24" cy="24" r="3.2" fill="#6FE4F3"/>
              <circle cx="43" cy="18" r="1.6" fill="#6FE4F3"/>
            </g>
            <text x="58" y="24" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="13" letter-spacing="0.22em" fill="currentColor">DEEP SPACE</text>
            <text x="58" y="42" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="13" letter-spacing="0.22em" fill="currentColor">PHARMA</text>
            <text x="178" y="17" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="8" opacity="0.65" fill="currentColor">®</text>
          </svg>
        </div>

        <!-- Title block -->
        <div class="border-l border-edge pl-5 flex-1">
          <h1 class="text-[28px] font-medium tracking-[-0.02em] text-fg leading-tight">Stellaria™ Launch Assets</h1>
          <p class="font-ds-mono text-[10px] tracking-[0.14em] uppercase text-faint mt-1">STL-PI-2095-03 · Front-End Preview</p>
        </div>

        <!-- Theme toggle -->
        <button
          @click="toggle"
          class="ml-auto shrink-0 w-8 h-8 flex items-center justify-center rounded-sm border border-edge text-faint hover:text-fg hover:border-fg/40 transition-colors duration-150 font-ds-mono text-base leading-none cursor-pointer"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
        >{{ theme === 'dark' ? '○' : '●' }}</button>
      </div>
    </header>

    <!-- ── DELIVERABLES ── -->
    <main class="max-w-[1200px] mx-auto px-10 pt-12 pb-16 grid grid-cols-[360px_1fr] gap-14 items-start max-[860px]:grid-cols-1 max-[860px]:px-6 max-[860px]:pt-8 max-[860px]:pb-12">

      <!-- BANNER -->
      <section class="flex flex-col gap-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <span class="block font-ds-mono text-[10px] tracking-[0.14em] uppercase text-ds-plasma-500 mb-1">01 / Banner Ad</span>
            <h2 class="text-[21px] font-medium text-fg tracking-[-0.02em]">300 × 600 Animated HTML5</h2>
          </div>
          <a
            :href="`${base}banner/`"
            target="_blank"
            rel="noopener"
            class="font-ds-mono text-[13px] text-ds-plasma-500 no-underline whitespace-nowrap pt-0.5 transition-colors duration-150 hover:text-ds-plasma-300"
          >Open ↗</a>
        </div>

        <div class="flex justify-center">
          <div class="border border-edge rounded-[2px] overflow-hidden w-[300px] h-[600px] shrink-0 shadow-[0_0_0_1px_rgba(111,228,243,0.06),0_24px_48px_rgba(0,0,0,0.6)]">
            <iframe
              :src="`${base}banner/`"
              width="300"
              height="600"
              frameborder="0"
              scrolling="no"
              title="Stellaria™ 300×600 banner"
              class="block w-[300px] h-[600px] border-0"
            ></iframe>
          </div>
        </div>

        <ul class="list-none flex flex-col gap-[5px]">
          <li
            v-for="spec in bannerSpecs"
            :key="spec"
            class="text-[13px] text-faint pl-[14px] relative leading-[1.5] before:content-['–'] before:absolute before:left-0 before:text-ds-plasma-500"
          >{{ spec }}</li>
        </ul>
      </section>

      <!-- EMAIL -->
      <section class="flex flex-col gap-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <span class="block font-ds-mono text-[10px] tracking-[0.14em] uppercase text-ds-plasma-500 mb-1">02 / HTML Email</span>
            <h2 class="text-[21px] font-medium text-fg tracking-[-0.02em]">600 px · Dark · HCP</h2>
          </div>
          <a
            :href="`${base}email/`"
            target="_blank"
            rel="noopener"
            class="font-ds-mono text-[13px] text-ds-plasma-500 no-underline whitespace-nowrap pt-0.5 transition-colors duration-150 hover:text-ds-plasma-300"
          >Open ↗</a>
        </div>

        <div class="border border-edge rounded-[2px] overflow-hidden bg-ds-obsidian-900 shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
          <iframe
            :src="`${base}email/`"
            width="100%"
            height="800"
            frameborder="0"
            scrolling="yes"
            title="Stellaria™ HCP email"
            class="block w-full min-h-[800px]"
          ></iframe>
        </div>

        <ul class="list-none flex flex-col gap-[5px]">
          <li
            v-for="spec in emailSpecs"
            :key="spec"
            class="text-[13px] text-faint pl-[14px] relative leading-[1.5] before:content-['–'] before:absolute before:left-0 before:text-ds-plasma-500"
          >{{ spec }}</li>
        </ul>
      </section>

    </main>

    <footer class="border-t border-edge py-5 px-10 text-center">
      <p class="font-ds-mono text-[10px] tracking-[0.14em] uppercase text-faint">© 2095 Deep Space Pharma · STL-PI-2095-03 (fictional)</p>
    </footer>

  </div>
</template>
