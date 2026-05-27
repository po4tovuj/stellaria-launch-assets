<script setup lang="ts">
/**
 * Renders the standalone email deliverable (email/index.html) in an iframe.
 * The iframe keeps the table-based XHTML email isolated from the Vue app's
 * CSS, which is intentional — email clients render it independently too.
 */
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="email-shell">
    <!-- Simulated email client chrome -->
    <div class="email-chrome">
      <div class="email-chrome__dot" aria-hidden="true"></div>
      <div class="email-chrome__dot" aria-hidden="true"></div>
      <div class="email-chrome__dot" aria-hidden="true"></div>
      <span class="email-chrome__label">HTML Email Preview</span>
    </div>

    <!-- The actual deliverable email, isolated in an iframe -->
    <iframe
      :src="`${base}email/`"
      title="Stellaria™ HCP email"
      frameborder="0"
      scrolling="yes"
      class="email-frame"
    ></iframe>
  </div>
</template>

<style scoped>
.email-shell {
  width: 100%;
  border: 1px solid var(--t-edge);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
}

.email-chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: var(--t-card);
  border-bottom: 1px solid var(--t-edge);
}
.email-chrome__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--t-edge);
  flex-shrink: 0;
}
.email-chrome__label {
  margin-left: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--t-faint);
}

.email-frame {
  display: block;
  width: 100%;
  min-height: 900px;
  border: 0;
}
</style>
