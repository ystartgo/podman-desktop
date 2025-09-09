# Internationalization (i18n) Support

This directory contains the internationalization setup for Podman Desktop.

## Supported Languages

- **English (en)** - Default language
- **Traditional Chinese (zh-TW)** - 繁體中文

## Files Structure

- `index.ts` - Main i18n setup and configuration
- `locales/en.json` - English translations
- `locales/zh-TW.json` - Traditional Chinese translations

## Adding New Languages

1. Create a new JSON file in `locales/` directory (e.g., `locales/fr.json`)
2. Add the language registration in `index.ts`:
   ```typescript
   register('fr', () => import('./locales/fr.json'));
   ```
3. Add the language option to the LanguageSelector component

## Usage in Components

Import the translation function and use it in your Svelte components:

```svelte
<script lang="ts">
import { _ } from 'svelte-i18n';
</script>

<button>{$_('common.save')}</button>
```

## Language Persistence

The user's language preference is stored in `localStorage` as `podman-desktop-locale` and will persist across sessions.