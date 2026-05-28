<script setup lang="ts">
defineProps<{ state: 'active' | 'past' | 'future' }>()
</script>

<template>
  <div class="banner-frame banner-frame--f2" :data-state="state">
    <img
      src="/src/assets/stellaria-capsule.png"
      alt=""
      class="banner-frame__capsule"
      aria-hidden="true"
    />

    <div class="banner-frame__content">
      <div class="banner-frame__header">
        <img
          src="/src/assets/stellaria-wordmark.svg"
          alt="STELLARIA"
          class="h-6 w-auto block shrink-0"
          width="140"
          height="24"
        />
        <span class="font-ds-mono text-[9px] tracking-[0.14em] uppercase text-ds-ice-400 shrink-0">Rx Only</span>
      </div>

      <h1 class="banner-frame__headline">Zero post-thaw hangover in clinical trials.</h1>
      <p class="mt-auto mb-4 text-[10px] leading-[1.45] text-ds-ice-200">For licensed deep-space crew prescribed pre-mission.</p>

      <div class="shrink-0 flex justify-end">
        <a href="#" class="banner-frame__cta-btn">Learn More</a>
      </div>
    </div>

  </div>
</template>

<style scoped>
@reference "../../style.css";

/* ── Frame base & state transitions ─────────────────────────── */
.banner-frame {
  @apply absolute inset-0 opacity-0 pointer-events-none overflow-hidden will-change-[opacity,transform];
  transform: translateY(10px);
  transition: opacity 550ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 550ms cubic-bezier(0.16, 1, 0.3, 1);
}
.banner-frame[data-state='active'] {
  @apply opacity-100 pointer-events-auto;
  transform: translateY(0);
}
.banner-frame[data-state='past'] {
  @apply opacity-0;
  transform: translateY(-10px);
}

/* ── Capsule: large, lower-centre, behind text ───────────────── */
.banner-frame__capsule {
  @apply absolute left-1/2 bottom-[10px] w-[150px] h-[150px] object-contain z-0;
  transform: translateX(-50%);
  filter: drop-shadow(0 4px 32px rgba(111, 228, 243, 0.40));
}
.banner-frame--f2[data-state='active'] .banner-frame__capsule {
  animation: capsule-enter 850ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes capsule-enter {
  from { opacity: 0; transform: translateX(-50%) scale(1.1) rotate(-8deg); }
  to   { opacity: 1; transform: translateX(-50%) scale(1)   rotate(0deg); }
}

/* ── Content column: floats above capsule ────────────────────── */
.banner-frame__content {
  @apply relative z-[1] h-full px-5 pt-4 pb-[14px] flex flex-col;
}

/* ── Header row: wordmark + Rx badge ────────────────────────── */
.banner-frame__header {
  @apply flex items-center justify-between shrink-0 pb-2 border-b border-ds-obsidian-600/60;
}

/* ── Headline: heading-xl per design spec ────────────────────── */
.banner-frame__headline {
  @apply font-ds-body text-[18px] font-medium leading-[1.15] tracking-[-0.02em] text-ds-ice-050 mt-[33px];
}

/* ── CTA button ──────────────────────────────────────────────── */
.banner-frame__cta-btn {
  @apply inline-flex items-center justify-center h-[34px] px-5 bg-ds-plasma-500 text-ds-obsidian-900 font-ds-body text-[12px] font-bold tracking-[0.02em] no-underline rounded-sm;
  transition: background 180ms cubic-bezier(0.16, 1, 0.3, 1);
}
.banner-frame__cta-btn:hover {
  @apply bg-ds-plasma-300;
}
</style>
