<template>
  <div class="isi">
    <p class="isi-title">Important Safety Information</p>
    <div class="isi-scroll">

      <div class="isi-warn">
        <p class="isi-warn-title">⚠ WARNING: ION DRIVE CO-EXPOSURE AND CARDIAC ARRHYTHMIA</p>
        <p class="isi-text">
          Concurrent ion drive co-exposure within 6 hours of Stellaria administration has been
          associated with prolonged QT interval and, in rare cases, Torsades-class arrhythmia
          during cryo-induction. Do not administer Stellaria within 6 hours of active ion drive
          proximity (≤40&nbsp;m, shielded), or within 12 hours (unshielded). Obtain a baseline ECG
          prior to first dose and prior to any subsequent cryo-induction cycle.
        </p>
      </div>

      <p class="isi-text isi-section">
        <span class="isi-head">Indication. </span>STELLARIA (morphanidine-C) tablets are
        indicated as hibernation-assist therapy in licensed deep-space personnel ≥21 years of age
        undergoing planned cryo-induction on missions of 90 days or longer.
      </p>

      <p class="isi-text isi-section">
        <span class="isi-head">Contraindications. </span>Known hypersensitivity to
        morphanidine-C; active cryo-sensitization syndrome (CSS); uncorrected Grade II telomeric
        instability; Class-III temporal stabilizers; pregnancy.
      </p>

      <p class="isi-text isi-section">
        <span class="isi-head">Warnings and Precautions. </span>See Boxed Warning.
        Hypothalamic set-point drift; monitor core temperature 90&nbsp;min post-thaw.
        No EVA duties for 120&nbsp;min post-thaw.
      </p>

      <p class="isi-text isi-section">
        <span class="isi-head">Adverse Reactions. </span>Most common (≥5%): dry mouth (11%),
        mild paresthesia (9%), transient temporal displacement (7%), metallic taste (6%),
        mild photosensitivity (5%).
      </p>

      <p class="isi-text isi-section">
        <span class="isi-head">Drug Interactions. </span>Avoid Class-III temporal stabilizers
        and MAOIs within 14 days. Caffeine analogs &gt;400&nbsp;mg/day may blunt induction onset.
      </p>

      <p class="isi-text isi-section">
        <span class="isi-head">Use in Specific Populations. </span>Pregnancy: contraindicated.
        Lactation: not recommended. Pediatric (&lt;21&nbsp;y): not established.
        Hepatic/renal impairment: reduce dose 50% moderate; contraindicated severe.
      </p>

      <p class="isi-text isi-pi">
        Please see full Prescribing Information at stellaria-hcp.dsp.
      </p>

    </div>
  </div>
</template>

<style scoped>
.isi {
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  background-color: #0b1426;
  border-top: 1px solid #233359;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.isi-title {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 8px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #98a3ba;
  padding: 8px 14px 7px;
  flex-shrink: 0;
  border-bottom: 1px solid #233359;
}

/* Scrollable ISI — independent of creative region */
.isi-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 9px 14px 12px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #233359 transparent;
}
.isi-scroll::-webkit-scrollbar { width: 2px; }
.isi-scroll::-webkit-scrollbar-thumb {
  background-color: #233359;
  border-radius: 99px;
}

.isi-warn {
  border: 1px solid #ffc75a;
  padding: 7px 9px;
  margin-bottom: 8px;
  border-radius: 2px;
}
.isi-warn-title {
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #ffc75a;
  line-height: 1.3;
  margin-bottom: 4px;
}
.isi-text {
  font-size: 8.5px;
  line-height: 1.5;
  color: #d6dceb;
}
.isi-section { margin-bottom: 6px; }
.isi-head { font-weight: 700; color: #f5f7fb; }
.isi-pi { font-style: italic; color: #98a3ba; margin-top: 6px; }
</style>
