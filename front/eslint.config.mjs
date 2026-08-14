// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/padding-line-between-tags': ['error', [{ blankLine: 'always', prev: '*', next: '*' }]],
    'vue/max-attributes-per-line': ['error', { singleline: { max: 1 }, multiline: { max: 1 } }],
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }],
  },
})
