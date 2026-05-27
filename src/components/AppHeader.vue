<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { theme, toggle } = useTheme()
</script>

<template>
  <header class="border-b border-edge">
    <div class="max-w-[1200px] mx-auto px-10 py-6 flex items-center gap-5 max-[640px]:px-5 max-[640px]:py-4">

      <!-- DSP lockup (inline SVG — currentColor inherits CSS color) -->
      <RouterLink to="/" class="shrink-0" aria-label="Deep Space Pharma — home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 240 56"
          role="img"
          aria-label="Deep Space Pharma"
          class="h-9 w-auto block text-fg"
        >
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
      </RouterLink>

      <!-- Divider -->
      <div class="h-8 w-px bg-edge shrink-0" aria-hidden="true"></div>

      <!-- Page nav -->
      <nav class="flex items-center gap-1" aria-label="Deliverables">
        <RouterLink
          to="/banner"
          class="font-ds-mono text-[11px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-[2px] transition-colors duration-150"
          :class="($route.path === '/banner')
            ? 'text-fg bg-edge'
            : 'text-faint hover:text-fg'"
        >Banner</RouterLink>
        <RouterLink
          to="/email"
          class="font-ds-mono text-[11px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-[2px] transition-colors duration-150"
          :class="($route.path === '/email')
            ? 'text-fg bg-edge'
            : 'text-faint hover:text-fg'"
        >Email</RouterLink>
      </nav>

      <!-- Spacer -->
      <div class="flex-1" aria-hidden="true"></div>

      <!-- Project tag -->
      <p class="font-ds-mono text-[9px] tracking-[0.14em] uppercase text-faint/60 max-[640px]:hidden">
        STL-PI-2095-03
      </p>

      <!-- Theme toggle -->
      <button
        @click="toggle"
        class="w-8 h-8 flex items-center justify-center rounded-sm border border-edge text-faint hover:text-fg hover:border-fg/40 transition-colors duration-150 font-ds-mono text-[13px] leading-none cursor-pointer shrink-0"
        :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
      >{{ theme === 'dark' ? '○' : '●' }}</button>
    </div>
  </header>
</template>
