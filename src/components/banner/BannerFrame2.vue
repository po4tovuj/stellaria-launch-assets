<script setup lang="ts">
defineProps<{ state: 'active' | 'past' | 'future' }>()
</script>

<template>
  <div class="banner-frame banner-frame--2" :data-state="state">
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

    <!-- Capsule image -->
    <div class="banner-capsule-wrap">
      <img
        src="/src/assets/stellaria-capsule.png"
        alt=""
        class="banner-capsule"
        width="176"
        height="136"
      />
    </div>

    <h1 class="banner-headline">Zero post-thaw hangover<br>in clinical trials.</h1>
    <p class="banner-sub">For licensed deep-space crew prescribed pre-mission.</p>

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
.banner-frame--2 { justify-content: flex-start; }

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

.banner-capsule-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0 4px;
  min-height: 0;
}
.banner-capsule {
  max-width: 176px;
  max-height: 136px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 24px rgba(111, 228, 243, 0.30));
}
.banner-frame--2[data-state='active'] .banner-capsule {
  animation: capsule-enter 800ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes capsule-enter {
  from { opacity: 0; transform: scale(1.06) translateY(6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.banner-headline {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.18;
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
