import './style.css';
import { BannerAnimation } from '../lib/banner-animation';

function init(): void {
  const frames = Array.from(
    document.querySelectorAll<HTMLElement>('.banner__frame'),
  );
  const counterEl = document.querySelector<HTMLElement>('.banner__counter-val');

  const anim = new BannerAnimation({
    onFrameChange(frame) {
      frames.forEach((el, i) => {
        const n = i + 1;
        el.dataset.state = n === frame ? 'active' : n < frame ? 'past' : 'future';
      });
    },
    onCounterTick(value) {
      if (counterEl) counterEl.textContent = String(value);
    },
  });

  anim.start();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
