import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

// Register locale loading functions
export function setupI18n(): void {
  // Register different locales
  register('en', () => import('./locales/en.json'));
  register('zh-TW', () => import('./locales/zh-TW.json'));

  // Get stored locale or fallback to browser/system locale
  const storedLocale = typeof window !== 'undefined' ? localStorage.getItem('podman-desktop-locale') : null;
  const initialLocale = storedLocale || getLocaleFromNavigator() || 'en';

  // Initialize the i18n store with locale detection and fallback
  init({
    fallbackLocale: 'en',
    initialLocale
  });
}

// Function to set and persist locale
export function setLocale(locale: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('podman-desktop-locale', locale);
  }
}