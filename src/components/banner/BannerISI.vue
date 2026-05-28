<template>
  <div class="isi">
    <div class="isi-title">
      <span>Important Safety Information</span>
      <span class="isi-scroll-hint">Scroll ▼</span>
    </div>
    <div class="isi-scroll">

      <div class="isi-warn">
        <p class="isi-warn-title">◆ BOXED WARNING</p>
        <p class="isi-text">
          Concurrent ion drive co-exposure within 6 hours of Stellaria administration has been
          associated with prolonged QT interval and, in rare cases, Torsades-class arrhythmia
          during cryo-induction. Do not administer Stellaria within 6 hours of active ion drive
          proximity (≤40&nbsp;m, shielded), or within 12 hours (unshielded). Obtain a baseline ECG
          prior to first dose and prior to any subsequent cryo-induction cycle.
        </p>
      </div>

      <div class="isi-section">
        <p class="isi-head">Indication</p>
        <p class="isi-text">Stellaria is indicated as hibernation-assist therapy in licensed
          deep-space personnel ≥21 years of age undergoing planned cryo-induction on missions
          of 90 days or longer.
        </p>
      </div>

      <div class="isi-section">
        <p class="isi-head">Contraindications</p>
        <p class="isi-text">Known hypersensitivity to morphanidine-C; active
          cryo-sensitization syndrome (CSS); uncorrected Grade II telomeric instability;
          Class-III temporal stabilizers; pregnancy.
        </p>
      </div>

      <div class="isi-section">
        <p class="isi-head">Warnings and Precautions</p>
        <p class="isi-text">See Boxed Warning. Hypothalamic set-point drift; monitor core
          temperature 90&nbsp;min post-thaw. No EVA duties for 120&nbsp;min post-thaw.
        </p>
      </div>

      <div class="isi-section">
        <p class="isi-head">Adverse Reactions</p>
        <p class="isi-text">Most common (≥5%): dry mouth (11%), mild paresthesia (9%),
          transient temporal displacement (7%), metallic taste (6%), mild photosensitivity (5%).
        </p>
      </div>

      <div class="isi-section">
        <p class="isi-head">Drug Interactions</p>
        <p class="isi-text">Avoid Class-III temporal stabilizers and MAOIs within 14 days.
          Caffeine analogs &gt;400&nbsp;mg/day may blunt induction onset.
        </p>
      </div>

      <div class="isi-section">
        <p class="isi-head">Use in Specific Populations</p>
        <p class="isi-text">Pregnancy: contraindicated. Lactation: not recommended.
          Pediatric (&lt;21&nbsp;y): not established. Hepatic/renal impairment: reduce dose 50%
          moderate; contraindicated severe.
        </p>
      </div>

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
  border-top: 1px solid #6fe4f3;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.isi-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 8px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6fe4f3;
  padding: 8px 14px 7px;
  flex-shrink: 0;
  border-bottom: 1px solid #233359;
}
.isi-scroll-hint {
  letter-spacing: 0.08em;
  text-transform: none;
  color: #98a3ba;
  flex-shrink: 0;
}

.isi-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 9px 14px 12px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #6fe4f3 transparent;
}
.isi-scroll::-webkit-scrollbar { width: 1px; }
.isi-scroll::-webkit-scrollbar-thumb {
  background-color: #6fe4f3;
  border-radius: 99px;
}

.isi-warn {
  padding: 7px 0;
  margin-bottom: 8px;
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
.isi-head {
  font-size: 8.5px;
  font-weight: 700;
  line-height: 1.5;
  color: #f5f7fb;
  margin-bottom: 1px;
}
.isi-pi { font-style: italic; color: #98a3ba; margin-top: 6px; }
</style>
