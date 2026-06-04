<script setup lang="ts">
defineProps<{
  state: 'active' | 'past' | 'future'
  counter: number
}>()
</script>

<template>
  <div class="banner-frame banner-frame--f3" :data-state="state">

    <div class="banner-frame__header">
      <img src="/src/assets/stellaria-wordmark.svg" alt="STELLARIA" class="h-6 w-auto block shrink-0" width="140" height="24" />
      <span class="font-ds-mono text-[9px] tracking-[0.14em] uppercase text-ds-ice-400 shrink-0">Rx Only</span>
    </div>

    <div class="flex items-center justify-between shrink-0 mt-[27px]">
      <div class="banner-frame__stat-block">
        <span class="banner-frame__counter-val">{{ counter }}</span>
        <span class="banner-frame__stat-label">Pilots studied</span>
      </div>
      <img
        src="/src/assets/stellaria-capsule.png"
        alt=""
        class="banner-frame__capsule"
        width="120"
        height="120"
      />
    </div>

    <h1 class="banner-frame__headline">Cleared for missions ≥ 2.4&nbsp;AU.</h1>
    <p class="banner-frame__sub">Studied across Mars-transit and Belt-rotation protocols.</p>

    <div class="banner-frame__cta-row">
      <a href="#" class="banner-frame__cta-btn">Learn More</a>
    </div>
  </div>
</template>

<style scoped>
@reference "../../style.css";

/* ── Frame base & state transitions ─────────────────────────── */
.banner-frame {
  @apply absolute inset-0 px-5 pt-4 pb-3.5 flex flex-col opacity-0 pointer-events-none will-change-[opacity,transform];
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
.banner-frame--f3 { @apply justify-start; }

/* ── Header row: wordmark + Rx badge ────────────────────────── */
.banner-frame__header {
  @apply flex items-center justify-between shrink-0 pb-2 border-b border-ds-obsidian-600/60;
}

/* ── Stat block: counter + label ─────────────────────────────── */
.banner-frame__stat-block {
  @apply flex flex-col items-start shrink-0;
}
.banner-frame__counter-val {
  @apply font-ds-body text-6xl font-medium leading-[0.9] tracking-[-0.04em] text-ds-plasma-500 tabular-nums;
}
.banner-frame__stat-label {
  @apply font-ds-mono text-[9px] tracking-[0.14em] uppercase text-ds-ice-400 mt-[5px];
}

/* ── Capsule image ───────────────────────────────────────────── */
.banner-frame__capsule {
  @apply w-30 h-30 object-contain shrink-0;
  filter: drop-shadow(0 4px 20px rgba(111, 228, 243, 0.25));
}
.banner-frame--f3[data-state='active'] .banner-frame__capsule {
  animation: capsule-enter 700ms 200ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes capsule-enter {
  from { opacity: 0; transform: scale(1.06) rotate(8deg); }
  to   { opacity: 1; transform: scale(1) rotate(0deg); }
}

/* ── Body copy ───────────────────────────────────────────────── */
.banner-frame__headline {
  @apply font-ds-body text-[15px] font-medium leading-[1.2] tracking-[-0.02em] text-ds-ice-050 mt-2;
}
.banner-frame__sub {
  @apply text-[10px] leading-[1.45] text-ds-ice-400 mt-1.5;
}

/* ── CTA ─────────────────────────────────────────────────────── */
.banner-frame__cta-row {
  @apply mt-auto pt-1.5 shrink-0 flex justify-end;
}
.banner-frame__cta-btn {
  @apply inline-flex items-center justify-center h-[34px] px-5 bg-ds-plasma-500 text-ds-obsidian-900 font-ds-body text-xs font-bold tracking-[0.02em] no-underline rounded-sm;
  transition: background 180ms cubic-bezier(0.16, 1, 0.3, 1);
}
.banner-frame__cta-btn:hover { @apply bg-ds-plasma-300; }

/* ── Entrance animations ─────────────────────────────────────── */
.banner-frame--f3[data-state='active'] .banner-frame__stat-block {
  animation: fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
.banner-frame--f3[data-state='active'] .banner-frame__headline {
  animation: fade-up 600ms 200ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
.banner-frame--f3[data-state='active'] .banner-frame__sub {
  animation: fade-up 600ms 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
.banner-frame--f3[data-state='active'] .banner-frame__cta-row {
  animation: fade-up 600ms 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
