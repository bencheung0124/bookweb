module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'linebreak-style': 0,
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-unused-expressions': ['error', { allowTernary: true }],
        indent: ['error', 4],
        'max-len': ['error', { code: 200 }],
        'import/extensions': ['warn', 'always', { js: 'always' }],
    },
};
