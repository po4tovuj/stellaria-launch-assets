import { describe, it, expect } from 'vitest';
import { COPY } from '../src/lib/copy';

describe('COPY.banner', () => {
  it('has all required fields', () => {
    expect(COPY.banner.frame1Headline).toBeTruthy();
    expect(COPY.banner.frame2Headline).toBeTruthy();
    expect(COPY.banner.frame3Stat).toBeTruthy();
    expect(COPY.banner.frame3StatLabel).toBeTruthy();
    expect(COPY.banner.frame3Headline).toBeTruthy();
    expect(COPY.banner.cta).toBeTruthy();
    expect(COPY.banner.isiTitle).toBeTruthy();
  });

  it('frame3Stat is a numeric string', () => {
    expect(Number(COPY.banner.frame3Stat)).not.toBeNaN();
  });
});

describe('COPY.email', () => {
  it('has exactly 3 benefit items', () => {
    expect(COPY.email.benefits).toHaveLength(3);
  });

  it('has exactly 3 reference items', () => {
    expect(COPY.email.references).toHaveLength(3);
  });

  it('every benefit has label, title, and body', () => {
    for (const b of COPY.email.benefits) {
      expect(b.label).toBeTruthy();
      expect(b.title).toBeTruthy();
      expect(b.body).toBeTruthy();
    }
  });

  it('benefit labels are numbered sequentially', () => {
    expect(COPY.email.benefits[0].label).toMatch(/^01/);
    expect(COPY.email.benefits[1].label).toMatch(/^02/);
    expect(COPY.email.benefits[2].label).toMatch(/^03/);
  });

  it('has required email metadata fields', () => {
    expect(COPY.email.subject).toBeTruthy();
    expect(COPY.email.preheader).toBeTruthy();
    expect(COPY.email.heroHeadline).toBeTruthy();
    expect(COPY.email.cta).toBeTruthy();
  });
});

describe('COPY.isi', () => {
  it('has boxed warning with title and body', () => {
    expect(COPY.isi.boxedWarning.title).toContain('WARNING');
    expect(COPY.isi.boxedWarning.body.length).toBeGreaterThan(50);
  });

  it('has at least 6 ISI sections', () => {
    expect(COPY.isi.sections.length).toBeGreaterThanOrEqual(6);
  });

  it('every non-footer section has heading and body', () => {
    const contentSections = COPY.isi.sections.filter((s) => !('isFooter' in s));
    for (const s of contentSections) {
      expect(s.heading).toBeTruthy();
      expect(s.body.length).toBeGreaterThan(10);
    }
  });

  it('last section is the footer PI reference', () => {
    const last = COPY.isi.sections[COPY.isi.sections.length - 1];
    expect(last).toHaveProperty('isFooter', true);
  });
});
