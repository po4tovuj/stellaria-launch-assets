<script setup lang="ts">
const base = import.meta.env.BASE_URL;
</script>

<template>
  <div class="preview">

    <!-- ── PAGE HEADER ── -->
    <header class="preview__header">
      <div class="preview__header-inner">
        <div class="preview__brand">
          <!-- Inline DSP lockup SVG so currentColor inherits correctly -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 56" role="img" aria-label="Deep Space Pharma" class="preview__dsp-svg">
            <g transform="translate(4 4)">
              <ellipse cx="24" cy="24" rx="22" ry="9" fill="none" stroke="currentColor" stroke-width="1.25" opacity="0.55" transform="rotate(-18 24 24)"/>
              <ellipse cx="24" cy="24" rx="9" ry="22" fill="none" stroke="currentColor" stroke-width="1.25" opacity="0.85" transform="rotate(-18 24 24)"/>
              <circle cx="24" cy="24" r="3.2" fill="#6FE4F3"/>
              <circle cx="43" cy="18" r="1.6" fill="#6FE4F3"/>
            </g>
            <text x="58" y="24" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="13" letter-spacing="0.22em" fill="currentColor">DEEP SPACE</text>
            <text x="58" y="42" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="13" letter-spacing="0.22em" fill="currentColor">PHARMA</text>
            <text x="178" y="17" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="8" opacity="0.65" fill="currentColor">®</text>
          </svg>
        </div>
        <div class="preview__title-block">
          <h1 class="preview__title">Stellaria™ Launch Assets</h1>
          <p class="preview__meta">STL-PI-2095-03 · Front-End Preview</p>
        </div>
      </div>
    </header>

    <!-- ── DELIVERABLES ── -->
    <main class="preview__main">

      <!-- BANNER -->
      <section class="preview__section">
        <div class="preview__section-head">
          <div>
            <span class="preview__label">01 / Banner Ad</span>
            <h2 class="preview__section-title">300 × 600 Animated HTML5</h2>
          </div>
          <a :href="`${base}banner/`" target="_blank" rel="noopener" class="preview__link">
            Open ↗
          </a>
        </div>

        <div class="preview__banner-wrap">
          <div class="preview__banner-border">
            <iframe
              :src="`${base}banner/`"
              width="300"
              height="600"
              frameborder="0"
              scrolling="no"
              title="Stellaria™ 300×600 banner"
            ></iframe>
          </div>
        </div>

        <ul class="preview__spec-list">
          <li>3-frame animation: statement → capsule claim → stat counter 0→412</li>
          <li>Fixed 300×300 ISI panel — visible in all frames</li>
          <li>HTML + CSS + TypeScript · under 1 MB total</li>
          <li>Chrome · Safari · Firefox · Edge</li>
        </ul>
      </section>

      <!-- EMAIL -->
      <section class="preview__section preview__section--email">
        <div class="preview__section-head">
          <div>
            <span class="preview__label">02 / HTML Email</span>
            <h2 class="preview__section-title">600 px · Dark · HCP</h2>
          </div>
          <a :href="`${base}email/`" target="_blank" rel="noopener" class="preview__link">
            Open ↗
          </a>
        </div>

        <div class="preview__email-wrap">
          <iframe
            :src="`${base}email/`"
            width="100%"
            height="800"
            frameborder="0"
            scrolling="yes"
            title="Stellaria™ HCP email"
          ></iframe>
        </div>

        <ul class="preview__spec-list">
          <li>Table-based · all inline CSS · bulletproof markup</li>
          <li>Gmail · Apple Mail · Outlook 365 web · Outlook 2016 (VML fallback)</li>
          <li>Dark palette · Helvetica throughout · ISI above footer</li>
        </ul>
      </section>

    </main>

    <footer class="preview__footer">
      <p>© 2095 Deep Space Pharma · STL-PI-2095-03 (fictional)</p>
    </footer>

  </div>
</template>

<style>
/* Global reset for preview page */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--ds-obsidian-900); }
</style>

<style scoped>
.preview {
  min-height: 100vh;
  background: var(--ds-obsidian-900);
  color: var(--ds-ice-050);
  font-family: var(--ds-font-body);
  -webkit-font-smoothing: antialiased;
}

/* ── HEADER ── */
.preview__header {
  border-bottom: 1px solid var(--ds-obsidian-600);
}

.preview__header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.preview__brand {
  flex-shrink: 0;
}

.preview__dsp-svg {
  height: 40px;
  width: auto;
  color: var(--ds-ice-050);
  display: block;
}

.preview__title-block {
  border-left: 1px solid var(--ds-obsidian-600);
  padding-left: 20px;
}

.preview__title {
  font-size: var(--ds-text-xl);
  font-weight: 500;
  letter-spacing: var(--ds-track-tight);
  color: var(--ds-ice-050);
  line-height: 1.1;
}

.preview__meta {
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-2xs);
  letter-spacing: var(--ds-track-loose);
  text-transform: uppercase;
  color: var(--ds-ice-400);
  margin-top: 4px;
}

/* ── MAIN ── */
.preview__main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 40px 60px;
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 56px;
  align-items: start;
}

@media (max-width: 860px) {
  .preview__main {
    grid-template-columns: 1fr;
    padding: 32px 24px 48px;
  }
}

/* ── SECTION ── */
.preview__section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.preview__section-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
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

.preview__section-title {
  font-size: var(--ds-text-lg);
  font-weight: 500;
  color: var(--ds-ice-050);
  letter-spacing: var(--ds-track-tight);
}

.preview__link {
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-sm);
  color: var(--ds-plasma-500);
  text-decoration: none;
  white-space: nowrap;
  padding-top: 2px;
  transition: color var(--ds-dur-fast) var(--ds-ease-out);
}
.preview__link:hover { color: var(--ds-plasma-300); }

/* ── BANNER WRAP ── */
.preview__banner-wrap {
  display: flex;
  justify-content: center;
}

.preview__banner-border {
  border: 1px solid var(--ds-obsidian-600);
  border-radius: 2px;
  overflow: hidden;
  width: 300px;
  height: 600px;
  flex-shrink: 0;
  /* Shadow to lift the banner off the page */
  box-shadow: 0 0 0 1px rgba(111, 228, 243, 0.06), 0 24px 48px rgba(0, 0, 0, 0.6);
}

.preview__banner-border iframe {
  display: block;
  width: 300px;
  height: 600px;
  border: 0;
}

/* ── EMAIL WRAP ── */
.preview__email-wrap {
  border: 1px solid var(--ds-obsidian-600);
  border-radius: 2px;
  overflow: hidden;
  background: var(--ds-obsidian-900);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
}

.preview__email-wrap iframe {
  display: block;
  width: 100%;
  min-height: 800px;
}

/* ── SPEC LIST ── */
.preview__spec-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.preview__spec-list li {
  font-size: var(--ds-text-sm);
  color: var(--ds-ice-400);
  padding-left: 14px;
  position: relative;
  line-height: 1.5;
}
.preview__spec-list li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--ds-plasma-500);
}

/* ── FOOTER ── */
.preview__footer {
  border-top: 1px solid var(--ds-obsidian-600);
  padding: 20px 40px;
  text-align: center;
}

.preview__footer p {
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-2xs);
  letter-spacing: var(--ds-track-loose);
  text-transform: uppercase;
  color: var(--ds-ice-400);
}
</style>
