import { ref, onMounted, onUnmounted } from 'vue'
import { BannerAnimation } from '../lib/banner-animation'
import type { Frame } from '../lib/banner-animation'

export function useBannerAnimation() {
  const currentFrame = ref<Frame>(1)
  const counterValue = ref(0)
  let anim: BannerAnimation | null = null

  onMounted(() => {
    anim = new BannerAnimation({
      onFrameChange: (f) => { currentFrame.value = f },
      onCounterTick: (v) => { counterValue.value = v },
    })
    anim.start()
  })

  onUnmounted(() => {
    anim?.destroy()
  })

  function frameState(n: Frame): 'active' | 'past' | 'future' {
    if (currentFrame.value === n) return 'active'
    if (currentFrame.value > n) return 'past'
    return 'future'
  }

  return { currentFrame, counterValue, frameState }
}
