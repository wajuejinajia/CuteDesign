import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from 'eslint-plugin-vue';
import { vueTsConfigs, defineConfigWithVueTs } from '@vue/eslint-config-typescript'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: { ...globals.browser, "defineOptions": "readonly" } } },
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...defineConfigWithVueTs(vueTsConfigs.recommended),
  {
    // 添加自定义规则
    rules: {
      // 规则：使用分号结尾
      'semi': 0,
      // 规则： 可以让组件文件设置为单个单词
      'vue/multi-word-component-names': 0,
      // 禁用禁止使用 require() 的规则
      'no-undef': 'off',
      'import/no-commonjs': 'off'
    }
  }
];
