<script setup lang="ts">
defineProps<{
  state: 'active' | 'past' | 'future'
  counter: number
}>()
</script>

<template>
  <div class="banner-frame banner-frame--3" :data-state="state">
    <!-- Wordmark row -->
    <div class="banner-wm-row">
      <img
        src="/src/assets/stellaria-wordmark.svg"
        alt="STELLARIA"
        class="banner-wordmark"
        width="140"
        height="24"
      />
      <span class="banner-rx-only">Rx Only</span>
    </div>

    <!-- Animated stat counter -->
    <div class="banner-stat-block">
      <span class="banner-counter-val">{{ counter }}</span>
      <span class="banner-stat-label">Pilots studied</span>
    </div>

    <h1 class="banner-headline">Cleared for missions<br>≥ 90 days.</h1>
    <p class="banner-sub">Studied across Mars-transit and Belt-rotation protocols.</p>

    <div class="banner-cta-row">
      <a href="#" class="banner-btn">Learn More</a>
    </div>
  </div>
</template>

<style scoped>
.banner-frame {
  position: absolute;
  inset: 0;
  padding: 16px 20px 14px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 550ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 550ms cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  will-change: opacity, transform;
}
.banner-frame[data-state='active'] {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.banner-frame[data-state='past'] {
  opacity: 0;
  transform: translateY(-10px);
}
.banner-frame--3 { justify-content: flex-start; }

.banner-wm-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(35, 51, 89, 0.6);
}
.banner-wordmark { height: 24px; width: auto; display: block; flex-shrink: 0; }
.banner-rx-only {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #98a3ba;
  flex-shrink: 0;
}

.banner-stat-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
  margin-bottom: 10px;
  flex-shrink: 0;
}
.banner-counter-val {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 64px;
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: #6fe4f3;
  font-variant-numeric: tabular-nums;
}
.banner-stat-label {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #98a3ba;
  margin-top: 6px;
}

.banner-frame--3[data-state='active'] .banner-stat-block {
  animation: fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
.banner-frame--3[data-state='active'] .banner-headline {
  animation: fade-up 600ms 200ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
.banner-frame--3[data-state='active'] .banner-sub {
  animation: fade-up 600ms 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
.banner-frame--3[data-state='active'] .banner-cta-row {
  animation: fade-up 600ms 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.banner-headline {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #f5f7fb;
}
.banner-sub {
  font-size: 11px;
  line-height: 1.45;
  color: #98a3ba;
  margin-top: 8px;
}
.banner-cta-row { margin-top: auto; padding-top: 8px; flex-shrink: 0; }
.banner-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 20px;
  background: #6fe4f3;
  color: #05070c;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  border-radius: 2px;
  transition: background 180ms cubic-bezier(0.16, 1, 0.3, 1);
}
.banner-btn:hover { background: #b5f1f8; }
</style>
