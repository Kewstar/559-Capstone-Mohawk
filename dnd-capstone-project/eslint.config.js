import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    ignores: [
      "src/data/dnd5e_2014/spells/**",
      "src/data/dnd5e_2014/inventory/equipment/**",
      "src/data/dnd5e_2014/proficiencies/**",
    ],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [
          {
            group: ["**/spells/spells", "**/spells/spells.ts"],
            message: "Import spells from the spell's folder index, not the spells file(s) directly."
          },
          {
            group: ["**/equipment/equipment", "**/equipment/equipment.ts"],
            message: "Import items from the equipment folder index, not the equipment file(s) directly."
          }
        ]
      }]
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
