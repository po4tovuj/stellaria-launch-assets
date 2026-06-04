<script setup lang="ts">
import capsuleUrl from '../../assets/stellaria-capsule.png'
import wordmarkUrl from '../../assets/stellaria-wordmark.svg'
import lockupUrl from '../../assets/deep-space-pharma-lockup.svg'
</script>

<!--
  600px single-column HCP email.
  Table-based, all inline CSS, bulletproof markup.
  Renders cleanly in Gmail · Apple Mail · Outlook 365 web · Outlook 2016 (VML CTA fallback).
  Dark mode: explicit bg-color on every cell; prefers-color-scheme + [data-ogsc] overrides.
-->
<template>
  <div class="et">

    <!-- ── PREHEADER (hidden preview text) ── -->
    <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;max-width:0;color:#05070c;opacity:0;">
      Indicated for hibernation-assist on missions ≥90 days. Please see full prescribing information.&nbsp;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;
    </div>

    <!-- ── EMAIL WRAPPER ── -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#05070c" style="background-color:#05070c;">
      <tbody>
      <tr>
        <td align="center" valign="top" bgcolor="#05070c" style="background-color:#05070c;">

          <!-- CONTENT CONTAINER: 600px -->
          <table class="et-container" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:600px;border:1px solid #233359;background-color:#05070c;">
            <tbody>

            <!-- ══ HEADER ══ -->
            <tr>
              <td class="et-pad" style="padding-top:28px;padding-bottom:20px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                  <tr>
                    <td valign="middle">
                      <!--[if !mso]><!-->
                      <img :src="wordmarkUrl" alt="STELLARIA" width="180" height="40"
                        style="display:block;max-width:180px;height:auto;color:#f5f7fb;" />
                      <!--<![endif]-->
                      <!--[if mso]><span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:22px;font-weight:500;color:#f5f7fb;letter-spacing:4px;">STELLARIA</span><![endif]-->
                    </td>
                    <td valign="middle" align="right">
                      <span class="et-mono" style="color:#d6dceb;white-space:nowrap;">Rx&nbsp;Only</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- Hairline -->
            <tr>
              <td style="height:1px;font-size:1px;line-height:1px;">&nbsp;</td>
            </tr>

            <!-- ══ HERO — eyebrow + headline + drug label ══ -->
            <tr>
              <td class="et-pad" style="padding:0 16px;">
                <p class="et-mono" style="margin:0 0 14px 0;color:#d6dceb;">Now available for Fleet Medical formularies</p>
                <h1 style="margin:0 0 14px 0;font-size:36px;font-weight:500;line-height:1.1;letter-spacing:-0.02em;color:#f5f7fb;">Clarity on arrival.</h1>
                <p style="margin:0;color:#98a3ba;">Stellaria™ (morphanidine-C) 12&nbsp;mg tablets &mdash; prescription hibernation-assist for long-haul crew.</p>
              </td>
            </tr>

            <!-- ══ HERO — capsule image ══ -->
            <tr>
              <td align="center" style="padding:24px 0 0 0;">
                <img :src="capsuleUrl" alt="Stellaria™ capsule" width="280" height="280"
                  class="et-capsule"
                  style="display:block;max-width:280px;width:280px;height:auto;" />
              </td>
            </tr>

            <!-- ══ HERO — body copy + CTA ══ -->
            <tr>
              <td class="et-pad" bgcolor="#0b1426" style="padding:32px 40px 16px;border:1px solid #233359;font-size:15px;line-height:1.6;background-color:#0b1426;">
                <p>
                  Stellaria™ (morphanidine-C) is a prescription hibernation-assist tablet indicated for cryo-induction support in licensed deep-space personnel on missions of 90 days or longer. In the pivotal ORION-3 trial, pilots administered Stellaria prior to cryosleep reported a 94% reduction in post-thaw cognitive fog versus placebo at T+0:30.
                </p>
                <!-- CTA — VML roundrect for Outlook 2016, anchor for everything else -->
                <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
                  <tbody>
                  <tr>
                    <td align="center" style="border-radius:2px;text-align:center;padding:24px 40px 40px;">
                      <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"
                        href="#" style="height:40px;v-text-anchor:middle;width:148px;" arcsize="5%" stroke="f" fillcolor="#6fe4f3">
                        <w:anchorlock/>
                        <center style="color:#05070c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.02em;">Learn More</center>
                      </v:roundrect>
                      <![endif]-->
                      <!--[if !mso]><!-->
                      <a href="#" style="display:inline-block;padding:0 24px;height:40px;line-height:40px;font-weight:700;letter-spacing:0.02em;color:#05070c;text-decoration:none;border-radius:2px;background-color:#6fe4f3;">Learn More</a>
                      <!--<![endif]-->
                    </td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- ══ CLINICAL PROFILE ══ -->
            <tr style="width: 100%">
              <td style="padding:40px 40px 48px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                  <tr>
                    <td colspan="2" class="et-pad">
                      <p class="et-mono" style="margin:0 0 20px 0;color:#98a3ba;">Clinical Profile</p>
                    </td>
                  </tr>

                  <!-- Benefit 01 -->
                  <tr style="border-top:1px solid #233359;">
                    <td style="padding:20px 0;">
                      <p style="width:56px;height:56px;border:1px solid #233359;background-color:#0b1426;display:flex;align-items:center;">
                        <svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="color:#6fe4f3;display:block;margin:0 auto;">
                          <circle cx="24" cy="24" r="18" opacity="0.35"></circle>
                          <circle cx="24" cy="24" r="11" opacity="0.6"></circle>
                          <path d="M 4 24 H 14 L 17 18 L 20 30 L 23 22 L 26 26 L 29 20 L 32 28 L 35 24 H 44"></path>
                          <circle cx="24" cy="6" r="1.3" fill="currentColor"></circle>
                          <circle cx="24" cy="42" r="1.3" fill="currentColor"></circle>
                        </svg>
                      </p>
                    </td>
                    <td style="padding: 20px 0 20px 20px;">
                      <p class="et-mono" style="margin:0 0 6px 0;color:#98a3ba;">01&nbsp;/&nbsp;Homeostatic support</p>
                      <p style="margin:0 0 8px 0;font-size:17px;font-weight:500;line-height:1.3;color:#f5f7fb;">Stabilizes core functions through induction.</p>
                      <p style="margin:0;">Supports cardiovascular, metabolic, and neural homeostasis across the induction-to-thaw window without sustained sedative load.</p>
                    </td>
                  </tr>

                  <!-- Benefit 02 -->
                  <tr style="border-top:1px solid #233359;">
                    <td style="padding:20px 0;">
                      <p style="width:56px;height:56px;border:1px solid #233359;background-color:#0b1426;display:flex;align-items:center;"><svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="color:#6fe4f3;display:block;margin:0 auto;"><line x1="3" y1="34" x2="45" y2="34"></line><path d="M 10 34 A 14 14 0 0 1 38 34"></path><line x1="24" y1="6" x2="24" y2="12"></line><line x1="10" y1="14" x2="14" y2="18"></line><line x1="38" y1="14" x2="34" y2="18"></line><line x1="4" y1="24" x2="9" y2="24"></line><line x1="44" y1="24" x2="39" y2="24"></line><circle cx="24" cy="34" r="1.6" fill="currentColor"></circle></svg></p>
                    </td>
                    <td style="padding: 20px 0 20px 20px;">
                      <p class="et-mono" style="margin:0 0 6px 0;color:#98a3ba;">02&nbsp;/&nbsp;Wake clarity</p>
                      <p style="margin:0 0 8px 0;font-size:17px;font-weight:500;line-height:1.3;color:#f5f7fb;">Eliminates post-thaw cognitive fog.</p>
                      <p style="margin:0;">In controlled trials, 94% of subjects achieved full psychomotor baseline within 30&nbsp;minutes of re-animation (vs. 12% on placebo).</p>
                    </td>
                  </tr>

                  <!-- Benefit 03 -->
                  <tr style="border-top:1px solid #233359;">
                    <td style="padding:20px 0;">
                      <p style="width:56px;height:56px;border:1px solid #233359;background-color:#0b1426;display:flex;align-items:center;"><svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="color:#6fe4f3;display:block;margin:0 auto;"><path d="M 24 4 L 40 10 V 24 C 40 33 33 40 24 44 C 15 40 8 33 8 24 V 10 Z"></path><path d="M 17 24 L 22 29 L 32 19"></path><circle cx="24" cy="4" r="1.3" fill="currentColor"></circle></svg></p>
                    </td>
                    <td style="padding: 20px 0 20px 20px;">
                      <p class="et-mono" style="margin:0 0 6px 0;color:#98a3ba;">03&nbsp;/&nbsp;Fleet-tested</p>
                      <p style="margin:0 0 8px 0;font-size:17px;font-weight:500;line-height:1.3;color:#f5f7fb;">Cleared for missions ≥90&nbsp;days.</p>
                      <p style="margin:0;">Studied across 412 pilots on Mars-transit and Belt-rotation protocols. Compatible with standard Class-II cryo berths.</p>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- ══ REFERENCES ══ -->
            <tr style="background-color: #0b1426;">
              <td class="et-pad" style="padding-bottom:40px;border-top:1px solid #233359;">
                <p class="et-mono" style="margin:20px 0 8px 0;color:#98a3ba;">References</p>
                <p style="margin:0 0 6px 0;font-size:11px;line-height:1.5;color:#98a3ba;">1. Okafor RN, Tanaka H, et al. ORION-3: A Phase III trial of morphanidine-C in cryo-induction support. <em>J Interstellar Med.</em> 2094;41(3):218–230.</p>
                <p style="margin:0 0 6px 0;font-size:11px;line-height:1.5;color:#98a3ba;">2. Deep Space Pharma. STELLARIA (morphanidine-C) tablets prescribing information. Luna Prime, DSP; 2095.</p>
                <p style="margin:0;font-size:11px;line-height:1.5;color:#98a3ba;">3. Fleet Medical Advisory 24-MC-07. Standards for pharmacologic cryo-induction support. UNSA Medical Command; 2094.</p>
              </td>
            </tr>

            <!-- ══ ISI — BOXED WARNING ══ -->
            <tr>
              <td class="et-pad" style="padding:40px 32px 24px;">
                <div style="border:1px solid #ffc75a;padding:16px 18px;">
                  <p style="margin:0 0 8px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ffc75a;line-height:1.3;">&#9888;&nbsp;WARNING: ION DRIVE CO-EXPOSURE AND CARDIAC ARRHYTHMIA</p>
                  <p style="margin:0;font-size:12px;line-height:1.55;">Concurrent ion drive co-exposure within 6 hours of Stellaria administration has been associated with prolonged QT interval and, in rare cases, Torsades-class arrhythmia during cryo-induction. Do not administer Stellaria within 6 hours of active ion drive proximity (≤40&nbsp;m, shielded), or within 12 hours (unshielded). Obtain a baseline ECG prior to first dose and prior to any subsequent cryo-induction cycle.</p>
                </div>
              </td>
            </tr>

            <!-- ══ ISI — SECTIONS ══ -->
            <tr>
              <td class="et-pad" bgcolor="#05070c" style="background-color:#05070c;padding-bottom:40px;display:flex;flex-direction:column;gap:10px;">
                <p class="et-mono" style="margin:0 0 14px 0;color:#98a3ba;">Important Safety Information</p>
                <p style="padding-bottom:10px;border-bottom:1px solid #233359;"><strong style="color:#f5f7fb;">Indication.</strong>&nbsp;STELLARIA (morphanidine-C) tablets are indicated as hibernation-assist therapy in licensed deep-space personnel ≥21&nbsp;years of age undergoing planned cryo-induction on missions of 90&nbsp;days or longer. Stellaria is intended for pre-mission administration under the supervision of a Fleet Medical Officer.</p>
                <p style="padding-bottom:10px;border-bottom:1px solid #233359;"><strong style="color:#f5f7fb;">Contraindications.</strong>&nbsp;Stellaria is contraindicated in patients with: known hypersensitivity to morphanidine-C or any tablet excipient; active cryo-sensitization syndrome (CSS); uncorrected Grade&nbsp;II or higher telomeric instability; concurrent use of Class-III temporal stabilizers (e.g., chronazepam, temporalin); pregnancy confirmed or suspected at time of dosing.</p>
                <p style="padding-bottom:10px;border-bottom:1px solid #233359;"><strong style="color:#f5f7fb;">Warnings and Precautions.</strong>&nbsp;Cardiac effects: see Boxed Warning. Hypothalamic set-point drift has been reported during first-exposure inductions; monitor core temperature for 90&nbsp;minutes post-thaw. Neuro-vestibular effects, including transient orientation loss, may occur on re-animation; patients should not perform EVA duties for 120&nbsp;minutes post-thaw.</p>
                <p style="padding-bottom:10px;border-bottom:1px solid #233359;"><strong style="color:#f5f7fb;">Adverse Reactions.</strong>&nbsp;Most common adverse reactions (≥5%, vs. placebo) in the ORION-3 trial were: dry mouth (11%), mild paresthesia of the extremities during re-animation (9%), transient temporal displacement (7%), metallic taste (6%), and mild photosensitivity for up to 24&nbsp;hours post-thaw (5%).</p>
                <p style="padding-bottom:10px;border-bottom:1px solid #233359;"><strong style="color:#f5f7fb;">Drug Interactions.</strong>&nbsp;Avoid concurrent use with Class-III temporal stabilizers and with monoamine oxidase inhibitors within 14&nbsp;days. Ion drive co-exposure: see Boxed Warning. Caffeine analogs (&gt;400&nbsp;mg/day caf-eq) may blunt induction onset; advise patients to discontinue 48&nbsp;hours prior to dosing.</p>
                <p style="padding-bottom:10px;border-bottom:1px solid #233359;"><strong style="color:#f5f7fb;">Use in Specific Populations.</strong>&nbsp;Pregnancy: contraindicated; morphanidine-C crosses the placental barrier with unknown effects on fetal cryo-tolerance. Lactation: not recommended. Pediatric use: safety and effectiveness not established in patients under 21&nbsp;years. Hepatic/renal impairment: reduce dose by 50% in moderate impairment; contraindicated in severe.</p>
                <p style="font-style:italic;color:#6fe4f3;">Please see full Prescribing Information, including Boxed Warning, at stellaria-hcp.dsp.</p>
              </td>
            </tr>

            <!-- ══ FOOTER ══ -->
            <tr>
              <td class="et-pad" bgcolor="#0B1426" style="background-color:#0B1426;padding:28px 40px 20px;">
                <!--[if !mso]><!-->
                <img :src="lockupUrl" alt="Deep Space Pharma" width="200" height="52"
                  style="display:block;max-width:200px;height:auto;margin-bottom:20px;color:#f5f7fb;" />
                <!--<![endif]-->
                <!--[if mso]><p style="margin:0 0 20px 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;color:#D6DCEB;letter-spacing:3px;">DEEP SPACE PHARMA</p><![endif]-->
                <div class="et-footer" style="display:flex;flex-direction:column;gap:8px;font-size:11px;line-height:1.5;color:#98a3ba;">
                  <p style="color:#D6DCEB;">Deep Space Pharma, Tower 4, Shackleton Medical Park, Luna Prime 00471.</p>
                  <p>You received this because you are a licensed healthcare provider on the DSP Fleet Medical list. <a href="#" style="color:#6fe4f3;text-decoration:underline;">Unsubscribe</a> or <a href="#" style="color:#6fe4f3;text-decoration:underline;">update preferences</a>.</p>
                </div>
              </td>
            </tr>
            <tr>
              <td class="et-pad" bgcolor="#0B1426" style="background-color:#0B1426; font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, 'Courier New', monospace;font-size:10px;color:#98A3BA;letter-spacing:0.12em;padding-top:14px;padding-bottom:32px;border-top:1px solid #233359;">
                &#169; 2095 Deep Space Pharma. STELLARIA and the DSP travel mark are trademarks of Deep Space Pharma. STL-PI-2095-03.
              </td>
            </tr>

            </tbody>
          </table><!-- /et-container -->
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<style>
/*
  Email resets scoped to .et so they don't leak into the Vue app.
  In actual sent email, these live in the <head> <style> block.
*/
.et table { border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
.et td, .et th { margin: 0 !important; }
.et img { border: 0 !important; outline: none; text-decoration: none; display: block; }
.et a { color: #6fe4f3; }

/* Base typography — inherited by all content */
.et-container { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #d6dceb; line-height: 1.6; }

/* Monospace label pattern */
.et-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Courier New', monospace; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; }

/* Section horizontal padding — inline styles only need top/bottom */
.et-pad { padding-left: 32px; padding-right: 32px; }

/* Footer text block */
.et-footer p { margin: 0; }

/* Dark-mode override for Outlook.com */
[data-ogsc] .et { background-color: #05070c !important; }

/* Responsive */
@media screen and (max-width: 620px) {
  .et-container { width: 100% !important; max-width: 100% !important; }
  .et-capsule   { width: 220px !important; height: auto !important; }
  .et-pad       { padding-left: 20px !important; padding-right: 20px !important; }
}

/* Keep dark palette when the OS is in dark mode */
@media (prefers-color-scheme: dark) {
  .et table[bgcolor="#05070c"] { background-color: #05070c !important; }
  .et table[bgcolor="#0b1426"] { background-color: #0b1426 !important; }
  .et table[bgcolor="#152341"] { background-color: #152341 !important; }
}
</style>
