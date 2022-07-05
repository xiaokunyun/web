module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "parser": "vue-eslint-parser",
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        './.eslintrc-auto-import.json',
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        //在rules中添加自定义规则
        //关闭组件命名规则
        "vue/multi-word-component-names": "off",
    }
}
