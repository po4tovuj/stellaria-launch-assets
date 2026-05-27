import { ref, watch } from 'vue';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'ds-theme';

function getInitial(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function useTheme() {
  const theme = ref<Theme>(getInitial());

  watch(
    theme,
    (t) => {
      document.documentElement.setAttribute('data-theme', t);
      localStorage.setItem(STORAGE_KEY, t);
    },
    { immediate: true },
  );

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  }

  return { theme, toggle };
}
