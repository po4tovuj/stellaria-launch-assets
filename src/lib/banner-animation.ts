export type Frame = 1 | 2 | 3;

export interface FrameConfig {
  hold: number;
  transition: number;
}

export const FRAME_CONFIG: Record<Frame, FrameConfig> = {
  1: { hold: 3200, transition: 700 },
  2: { hold: 3200, transition: 700 },
  3: { hold: 0, transition: 0 },
};

export function calculateCounterValue(progress: number, from: number, to: number): number {
  const clamped = Math.min(Math.max(progress, 0), 1);
  const eased = 1 - Math.pow(1 - clamped, 3);
  return Math.round(from + (to - from) * eased);
}

export interface BannerAnimationOptions {
  onFrameChange?: (frame: Frame) => void;
  onCounterTick?: (value: number) => void;
  requestAnimationFrame?: (cb: FrameRequestCallback) => number;
}

export class BannerAnimation {
  private frame: Frame = 1;
  private timers: ReturnType<typeof setTimeout>[] = [];
  private readonly opts: Required<BannerAnimationOptions>;

  constructor(options: BannerAnimationOptions = {}) {
    this.opts = {
      onFrameChange: options.onFrameChange ?? (() => {}),
      onCounterTick: options.onCounterTick ?? (() => {}),
      requestAnimationFrame:
        options.requestAnimationFrame ??
        ((cb) => globalThis.requestAnimationFrame(cb)),
    };
  }

  start(): void {
    this.setFrame(1);
  }

  private setFrame(frame: Frame): void {
    this.frame = frame;
    this.opts.onFrameChange(frame);

    if (frame === 3) {
      this.runCounter();
      return;
    }

    const { hold } = FRAME_CONFIG[frame];
    const t = setTimeout(() => this.setFrame((frame + 1) as Frame), hold);
    this.timers.push(t);
  }

  private runCounter(): void {
    const duration = 2400;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      this.opts.onCounterTick(calculateCounterValue(progress, 0, 412));
      if (progress < 1) this.opts.requestAnimationFrame(tick);
    };

    this.opts.requestAnimationFrame(tick);
  }

  getCurrentFrame(): Frame {
    return this.frame;
  }

  destroy(): void {
    this.timers.forEach(clearTimeout);
    this.timers = [];
  }
}
