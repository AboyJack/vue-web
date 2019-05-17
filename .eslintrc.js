// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  // plugins: [
  //   'vue'
  // ],
  // add your custom rules here
  rules: {
    'camelcase': 0,  // 强制驼峰命名规则
    'comma-dangle': [2, 'only-multiline'], // 是否允许对象中出现结尾逗号
    'indent': 0, // 强制一致的缩进风格
    'no-extend-native': 2, // 不允许扩展原生对象
    'no-multiple-empty-lines': 0, // 空行最多不能超过两行
    'no-return-assign': 0, // 不允许在return语句中使用分配语句
    'object-curly-spacing': 0, // 在括号内强制执行一致的间距
    'space-before-function-paren': [0, 'always'], // 函数定义时括号前的空格
    'vue/no-use-v-if-with-v-for': 0,
    // allow async-await
    // 'generator-star-spacing': 'off', // 生成器函数前后空格
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off' // 不允许出现debugger语句
  }
}
