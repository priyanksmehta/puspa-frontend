module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
        {
          files: ['*.svelte'],
          processor: 'svelte3/svelte3'
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        'svelte3', "@typescript-eslint", "prettier"
    ],
    "rules": {
        "prettier/prettier": "error"
    },
    settings: {
        'svelte3/typescript': true, // load TypeScript as peer dependency
    }
};
