module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
    'stylelint-config-clean-order'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    /* Rules for sorting order.*/
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    /*Rules for overriding kebab-case*/
    'custom-media-pattern':[
      '^[a-z][a-zA-Z0-9]+$', {
        message: (name) => `\nExpected custom media query name "${name}" to be camelCase\n`,}],
    'custom-property-pattern': [
      '^[a-z][a-zA-Z0-9]+$', {
        message: (name) => `\nExpected custom property name "${name}" to be camelCase\n`,},],
    'keyframes-name-pattern': [
      '^[a-z][a-zA-Z0-9]+$', {
        message: (name) => `\nExpected keyframe name "${name}" to be camelCase\n`,},],
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$', {
        message: (selector) => `\nExpected class selector "${selector}" to be camelCase\n`,},],
    'selector-id-pattern': [
      '^[a-z][a-zA-Z0-9]+$', {
        message: (selector) => `\nExpected id selector "${selector}" to be camelCase\n`,},],
    'scss/dollar-variable-pattern': [
      '^[a-z][a-zA-Z0-9]+$', {
        message: (selector) => `\nExpected id selector "${selector}" to be camelCase\n`,},],
    'scss/at-mixin-pattern': [
      '^[a-z][a-zA-Z0-9]+$', {
        message: '\nExpected mixin name to be camelCase\n',},],
    'scss/at-function-pattern': [
      '^[a-z][a-zA-Z0-9]+$', {
        message: '\nExpected function name to be camelCase\n',},],
    'scss/percent-placeholder-pattern': [
      '^[a-z][a-zA-Z0-9]+$', {
        message: '\nExpected placeholder to be camelCase\n',},],
    /*Rules for overriding if else*/
    'at-rule-empty-line-before': [
      'always',{
        'ignoreAtRules': ['import','else'],}],
    'rule-empty-line-before': ['always'],
    'scss/at-else-closing-brace-newline-after': ['always-last-in-chain'],
    'scss/at-else-closing-brace-space-after': ['always-intermediate'],
    'scss/at-else-empty-line-before': ['never'],
    'scss/at-if-closing-brace-newline-after': ['always-last-in-chain'],
    'scss/at-if-closing-brace-space-after': ['always-intermediate'],
  }
}
