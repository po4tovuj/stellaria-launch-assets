import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  BannerAnimation,
  calculateCounterValue,
  FRAME_CONFIG,
} from '../src/lib/banner-animation';

describe('calculateCounterValue', () => {
  it('returns from value at progress 0', () => {
    expect(calculateCounterValue(0, 0, 412)).toBe(0);
  });

  it('returns to value at progress 1', () => {
    expect(calculateCounterValue(1, 0, 412)).toBe(412);
  });

  it('clamps progress above 1', () => {
    expect(calculateCounterValue(2, 0, 412)).toBe(412);
  });

  it('clamps progress below 0', () => {
    expect(calculateCounterValue(-0.5, 0, 412)).toBe(0);
  });

  it('ease-out: midpoint value exceeds linear midpoint', () => {
    const mid = calculateCounterValue(0.5, 0, 100);
    expect(mid).toBeGreaterThan(50);
  });

  it('works with arbitrary from/to range', () => {
    expect(calculateCounterValue(1, 100, 200)).toBe(200);
    expect(calculateCounterValue(0, 100, 200)).toBe(100);
  });
});

describe('BannerAnimation', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts on frame 1', () => {
    const frames: number[] = [];
    const anim = new BannerAnimation({ onFrameChange: (f) => frames.push(f) });
    anim.start();
    expect(anim.getCurrentFrame()).toBe(1);
    expect(frames).toEqual([1]);
  });

  it('advances to frame 2 after frame 1 hold', () => {
    const anim = new BannerAnimation();
    anim.start();
    vi.advanceTimersByTime(FRAME_CONFIG[1].hold);
    expect(anim.getCurrentFrame()).toBe(2);
  });

  it('advances to frame 3 after frame 1 + frame 2 holds', () => {
    const anim = new BannerAnimation();
    anim.start();
    vi.advanceTimersByTime(FRAME_CONFIG[1].hold + FRAME_CONFIG[2].hold);
    expect(anim.getCurrentFrame()).toBe(3);
  });

  it('stays on frame 3 permanently', () => {
    const anim = new BannerAnimation();
    anim.start();
    vi.advanceTimersByTime(FRAME_CONFIG[1].hold + FRAME_CONFIG[2].hold + 60_000);
    expect(anim.getCurrentFrame()).toBe(3);
  });

  it('calls onFrameChange in sequence 1 → 2 → 3', () => {
    const frames: number[] = [];
    const anim = new BannerAnimation({ onFrameChange: (f) => frames.push(f) });
    anim.start();
    vi.advanceTimersByTime(FRAME_CONFIG[1].hold + FRAME_CONFIG[2].hold + 1);
    expect(frames).toEqual([1, 2, 3]);
  });

  it('destroy cancels pending frame advances', () => {
    const frames: number[] = [];
    const anim = new BannerAnimation({ onFrameChange: (f) => frames.push(f) });
    anim.start();
    anim.destroy();
    vi.advanceTimersByTime(FRAME_CONFIG[1].hold + FRAME_CONFIG[2].hold + 1);
    expect(frames).toEqual([1]);
  });

  it('counter ticks via injected requestAnimationFrame', () => {
    const ticks: number[] = [];
    let rafCb: FrameRequestCallback | null = null;
    const mockRaf = vi.fn((cb: FrameRequestCallback) => {
      rafCb = cb;
      return 0;
    });

    const anim = new BannerAnimation({
      onCounterTick: (v) => ticks.push(v),
      requestAnimationFrame: mockRaf,
    });
    anim.start();
    vi.advanceTimersByTime(FRAME_CONFIG[1].hold + FRAME_CONFIG[2].hold);

    // Simulate first rAF tick at t=0 (progress 0)
    vi.spyOn(performance, 'now').mockReturnValue(0);
    rafCb!(0);
    expect(ticks[0]).toBe(0);

    // Simulate rAF tick at full duration (progress 1)
    vi.spyOn(performance, 'now').mockReturnValue(2400);
    rafCb!(2400);
    expect(ticks[ticks.length - 1]).toBe(412);
  });
});
