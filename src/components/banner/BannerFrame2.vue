<script setup lang="ts">
defineProps<{ state: 'active' | 'past' | 'future' }>()
</script>

<template>
  <div class="banner-frame banner-frame--2" :data-state="state">

    <!-- Capsule: large, lower-right, behind text -->
    <img
      src="/src/assets/stellaria-capsule.png"
      alt=""
      class="banner-capsule"
      aria-hidden="true"
    />

    <!-- Text content floats above capsule -->
    <div class="banner-content">
      <div class="banner-wm-row">
        <img src="/src/assets/stellaria-wordmark.svg" alt="STELLARIA" class="banner-wordmark" width="140" height="24" />
        <span class="banner-rx-only">Rx Only</span>
      </div>

      <p class="banner-drug-name">Stellaria™ · Morphanidine-C 12&nbsp;mg</p>

      <h1 class="banner-headline">Zero post-thaw hangover in clinical trials.</h1>
      <p class="banner-sub">For licensed deep-space crew prescribed pre-mission.</p>

      <div class="banner-cta-row">
        <a href="#" class="banner-btn">Learn More</a>
      </div>
    </div>

  </div>
</template>

<style scoped>
.banner-frame {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 550ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 550ms cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  will-change: opacity, transform;
  overflow: hidden;
}
.banner-frame[data-state='active']  { opacity: 1; transform: translateY(0); pointer-events: auto; }
.banner-frame[data-state='past']    { opacity: 0; transform: translateY(-10px); }

/* Capsule: large, anchored bottom-right, sits behind text */
.banner-capsule {
  position: absolute;
  right: -20px;
  bottom: -10px;
  width: 190px;
  height: 190px;
  object-fit: contain;
  z-index: 0;
  filter: drop-shadow(0 4px 32px rgba(111, 228, 243, 0.40));
}
.banner-frame--2[data-state='active'] .banner-capsule {
  animation: capsule-enter 850ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes capsule-enter {
  from { opacity: 0; transform: scale(1.12) rotate(-10deg); }
  to   { opacity: 1; transform: scale(1)    rotate(0deg); }
}

/* Text content sits above capsule via z-index */
.banner-content {
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 16px 20px 14px;
  display: flex;
  flex-direction: column;
}

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
  font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase;
  color: #98a3ba; flex-shrink: 0;
}

.banner-drug-name {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #98a3ba;
  margin-top: 10px;
  flex-shrink: 0;
}

.banner-headline {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #f5f7fb;
  margin-top: 10px;
  max-width: 155px;
}
.banner-sub {
  font-size: 10px;
  line-height: 1.45;
  color: #98a3ba;
  margin-top: 8px;
  max-width: 155px;
}

.banner-cta-row {
  margin-top: auto;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
}
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
