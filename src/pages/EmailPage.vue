<script setup lang="ts">
import EmailTemplate from '../components/email/EmailTemplate.vue'

const base = import.meta.env.BASE_URL

const specs = [
  'Table-based · all inline CSS · bulletproof XHTML markup',
  'Gmail (web/iOS/Android) · Apple Mail (macOS/iOS) · Outlook 365 web · Outlook 2016 (VML CTA fallback)',
  'Dark palette · Helvetica Neue throughout · ISI above footer',
  'Preheader text padded with zero-width non-joiners to prevent bleed',
]
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-10 py-12 max-[640px]:px-5 max-[640px]:py-8">

    <!-- Page header -->
    <div class="flex items-start justify-between gap-6 mb-10">
      <div>
        <p class="font-ds-mono text-[10px] tracking-[0.14em] uppercase text-ds-plasma-500 mb-2">02 / HTML Email</p>
        <h1 class="text-[28px] font-medium tracking-[-0.02em] text-fg leading-tight">600 px · Dark · HCP</h1>
        <p class="text-[13px] text-faint mt-1 leading-relaxed">
          Table-based · bulletproof · Outlook 2016 VML fallbacks
        </p>
      </div>
      <a
        :href="`${base}email/`"
        target="_blank"
        rel="noopener"
        class="shrink-0 font-ds-mono text-[11px] tracking-[0.1em] uppercase text-ds-plasma-500 no-underline border border-ds-plasma-500/30 px-3 py-2 rounded-[2px] transition-colors duration-150 hover:border-ds-plasma-500 hover:bg-ds-plasma-500/5 whitespace-nowrap"
      >Open full HTML ↗</a>
    </div>

    <!-- Metadata row -->
    <div class="grid grid-cols-3 gap-px mb-8 border border-edge rounded-[2px] overflow-hidden max-[640px]:grid-cols-1">
      <div class="bg-card px-4 py-3">
        <p class="font-ds-mono text-[9px] tracking-[0.1em] uppercase text-faint mb-1">Subject</p>
        <p class="text-[13px] text-fg">Stellaria™: cryo-induction support for long-haul crew</p>
      </div>
      <div class="bg-card px-4 py-3">
        <p class="font-ds-mono text-[9px] tracking-[0.1em] uppercase text-faint mb-1">Preheader</p>
        <p class="text-[13px] text-fg">Indicated for hibernation-assist on missions ≥ 90 days…</p>
      </div>
      <div class="bg-card px-4 py-3">
        <p class="font-ds-mono text-[9px] tracking-[0.1em] uppercase text-faint mb-1">Hero headline</p>
        <p class="text-[13px] text-fg">Clarity on arrival.</p>
      </div>
    </div>

    <!-- Email rendered in browser-chrome wrapper -->
    <EmailTemplate />

    <!-- Specs -->
    <div class="mt-8 pt-8 border-t border-edge">
      <h2 class="font-ds-mono text-[10px] tracking-[0.14em] uppercase text-faint mb-4">Specifications</h2>
      <ul class="grid grid-cols-2 gap-2 max-[640px]:grid-cols-1">
        <li
          v-for="spec in specs"
          :key="spec"
          class="text-[13px] text-faint pl-4 relative leading-[1.5] before:content-['–'] before:absolute before:left-0 before:text-ds-plasma-500"
        >{{ spec }}</li>
      </ul>
    </div>

  </div>
</template>
