module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['vue', 'tailwindcss'],
  rules: {
    // Base
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-console': 'off',
    'no-debugger': 'error',
    'no-unused-vars': 'error',
    'max-classes-per-file': 'off',
    quotes: ['error', 'single'],
    'max-len': ['error', {
      code: 160,
      ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"',
      ignoreUrls: true
    }],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [0, { 'packageDir ': './src/' }],

    // from Airbnb
    'accessor-pairs': 'off',
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    complexity: ['off', 20],
    curly: ['error', 'multi-line'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    'dot-location': ['error', 'property'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'guard-for-in': 'off',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-div-regex': 'off',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods'
      ]
    }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-native-reassign': 'off',
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: []
    }],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false
    }],
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false
    }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', {
      props: true
    }],
    'no-self-compare': 'error',
    // @NOTE remove if annoing
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'off',
    // @NOTE remove if annoing
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false
    }],
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
    'no-with': 'error',
    'prefer-promise-reject-errors': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-object-has-own': 'off',
    'prefer-regex-literals': ['error', {
      disallowRedundantWrapping: true
    }],
    radix: 'off',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    yoda: 'error',
    
    // Base Vue
    'vue/comment-directive': 'error',
    'vue/jsx-uses-vars': 'error',

    // Priority A: Essential
    'vue/multi-word-component-names': 'off',
    'vue/no-arrow-functions-in-watch': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-child-content': 'error',
    'vue/no-computed-properties-in-data': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-useless-template-attributes': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/require-component-is': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/use-v-on-exact': 'error',
    'vue/valid-attribute-name': 'error',
    'vue/valid-next-tick': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'error',
    'vue/valid-v-text': 'error',

    // Priority A: Essential for Vue.js 3.x
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-inline-template': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-router-link-tag-prop': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-is': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    'vue/no-deprecated-vue-config-keycodes': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/valid-v-is': 'warn',
    'vue/valid-v-memo': 'error',
    
    // Priority B: Strongly Recommended
    'vue/attribute-hyphenation': 'error',
    'vue/component-definition-name-casing': 'error',
    'vue/first-attribute-linebreak': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    'vue/html-quotes': 'error',
    'vue/html-self-closing': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-shadow': 'error',
    'vue/one-component-per-file': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',

    // Priority B: Strongly Recommended for Vue.js 3.x
    'vue/require-explicit-emits': 'error',
    'vue/v-on-event-hyphenation': 'error',

    // Priority C: Recommended
    'vue/attributes-order': [
      'error',
      {
        order: [
          'CONDITIONALS',
          'TWO_WAY_BINDING',
          'LIST_RENDERING',
          'CONTENT',
          'SLOT',
          'OTHER_DIRECTIVES',
          'RENDER_MODIFIERS',
          'DEFINITION',
          'GLOBAL',
          'UNIQUE',
          'ATTR_STATIC',
          'ATTR_SHORTHAND_BOOL',
          'ATTR_DYNAMIC',
          'EVENTS'
        ],
        alphabetical: false
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style']
      }
    ],
    'vue/no-lone-template': 'error',
    'vue/no-multiple-slot-args': 'error',
    'vue/no-v-html': 'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'extends',
          'components',
          'directives',
          'mixins',
          'filters',
          ['provide', 'inject'],
          ['props', 'propsData'],
          'validate',
          'inheritAttrs',
          'asyncData',
          'data',
          'LIFECYCLE_HOOKS',
          'methods',
          'computed',
          'watch',
          'watchQuery',
          'ROUTER_GUARDS',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/this-in-template': 'error',
    'vue/block-tag-newline': 'error',
    
    // Uncategorized
    'vue/component-name-in-template-casing': 'error',
    'vue/component-options-name-casing': 'error',
    'vue/custom-event-name-casing': [
      'error',
      'kebab-case',
      {
        ignores: []
      }
    ],
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'error',
    'vue/match-component-import-name': 'error',
    'vue/new-line-between-multi-line-property': 'error',
    'vue/next-tick-style': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['all']
      }
    ],
    'vue/no-required-prop-with-default': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-components': ['error', {
      'ignorePatterns': [
        'router-link',
        'router-view'
      ]
    }],
    'vue/no-unsupported-features': [
      'error',
      {
        version: '^3.2.47',
        ignores: []
      }
    ],
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'off',
    'vue/padding-line-between-blocks': 'error',
    'vue/padding-line-between-tags': 'error',
    'vue/padding-lines-in-component-definition': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
    'vue/script-indent': 'error',
    'vue/v-for-delimiter-style': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        moduleDirectory: ['node_modules', 'src/']
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        map: [['@', './src']]
      }
    }
  }
}
