import eslintConfigPrettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'css/unknown-at-rules': 'off'
    }
  },
  eslintConfigPrettier
])
