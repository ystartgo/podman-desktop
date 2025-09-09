import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

// Register locale loading functions
export function setupI18n(): void {
  // Register different locales
  register('en', () => import('./locales/en.json'));
  register('zh-TW', () => import('./locales/zh-TW.json'));

  // Initialize the i18n store with locale detection and fallback
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator() || 'en'
  });
}