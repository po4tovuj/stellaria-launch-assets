<script setup lang="ts">
defineProps<{ state: 'active' | 'past' | 'future' }>()
</script>

<template>
  <div class="banner-frame banner-frame--1" :data-state="state">
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

    <!-- Body: drug name + large headline -->
    <div class="banner-f1-body">
      <p class="banner-drug-name">Stellaria™ (morphanidine-C) 12&nbsp;mg</p>
      <h1 class="banner-headline banner-headline--xl">Cryo-ready.<br>Wake&nbsp;clear.</h1>
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

.banner-frame--1 { justify-content: space-between; }

.banner-wm-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(35, 51, 89, 0.6);
}
.banner-wordmark {
  height: 24px;
  width: auto;
  display: block;
  flex-shrink: 0;
}
.banner-rx-only {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #98a3ba;
  flex-shrink: 0;
}

.banner-f1-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6px;
}
.banner-drug-name {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 9px;
  letter-spacing: 0.08em;
  color: #98a3ba;
  margin-bottom: 12px;
  text-transform: uppercase;
}
.banner-headline {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #f5f7fb;
}
.banner-headline--xl { font-size: 28px; }
</style>
