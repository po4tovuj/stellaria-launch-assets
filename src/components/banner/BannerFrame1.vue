<script setup lang="ts">
defineProps<{ state: 'active' | 'past' | 'future' }>()
</script>

<template>
  <div class="banner-frame banner-frame--f1" :data-state="state">

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

    <div class="flex-1 flex flex-col justify-center pt-[6px]">
      <h1 class="banner-frame__headline">The only support pill for interstellar crew.</h1>
    </div>

  </div>
</template>

<style scoped>
@reference "../../style.css";

/* ── Frame base & state transitions ─────────────────────────── */
.banner-frame {
  @apply absolute inset-0 px-5 pt-4 pb-[14px] flex flex-col opacity-0 pointer-events-none will-change-[opacity,transform];
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

.banner-frame--f1 { @apply justify-between; }

/* ── Header row: wordmark + Rx badge ────────────────────────── */
.banner-frame__header {
  @apply flex items-center justify-between shrink-0 pb-[10px] border-b border-ds-obsidian-600/60;
}

/* ── Headline: heading-xl per design spec ────────────────────── */
.banner-frame__headline {
  @apply font-ds-body text-[32px] font-black leading-[1.1] tracking-[-0.045em] text-balance text-ds-ice-050;
}
</style>
