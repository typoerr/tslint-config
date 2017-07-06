module.exports = {
    'defaultSeverity': 'warning',
    'rules': {
        ///// TypeScript-specific /////
        'adjacent-overload-signatures': true,
        'member-ordering': [
            true,
            {
                'order': 'statics-first'
            }
        ],
        'no-any': false,
        'no-empty-interface': true,
        'no-inferrable-types': [
            true,
            'ignore-params',
            'ignore-properties'
        ],
        'no-internal-module': true,
        'no-reference': true,
        'typedef-whitespace': [
            true,
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                'parameter': 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace'
            },
            {
                'call-signature': 'onespace',
                'index-signature': 'onespace',
                'parameter': 'onespace',
                'property-declaration': 'onespace',
                'variable-declaration': 'onespace'
            }
        ],
        'unified-signatures': true,
        ///// Functionality /////
        'await-promise': true,
        'curly': [
            true,
            'ignore-same-line'
        ],
        'forin': true,
        'label-position': true,
        'no-arg': true,
        'no-bitwise': true,
        'no-conditional-assignment': true,
        'no-console': [
            true,
            'debug',
            'info',
            'log',
            'time',
            'timeEnd',
            'trace'
        ],
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-super': true,
        'no-duplicate-variable': true,
        'no-empty': true,
        'no-eval': true,
        'no-floating-promises': true,
        'no-for-in-array': true,
        'no-invalid-template-strings': true,
        'no-misused-new': true,
        'no-shadowed-variable': true,
        'no-sparse-arrays': true,
        'no-string-throw': true,
        'no-switch-case-fall-through': true,
        'no-unbound-method': true,
        'no-unsafe-any': true,
        'no-unsafe-finally': true,
        'no-unused-expression': [
            true,
            'allow-fast-null-checks'
        ],
        'no-use-before-declare': true,
        'no-var-keyword': true,
        'radix': true,
        'switch-default': true,
        'triple-equals': true,
        'typeof-compare': true,
        'use-isnan': true,
        ///// Maintainability /////
        'cyclomatic-complexity': [
            true
        ],
        'eofline': true,
        'indent': [
            true,
            'spaces'
        ],
        'linebreak-style': [
            true,
            'LF'
        ],
        'max-line-length': [
            true,
            180
        ],
        'trailing-comma': [
            true,
            {
                'multiline': 'never',
                'singleline': 'never'
            }
        ],
        ///// Style /////
        'align': [
            false,
            'parameters',
            'arguments',
            'statements'
        ],
        'array-type': [
            true,
            'array'
        ],
        'class-name': true,
        'comment-format': [
            true,
            'check-space'
        ],
        'import-spacing': true,
        'jsdoc-format': true,
        'new-parens': true,
        'no-angle-bracket-type-assertion': true,
        'no-boolean-literal-compare': true,
        'no-consecutive-blank-lines': [
            true,
            2
        ],
        'no-parameter-properties': true,
        'no-reference-import': true,
        'no-trailing-whitespace': true,
        'no-unnecessary-callback-wrapper': true,
        'no-unnecessary-initializer': true,
        'no-unnecessary-qualifier': true,
        'object-literal-shorthand': true,
        'one-line': [
            true,
            'check-catch',
            'check-finally',
            'check-else',
            'check-open-brace',
            'check-whitespace'
        ],
        'one-variable-per-declaration': [
            true
        ],
        'quotemark': [
            true,
            'single',
            'avoid-escape'
        ],
        'semicolon': [
            true,
            'always',
            'ignore-bound-class-methods'
        ],
        'variable-name': [
            true,
            'ban-keywords',
            'check-format',
            'allow-pascal-case',
            'allow-leading-underscore'
        ],
        'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-type',
            'check-typecast'
        ]
    },
    'jsRules': {
        'member-ordering': [
            true,
            {
                'order': 'static-first'
            }
        ],
        'await-promise': true,
        'curly': [
            true,
            'ignore-same-line'
        ],
        'forin': true,
        'label-position': true,
        'no-arg': true,
        'no-bitwise': true,
        'no-conditional-assignment': true,
        'no-console': [
            true,
            'debug',
            'info',
            'log',
            'time',
            'timeEnd',
            'trace'
        ],
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-super': true,
        'no-duplicate-variable': true,
        'no-empty': true,
        'no-eval': true,
        'no-for-in-array': true,
        'no-invalid-template-strings': true,
        'no-invalid-this': true,
        'no-shadowed-variable': true,
        'no-sparse-arrays': true,
        'no-string-throw': true,
        'no-switch-case-fall-through': true,
        'no-unsafe-finally': true,
        'no-unused-expression': [
            true,
            'allow-fast-null-checks'
        ],
        'no-use-before-declare': true,
        'no-var-keyword': true,
        'radix': true,
        'switch-default': true,
        'triple-equals': true,
        'typeof-compare': true,
        'use-isnan': true,
        ///// Maintainability /////
        'cyclomatic-complexity': [
            true
        ],
        'eofline': true,
        'indent': [
            true,
            'spaces'
        ],
        'linebreak-style': [
            true,
            'LF'
        ],
        'max-line-length': [
            true,
            180
        ],
        'trailing-comma': [
            true,
            {
                'multiline': 'never',
                'singleline': 'never'
            }
        ],
        ///// Style /////
        'align': [
            false,
            'parameters',
            'arguments',
            'statements'
        ],
        'class-name': true,
        'comment-format': [
            true,
            'check-space'
        ],
        'import-spacing': true,
        'jsdoc-format': true,
        'new-parens': true,
        'no-consecutive-blank-lines': [
            true,
            2
        ],
        'no-trailing-whitespace': true,
        'no-unnecessary-callback-wrapper': true,
        'no-unnecessary-initializer': true,
        'object-literal-shorthand': true,
        'one-line': [
            true,
            'check-catch',
            'check-finally',
            'check-else',
            'check-open-brace',
            'check-whitespace'
        ],
        'one-variable-per-declaration': [
            true
        ],
        'quotemark': [
            true,
            'single',
            'avoid-escape'
        ],
        'semicolon': [
            true,
            'always',
            'ignore-bound-class-methods'
        ],
        'variable-name': [
            true,
            'ban-keywords',
            'check-format',
            'allow-pascal-case',
            'allow-leading-underscore'
        ],
        'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-type',
            'check-typecast'
        ]
    }
};
