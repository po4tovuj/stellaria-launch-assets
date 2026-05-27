<script setup lang="ts">
defineProps<{ state: 'active' | 'past' | 'future' }>()
</script>

<template>
  <div class="banner-frame banner-frame--2" :data-state="state">

    <!-- Wordmark row -->
    <div class="banner-wm-row">
      <img src="/src/assets/stellaria-wordmark.svg" alt="STELLARIA" class="banner-wordmark" width="140" height="24" />
      <span class="banner-rx-only">Rx Only</span>
    </div>

    <!-- Drug name -->
    <p class="banner-drug-name">Stellaria™ · Morphanidine-C 12&nbsp;mg</p>

    <!-- Text left / capsule right -->
    <div class="banner-body-row">
      <div class="banner-text-col">
        <h1 class="banner-headline">Zero post-thaw hangover in clinical trials.</h1>
        <p class="banner-sub">For licensed deep-space crew<br>prescribed pre-mission.</p>
      </div>
      <img
        src="/src/assets/stellaria-capsule.png"
        alt=""
        class="banner-capsule"
        width="120"
        height="120"
      />
    </div>

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
.banner-frame[data-state='active']  { opacity: 1; transform: translateY(0); pointer-events: auto; }
.banner-frame[data-state='past']    { opacity: 0; transform: translateY(-10px); }
.banner-frame--2 { justify-content: flex-start; }

.banner-wm-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(35, 51, 89, 0.6);
}
.banner-wordmark  { height: 24px; width: auto; display: block; flex-shrink: 0; }
.banner-rx-only {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: #98a3ba; flex-shrink: 0;
}

.banner-drug-name {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #98a3ba;
  margin-top: 8px;
  flex-shrink: 0;
}

/* Side-by-side: text left, capsule right */
.banner-body-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-height: 0;
  margin-top: 6px;
}
.banner-text-col {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-headline {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: #f5f7fb;
}
.banner-sub {
  font-size: 10px;
  line-height: 1.45;
  color: #98a3ba;
  margin-top: 8px;
}

.banner-capsule {
  width: 120px;
  height: 120px;
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 4px 24px rgba(111, 228, 243, 0.30));
}
.banner-frame--2[data-state='active'] .banner-capsule {
  animation: capsule-enter 800ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes capsule-enter {
  from { opacity: 0; transform: scale(1.08) translateY(8px) rotate(-6deg); }
  to   { opacity: 1; transform: scale(1)    translateY(0)   rotate(0deg); }
}

.banner-cta-row { padding-top: 8px; flex-shrink: 0; }
.banner-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
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
