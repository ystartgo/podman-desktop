<svelte:options runes={true} />

<script lang="ts">
import { locale, locales, _ } from 'svelte-i18n';
import SettingsPage from './SettingsPage.svelte';

// Get available locales and create language options
const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'zh-TW', name: '繁體中文' }
];

function handleLanguageChange(event: Event): void {
  const target = event.target as HTMLSelectElement;
  locale.set(target.value);
}
</script>

<SettingsPage title={$_('settings.language')}>
  <div class="flex flex-col space-y-4 max-w-2xl">
    <div class="flex flex-col space-y-2">
      <label for="language-selector" class="text-sm font-medium text-[color:var(--pd-invert-content-text)]">
        {$_('settings.language')}
      </label>
      <select
        id="language-selector"
        class="w-64 p-2 border border-[color:var(--pd-invert-content-border)] rounded bg-[color:var(--pd-invert-content-bg)] text-[color:var(--pd-invert-content-text)]"
        value={$locale}
        onchange={handleLanguageChange}
      >
        {#each languageOptions as option}
          <option value={option.code}>{option.name}</option>
        {/each}
      </select>
      <p class="text-sm text-[color:var(--pd-invert-content-card-text)]">
        Select your preferred language for the user interface.
      </p>
    </div>
  </div>
</SettingsPage>