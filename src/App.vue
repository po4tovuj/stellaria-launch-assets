<script setup lang="ts">
import dspLockup from './assets/deep-space-pharma-lockup.svg';

const base = import.meta.env.BASE_URL;
</script>

<template>
  <div class="preview">
    <!-- Header -->
    <header class="preview__header">
      <img :src="dspLockup" alt="Deep Space Pharma" class="preview__dsp-logo" width="200" height="52" />
      <div>
        <h1 class="preview__title">Stellaria™ Launch Assets</h1>
        <p class="preview__meta">Deep Space Pharma · STL-PI-2095-03 · Front-End Preview</p>
      </div>
    </header>

    <!-- Deliverables grid -->
    <div class="preview__grid">

      <!-- Banner -->
      <section class="preview__card">
        <div class="preview__card-head">
          <div>
            <span class="preview__label">Deliverable 01</span>
            <h2 class="preview__card-title">300×600 Animated Banner</h2>
          </div>
          <a :href="`${base}banner/`" target="_blank" rel="noopener" class="preview__open-link">
            Open in new tab ↗
          </a>
        </div>
        <div class="preview__banner-stage">
          <iframe
            :src="`${base}banner/`"
            width="300"
            height="600"
            frameborder="0"
            scrolling="no"
            title="Stellaria™ 300×600 banner"
          ></iframe>
        </div>
        <ul class="preview__specs">
          <li>3-frame animation (F1 statement → F2 claim → F3 stat)</li>
          <li>Fixed ISI panel in bottom 300×300</li>
          <li>HTML + CSS + TypeScript · under 1&nbsp;MB</li>
          <li>Chrome · Safari · Firefox · Edge</li>
        </ul>
      </section>

      <!-- Email -->
      <section class="preview__card">
        <div class="preview__card-head">
          <div>
            <span class="preview__label">Deliverable 02</span>
            <h2 class="preview__card-title">600px HTML Email</h2>
          </div>
          <a :href="`${base}email/`" target="_blank" rel="noopener" class="preview__open-link">
            Open in new tab ↗
          </a>
        </div>
        <div class="preview__email-stage">
          <iframe
            :src="`${base}email/`"
            width="100%"
            height="700"
            frameborder="0"
            scrolling="yes"
            title="Stellaria™ HCP email"
          ></iframe>
        </div>
        <ul class="preview__specs">
          <li>Table-based · inline CSS · bulletproof markup</li>
          <li>Gmail · Apple Mail · Outlook 365 web · Outlook 2016</li>
          <li>Dark palette · Helvetica throughout</li>
          <li>Full ISI above footer</li>
        </ul>
      </section>

    </div>
  </div>
</template>

<style scoped>
.preview {
  min-height: 100vh;
  background: var(--ds-obsidian-900);
  color: var(--ds-ice-050);
  font-family: var(--ds-font-body);
  padding: 40px 32px 80px;
}

.preview__header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--ds-obsidian-600);
}

.preview__dsp-logo {
  flex-shrink: 0;
  color: var(--ds-ice-050);
  height: 44px;
  width: auto;
}

.preview__title {
  font-size: var(--ds-text-2xl);
  font-weight: 500;
  letter-spacing: var(--ds-track-tight);
  color: var(--ds-ice-050);
  margin: 0 0 4px;
}

.preview__meta {
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-2xs);
  letter-spacing: var(--ds-track-loose);
  text-transform: uppercase;
  color: var(--ds-ice-400);
  margin: 0;
}

.preview__grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  align-items: start;
}

@media (max-width: 900px) {
  .preview__grid {
    grid-template-columns: 1fr;
  }
}

.preview__card {
  background: var(--ds-obsidian-800);
  border: 1px solid var(--ds-obsidian-600);
  border-radius: var(--ds-r-2);
  overflow: hidden;
}

.preview__card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--ds-obsidian-600);
}

.preview__label {
  display: block;
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-2xs);
  letter-spacing: var(--ds-track-loose);
  text-transform: uppercase;
  color: var(--ds-plasma-500);
  margin-bottom: 4px;
}

.preview__card-title {
  font-size: var(--ds-text-lg);
  font-weight: 500;
  color: var(--ds-ice-050);
  margin: 0;
}

.preview__open-link {
  font-size: var(--ds-text-sm);
  color: var(--ds-plasma-500);
  text-decoration: none;
  white-space: nowrap;
  margin-top: 4px;
  transition: color var(--ds-dur-fast) var(--ds-ease-out);
}
.preview__open-link:hover {
  color: var(--ds-plasma-300);
}

.preview__banner-stage {
  padding: 24px;
  display: flex;
  justify-content: center;
  background: var(--ds-obsidian-900);
}

.preview__email-stage {
  background: var(--ds-obsidian-900);
  overflow: hidden;
}

.preview__email-stage iframe {
  display: block;
  width: 100%;
}

.preview__specs {
  list-style: none;
  padding: 16px 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-top: 1px solid var(--ds-obsidian-600);
}

.preview__specs li {
  font-size: var(--ds-text-sm);
  color: var(--ds-ice-400);
  padding-left: 14px;
  position: relative;
}

.preview__specs li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--ds-plasma-500);
}
</style>
