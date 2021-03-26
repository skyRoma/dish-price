'use strict';

const NAME_PATTERN = '[a-z]+([a-z0-9-]+[a-z0-9]+)?$';
const PUBLIC_NAME_PATTERN = `^${NAME_PATTERN}`;
const PRIVATE_NAME_PATTERN = `^[_]?${NAME_PATTERN}`;

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],

  plugins: [
    'stylelint-order',
    'stylelint-declaration-strict-value',
    'stylelint-declaration-block-no-ignored-properties',
  ],

  rules: {
    // base
    'max-nesting-depth': 3, // just google 'the-inception-rule'
    'string-quotes': 'single',
    'declaration-colon-newline-after': 'always-multi-line',
    // order
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        'rules',
        'at-rules',
      ],
    ],

    // url() function
    'function-url-no-scheme-relative': true, // use explicit https
    'function-url-quotes': 'always',

    // fonts
    'font-weight-notation': 'numeric',

    // media queries
    'media-feature-name-no-unknown': true,
    'media-query-list-comma-newline-before': 'never-multi-line',
    'scss/media-feature-value-dollar-variable': 'always',

    // selectors
    'selector-type-no-unknown': null,

    //pseudo-elements
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],

    // vendor prefixes are forbidden, use autoprefixer
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,

    // comments
    'scss/double-slash-comment-whitespace-inside': 'always',

    // scss declarations
    'scss/declaration-nested-properties': 'never',
    'plugin/declaration-block-no-ignored-properties': true,

    // scss variables
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': PRIVATE_NAME_PATTERN,
    'scss/no-duplicate-dollar-variables': true,

    // scss placeholders
    'scss/percent-placeholder-pattern': PUBLIC_NAME_PATTERN,
    'scss/at-extend-no-missing-placeholder': true,

    // scss mixins
    'scss/at-mixin-named-arguments': [
      'always',
      {
        ignore: ['single-argument'],
      },
    ],
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': PUBLIC_NAME_PATTERN,

    // // scss functions
    'scss/at-function-named-arguments': [
      'always',
      {
        ignore: ['single-argument'],
        ignoreFunctions: ['/^mat-/i', '/^map/i', 'transparentize'],
      },
    ],
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': PUBLIC_NAME_PATTERN,

    // scss operators
    'scss/operator-no-newline-before': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,

    // scss selectors
    'selector-attribute-quotes': 'always',
    'selector-max-universal': 1,
    'selector-max-specificity': '1,3,3', // id,class,type
    'selector-max-compound-selectors': 5,
    'scss/selector-no-redundant-nesting-selector': true,

    // scss imports
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],

    // scss if-else
    'at-rule-empty-line-before': [
      'always',
      {
        ignoreAtRules: ['else'],
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      { ignoreAtRules: ['if', 'else'] },
    ],

    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // Colors
    'color-named': 'never',
  },
};
